// UXRay - Main plugin code
// This file runs in the Figma plugin sandbox

/// <reference types="@figma/plugin-typings" />

interface FrameAnalysisData {
  id: string;
  name: string;
  width: number;
  height: number;
  x: number;
  y: number;
  backgroundColor: string;
  children: ChildNodeData[];
  textContent: string[];
  hasImages: boolean;
  componentCount: number;
}

interface ChildNodeData {
  id: string;
  type: string;
  name: string;
  width: number;
  height: number;
  x: number;
  y: number;
  fills?: any[];
  fontFamily?: string;
  fontSize?: number;
  characters?: string;
  visible: boolean;
}

interface UXAnalysisResult {
  score: number;
  issues: Array<{
    title: string;
    description: string;
  }>;
  suggestions: string[];
}

// Show the plugin UI
figma.showUI(__html__, { 
  width: 600, 
  height: 1000,
  themeColors: true
});

// Handle messages from the UI
figma.ui.onmessage = async (msg: any) => {
  if (msg.type === 'analyze-frame') {
    try {
      const selection = figma.currentPage.selection;
      
      if (selection.length === 0) {
        figma.ui.postMessage({
          type: 'no-frame-selected'
        });
        return;
      }

      const selectedNode = selection[0];
      
      if (selectedNode.type !== 'FRAME') {
        figma.ui.postMessage({
          type: 'analysis-error',
          error: 'Please select a frame (not a component or other element)'
        });
        return;
      }
      
      // Extract frame data
      const frameData = await extractFrameData(selectedNode as FrameNode);
      
      // Send data to UI for Gemini API call
      figma.ui.postMessage({
        type: 'frame-data',
        data: frameData,
        apiKey: msg.apiKey,
        analysisType: msg.analysisType
      });
      
    } catch (error: any) {
      figma.ui.postMessage({
        type: 'analysis-error',
        error: `Error analyzing frame: ${error && error.message ? error.message : 'Unknown error'}`
      });
    }
  }
  
  if (msg.type === 'close-plugin') {
    figma.closePlugin();
  }
};

// Extract comprehensive data from a frame
async function extractFrameData(frame: FrameNode): Promise<FrameAnalysisData> {
  const frameData: FrameAnalysisData = {
    id: frame.id,
    name: frame.name,
    width: frame.width,
    height: frame.height,
    x: frame.x,
    y: frame.y,
    backgroundColor: getBackgroundColor(frame),
    children: [],
    textContent: [],
    hasImages: false,
    componentCount: 0
  };

  // Recursively extract child node data
  frameData.children = await extractChildrenData(frame.children);
  
  // Extract text content
  frameData.textContent = extractTextContent(frame);
  
  // Count components and images
  frameData.componentCount = countComponents(frame);
  frameData.hasImages = hasImageNodes(frame);

  return frameData;
}

// Extract data from child nodes
async function extractChildrenData(children: readonly SceneNode[]): Promise<ChildNodeData[]> {
  const childrenData: ChildNodeData[] = [];
  
  for (const child of children) {
    const childData: ChildNodeData = {
      id: child.id,
      type: child.type,
      name: child.name,
      width: 'width' in child ? child.width : 0,
      height: 'height' in child ? child.height : 0,
      x: child.x,
      y: child.y,
      visible: child.visible
    };

    // Add fills if available
    if ('fills' in child && child.fills && Array.isArray(child.fills)) {
      childData.fills = [...child.fills];
    }

    // Add text properties if text node
    if (child.type === 'TEXT') {
      const textNode = child as TextNode;
      childData.fontFamily = textNode.fontName && typeof textNode.fontName === 'object' 
        ? textNode.fontName.family 
        : 'Mixed';
      childData.fontSize = textNode.fontSize && typeof textNode.fontSize === 'number' 
        ? textNode.fontSize 
        : 16;
      childData.characters = textNode.characters;
    }

    childrenData.push(childData);
    
    // Recursively get children if they exist
    if ('children' in child && child.children.length > 0) {
      const nestedChildren = await extractChildrenData(child.children);
      childrenData.push(...nestedChildren);
    }
  }
  
  return childrenData;
}

// Extract all text content from frame
function extractTextContent(node: SceneNode): string[] {
  const textContent: string[] = [];
  
  if (node.type === 'TEXT') {
    textContent.push((node as TextNode).characters);
  }
  
  if ('children' in node) {
    for (const child of node.children) {
      textContent.push(...extractTextContent(child));
    }
  }
  
  return textContent.filter(text => text.trim().length > 0);
}

// Get background color of frame
function getBackgroundColor(frame: FrameNode): string {
  if (frame.fills && Array.isArray(frame.fills) && frame.fills.length > 0) {
    const fill = frame.fills[0] as SolidPaint;
    if (fill.type === 'SOLID') {
      const { r, g, b } = fill.color;
      return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`;
    }
  }
  return 'transparent';
}

// Count components in frame
function countComponents(node: SceneNode): number {
  let count = 0;
  
  if (node.type === 'COMPONENT' || node.type === 'INSTANCE') {
    count++;
  }
  
  if ('children' in node) {
    for (const child of node.children) {
      count += countComponents(child);
    }
  }
  
  return count;
}

// Check if frame has image nodes
function hasImageNodes(node: SceneNode): boolean {
  if (node.type === 'RECTANGLE' || node.type === 'ELLIPSE') {
    const shape = node as RectangleNode | EllipseNode;
    if (shape.fills && Array.isArray(shape.fills)) {
      return shape.fills.some((fill: Paint) => fill.type === 'IMAGE');
    }
  }
  
  if ('children' in node) {
    return node.children.some(child => hasImageNodes(child));
  }
  
  return false;
}

// Initialize plugin
