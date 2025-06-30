# UXRay - AI-Powered Figma UX Analysis Plugin

![UXRay Banner](https://via.placeholder.com/800x200/6366f1/ffffff?text=UXRay+Figma+Plugin)

UXRay is a sophisticated Figma plugin that leverages Google's Gemini AI to provide intelligent UX analysis and feedback on your design frames. Get instant insights on usability, accessibility, visual hierarchy, and mobile readiness.

## ✨ Features

- **🤖 AI-Powered Analysis**: Uses Google Gemini 2.0 Flash for intelligent UX evaluation
- **🎯 Multiple Analysis Types**: Focus on general UX, accessibility, mobile usability, or content clarity  
- **📊 Comprehensive Scoring**: Get a 0-100 UX score with detailed explanations
- **💡 Actionable Insights**: Receive specific issues and improvement suggestions
- **🎨 Clean Interface**: Modern, Figma-style UI that feels native to the platform
- **🔒 Secure**: Your data stays local - no external servers involved

## 🚀 Quick Start

1. **Get Gemini API Key**: Visit [Google AI Studio](https://aistudio.google.com/app/apikey) to get your free API key
2. **Build the plugin**: Run `npm run build` in this directory  
3. **Install in Figma**: Go to Plugins → Development → Import plugin from manifest, select `dist/manifest.json`
4. **Test it**: Select a frame in Figma, run UXRay plugin, enter your API key, and click analyze!

## 📋 Requirements

- Figma account with plugin development access
- Google Gemini API key (free tier available)
- Node.js 16+ and npm for development

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/uxray-figma-plugin.git
cd uxray-figma-plugin
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Build the Plugin
```bash
npm run build
```

### 4. Load in Figma
- Open Figma Desktop App
- Go to **Plugins → Development → Import plugin from manifest**
- Select the `dist/manifest.json` file from this project
- The plugin is now available in your plugins list!

## 🎯 Usage

1. **Select a Frame**: Choose any frame in your Figma design
2. **Run UXRay**: Find UXRay in your plugins menu and click to run
3. **Enter API Key**: Paste your Gemini API key (stored locally in your browser)
4. **Choose Analysis Type**:
   - **General**: Comprehensive UX evaluation
   - **Accessibility**: WCAG compliance and accessibility focus
   - **Mobile**: Mobile-specific usability patterns
   - **Clarity**: Visual hierarchy and information architecture
5. **Get Results**: View your UX score, issues, and recommendations

## 📁 Project Structure

```
uxray-figma-plugin/
├── src/
│   └── code.ts          # Main plugin logic
├── dist/                # Built files (auto-generated)
├── ui.html              # Plugin user interface
├── manifest.json        # Figma plugin configuration
├── package.json         # Node.js dependencies
├── tsconfig.json        # TypeScript configuration
└── README.md           # You are here!
```

## 🔧 Development

### Available Scripts

```bash
npm run build    # Build the plugin for production
npm run watch    # Watch for changes and auto-rebuild  
npm run clean    # Clean the dist directory
```

### Making Changes

1. Edit `src/code.ts` for plugin logic
2. Edit `ui.html` for UI changes  
3. Run `npm run build` to compile
4. Refresh the plugin in Figma to see changes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Google Gemini AI for powering the analysis
- Figma team for the excellent plugin API
- The design community for inspiration and feedback

---

Made with ❤️ for the design community
  
