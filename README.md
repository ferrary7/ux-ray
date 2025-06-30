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

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Gemini AI for powering the analysis
- Figma team for the excellent plugin API
- The design community for inspiration and feedback

## 📞 Support

- 🐛 **Issues**: [GitHub Issues](https://github.com/yourusername/uxray-figma-plugin/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/yourusername/uxray-figma-plugin/discussions)
- 📧 **Email**: your.email@example.com

---

Made with ❤️ for the design community
   - The plugin will appear in your plugins list

5. **Get your Gemini API key**
   - Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Create a new API key
   - Copy the key for use in the plugin

## 🎯 How to Use

1. **Open UXRay in Figma**
   - Select any Frame in your design
   - Open UXRay from the Plugins menu

2. **Configure the plugin**
   - Enter your Gemini API key (stored locally)
   - Choose analysis focus: General, Accessibility, Mobile, or Clarity

3. **Analyze your design**
   - Click "Analyze Selected Frame"
   - Wait for AI analysis (usually 3-5 seconds)
   - Review your UX score and insights

4. **Review results**
   - **Score**: 0-100 UX rating with category (Excellent/Good/Average/Needs Improvement)
   - **Issues**: Specific problems found in your design
   - **Suggestions**: Actionable recommendations for improvement

## 🏗️ Development

### Project Structure
```
ux-ray/
├── src/
│   ├── code.ts              # Main plugin logic (Figma sandbox)
│   └── getDesignInsights.ts # Gemini AI integration
├── ui.html                  # Plugin interface
├── ui.js                    # UI interactions & API calls
├── manifest.json            # Figma plugin configuration
├── package.json            # Dependencies & scripts
└── tsconfig.json           # TypeScript configuration
```

### Scripts
- `npm run build` - Compile TypeScript and prepare for deployment
- `npm run watch` - Watch for changes and auto-compile
- `npm run dev` - Development mode with file watching

### Key Components

**code.ts**: Runs in Figma's sandbox environment
- Extracts frame data (layout, text, components, visual properties)
- Handles frame selection validation
- Communicates with UI via postMessage

**ui.js**: Handles the plugin interface
- Manages user interactions and API key storage
- Calls Gemini API with extracted frame data
- Displays analysis results with rich formatting

**getDesignInsights.ts**: AI integration module
- Formats frame data for optimal AI analysis
- Constructs targeted prompts based on analysis type
- Handles API communication and response parsing

## 🔧 Configuration

### API Key Setup
The plugin requires a Google Gemini API key:
1. Get your key from [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Enter it in the plugin interface
3. It's stored locally in your browser for convenience

### Analysis Types
- **General**: Comprehensive UX evaluation covering all aspects
- **Accessibility**: Focus on WCAG compliance, contrast, and accessibility
- **Mobile**: Emphasis on mobile usability and responsive design
- **Clarity**: Content organization, hierarchy, and cognitive load

## 🔒 Privacy & Security

- **No data transmission**: Your designs never leave Figma's environment
- **Local API calls**: Gemini API is called directly from your browser
- **No servers**: No backend infrastructure - everything runs locally
- **API key security**: Keys are stored in your browser's localStorage only

## 🚀 Deployment

To package for distribution:
1. Run `npm run build`
2. The `dist/` folder contains all compiled files
3. Package the contents for Figma plugin submission

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🆘 Support

If you encounter issues:
1. Check that your API key is valid and has proper permissions
2. Ensure you're selecting a Frame (not other element types)
3. Verify your internet connection for API calls
4. Check the browser console for detailed error messages

## 🙏 Acknowledgments

- Google Gemini AI for powerful language model capabilities
- Figma for excellent plugin API and development tools
- The design community for inspiring better UX analysis tools

---

**Happy designing! 🎨✨**
