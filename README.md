# VPN API Application

## Overview
This is a full-stack VPN application with:
- **Backend API** (Node.js/Express) - VPN management endpoints
- **Frontend Dashboard** (HTML/CSS/JavaScript) - Interactive VPN UI
- **GitHub Pages Deployment** - Static site hosting

## API Endpoints

### VPN Management
- `POST /api/vpn/connect` - Connect to a VPN server
- `POST /api/vpn/disconnect` - Disconnect from VPN
- `GET /api/vpn/status` - Get current VPN status
- `GET /api/vpn/servers` - List all VPN servers (top 10)
- `GET /api/vpn/servers/flags` - List servers with country flags
- `GET /api/vpn/countries` - List all countries (top 10)
- `GET /api/vpn/countries/flags` - List countries with flags
- `GET /api/vpn/ips` - Generate VPN IP list (top 10)
- `GET /api/health` - Health check

## Features

### Backend Features
- Express.js REST API
- CORS support
- 10 pre-configured VPN servers
- Country-based organization
- Real-time status tracking
- VPN IP generation

### Frontend Features
- Real-time VPN status display
- Interactive server selection
- Country list with flags
- VPN IP information
- Auto-refresh status (5s interval)
- Responsive design
- Modern gradient UI

## Installation

### Prerequisites
- Node.js 14+
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Start the backend server
npm start
# Or for development with auto-reload
npm run dev
```

### Frontend
Open `public/index.html` in a web browser or serve with a web server.

## VPN Servers (Top 10)

1. 🇺🇸 US East (New York) - 192.168.1.1 - 15ms
2. 🇺🇸 US West (Los Angeles) - 192.168.1.2 - 25ms
3. 🇩🇪 Europe (Berlin) - 192.168.1.3 - 40ms
4. 🇬🇧 UK (London) - 192.168.1.4 - 35ms
5. 🇫🇷 France (Paris) - 192.168.1.5 - 38ms
6. 🇯🇵 Japan (Tokyo) - 192.168.1.6 - 80ms
7. 🇦🇺 Australia (Sydney) - 192.168.1.7 - 150ms
8. 🇨🇦 Canada (Toronto) - 192.168.1.8 - 20ms
9. 🇸🇬 Singapore (Singapore) - 192.168.1.9 - 90ms
10. 🇮🇳 India (Mumbai) - 192.168.1.10 - 110ms

## Countries (Top 10)

1. 🇺🇸 United States
2. 🇩🇪 Germany
3. 🇬🇧 United Kingdom
4. 🇫🇷 France
5. 🇯🇵 Japan
6. 🇦🇺 Australia
7. 🇨🇦 Canada
8. 🇸🇬 Singapore
9. 🇮🇳 India
10. 🇲🇽 Mexico

## GitHub Pages Deployment

### Build and Deploy
```bash
npm run deploy
```

This will:
1. Build the React application
2. Deploy to GitHub Pages at: `https://jjjm03299-wq.github.io/improved-journeyn`

## Project Structure
```
├── server.js              # Express API server
├── package.json          # Dependencies and scripts
├── public/
│   └── index.html       # Frontend dashboard
└── README.md            # Documentation
```

## Usage

### Backend
1. Start the server: `npm start`
2. API runs on `http://localhost:5000`
3. Test endpoints with curl or Postman

### Frontend
1. Open `public/index.html` in a browser
2. Click on a server to connect
3. View real-time VPN status
4. Disconnect when done

## Technologies Used
- **Backend**: Node.js, Express.js, CORS
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Deployment**: GitHub Pages
- **API Format**: REST with JSON

## License
MIT
