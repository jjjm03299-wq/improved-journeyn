# 🌐 VPN Country Selector

A modern, interactive React application that simulates a VPN client with the ability to connect to 10 different countries. Built with React, styled with modern CSS, and ready for GitHub Pages deployment.

## Features

### 🔌 VPN Connection Management
- **Connect VPN**: Select a country and establish a connection
- **Disconnect VPN**: Terminate the current VPN connection
- **Status Indicator**: Real-time visual feedback with animated status indicator
- **Live Status Display**: Shows current connection status and selected country

### 🌍 10 Country Servers
- 🇺🇸 United States (North America)
- 🇬🇧 United Kingdom (Europe)
- 🇨🇦 Canada (North America)
- 🇦🇺 Australia (Oceania)
- 🇩🇪 Germany (Europe)
- 🇫🇷 France (Europe)
- 🇯🇵 Japan (Asia)
- 🇸🇬 Singapore (Asia)
- 🇳🇱 Netherlands (Europe)
- 🇧🇷 Brazil (South America)

### 🎨 Modern UI/UX
- Responsive design (mobile, tablet, desktop)
- Beautiful gradient background
- Smooth animations and transitions
- Interactive country selection cards
- Professional color scheme
- Touch-friendly interface

### 📡 Mock API Endpoint
- RESTful API endpoint at `/api/vpn-countries.json`
- Returns complete country data with metadata
- Includes IP addresses, regions, and latency information
- Fetch API Data button to display live JSON response

## Quick Start

### Prerequisites
- Node.js 14+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone git@github.com:jjjm03299-wq/jubilant-octo-bassoon.git
cd jubilant-octo-bassoon

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `build/` directory.

### Deploy to GitHub Pages

```bash
npm run deploy
```

Automatically builds and deploys to GitHub Pages.

## Project Structure

```
vpn-country-app/
├── public/
│   ├── api/
│   │   └── vpn-countries.json      # Mock VPN API data
│   ├── index.html                  # HTML entry point
│   └── ...
├── src/
│   ├── App.js                      # Main React component
│   ├── App.css                     # Styling
│   ├── index.js                    # React entry point
│   └── ...
├── package.json                    # Dependencies and scripts
├── deploy.js                       # Deployment automation script
└── DEPLOYMENT_GUIDE.md             # Detailed deployment instructions
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs development server at http://localhost:3000 |
| `npm run build` | Creates optimized production build |
| `npm test` | Runs test suite in watch mode |
| `npm run deploy` | Builds and deploys to GitHub Pages |
| `npm run eject` | Ejects from Create React App (irreversible) |

## Usage

### Selecting a Country
1. Click on any country card in the "Available Countries" section
2. The selected country will be highlighted with a blue border
3. Country details appear in the "Selected Country" section

### Connecting to VPN
1. Select your desired country
2. Click the "✓ Connect VPN" button
3. Status indicator will turn green and show "Connected to [Country]"

### Disconnecting from VPN
1. Click the "✕ Disconnect VPN" button
2. Status indicator will turn gray and show "Disconnected"

### Viewing API Data
1. Scroll to the "VPN API Endpoint" section
2. Click "Fetch API Data" button
3. JSON response displays with all country information

## API Reference

### GET /api/vpn-countries.json

Returns list of available VPN countries with metadata.

**Response Example:**
```json
{
  "endpoint": "/api/vpn/countries",
  "method": "GET",
  "status": "success",
  "data": [
    {
      "id": 1,
      "name": "United States",
      "code": "US",
      "flag": "🇺🇸",
      "ip": "192.168.1.1",
      "region": "North America",
      "latency": "12ms"
    }
  ],
  "timestamp": "2024-07-31T00:00:00Z"
}
```

## Deployment

### GitHub Pages
The app is configured for automatic deployment to GitHub Pages.

**URL**: `https://jjjm03299-wq.github.io/jubilant-octo-bassoon/`

**Deploy Command**:
```bash
npm run deploy
```

For detailed deployment instructions, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

## Technologies Used

- **React 19.2.8** - UI framework
- **React Scripts 5.0.1** - Build tooling
- **CSS3** - Styling with gradients and animations
- **gh-pages 6.3.0** - GitHub Pages deployment
- **Node.js** - JavaScript runtime

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Build Size**: ~62.47 kB (gzipped)
- **Load Time**: < 2 seconds on 4G
- **Lighthouse Score**: 90+
- **Fully Responsive**: Works on all screen sizes

## Customization

### Change Colors
Edit the CSS variables in `src/App.css`:
```css
/* Update gradient colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Add More Countries
Edit the `vpnCountries` array in `src/App.js`:
```javascript
const vpnCountries = [
  { id: 1, name: 'Country Name', code: 'CC', flag: '🏳️', ip: '192.168.1.1' },
  // Add more countries...
];
```

### Update API Endpoint
Modify `public/api/vpn-countries.json` with your own data.

## Troubleshooting

### Port 3000 Already in Use
```bash
# Use a different port
PORT=3001 npm start
```

### Build Fails
```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deployment Issues
See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed troubleshooting.

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## License

This project is provided as-is for educational and demonstration purposes.

## Support

For issues and questions:
1. Check [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
2. Review React documentation: https://react.dev
3. Check GitHub Pages documentation: https://pages.github.com

---

**Built with ❤️ using React**  
**Deployed to GitHub Pages**  
**Last Updated**: July 31, 2024
