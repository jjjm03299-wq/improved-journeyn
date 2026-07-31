# VPN Country Selector - GitHub Pages Deployment Guide

## Project Overview

This is a React-based VPN simulator application featuring:
- **10 Country Flags** with interactive selection (US, UK, Canada, Australia, Germany, France, Japan, Singapore, Netherlands, Brazil)
- **VPN Controls** (Connect, Disconnect, Status)
- **Mock API Endpoint** at `/api/vpn-countries.json`
- **Responsive Design** optimized for desktop, tablet, and mobile
- **GitHub Pages Ready** with gh-pages deployment configured

## Prerequisites

Before deploying, ensure you have:
- Node.js 14+ and npm installed
- Git installed and configured
- A GitHub account with the repository `jubilant-octo-bassoon`
- SSH key configured for GitHub (or use HTTPS authentication)

## Project Structure

```
vpn-country-app/
├── public/
│   ├── api/
│   │   └── vpn-countries.json    # Mock VPN API endpoint
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js                    # Main React component
│   ├── App.css                   # Styling
│   ├── index.js
│   └── index.css
├── package.json                  # Dependencies and scripts
├── deploy.js                     # Automated deployment script
├── DEPLOYMENT_GUIDE.md           # This file
└── build/                        # Production build (created after npm run build)
```

## Installation & Setup

### 1. Clone or Navigate to Project Directory

```bash
cd vpn-country-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Verify Git Configuration

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Deployment Methods

### Method 1: Automated Deployment Script (Recommended)

The project includes an automated deployment script that handles building and deploying in one command.

```bash
npm run deploy
```

This command will:
1. Build the React application
2. Deploy to GitHub Pages using gh-pages
3. Display deployment status and URL

### Method 2: Manual Deployment

#### Step 1: Build the Application

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

#### Step 2: Deploy to GitHub Pages

```bash
npm run deploy
```

This command uses `gh-pages` to push the `build/` directory to the `gh-pages` branch on GitHub.

#### Step 3: Verify Deployment

1. Go to your GitHub repository: `https://github.com/jjjm03299-wq/jubilant-octo-bassoon`
2. Navigate to **Settings** → **Pages**
3. Verify that the source is set to `gh-pages` branch
4. Your app will be available at: `https://jjjm03299-wq.github.io/jubilant-octo-bassoon/`

### Method 3: Manual Git Push (Advanced)

If you prefer manual control:

```bash
# Build the application
npm run build

# Commit changes to master/main branch
git add .
git commit -m "Update VPN app with latest changes"
git push origin master

# Deploy build folder to gh-pages branch
npx gh-pages -d build
```

## Configuration

### Update Homepage URL

If you change the repository name or GitHub username, update the `homepage` field in `package.json`:

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/"
}
```

Then rebuild and redeploy:

```bash
npm run build
npm run deploy
```

## Features

### VPN Controls
- **Connect VPN**: Establishes connection to selected country
- **Disconnect VPN**: Terminates VPN connection
- **Status Indicator**: Shows real-time connection status with visual feedback

### Country Selection
- Click any country card to select it
- Selected country is highlighted with a blue border
- Current selection displays detailed information (name, code, IP)

### Mock API Endpoint
- Access the API data at: `/api/vpn-countries.json`
- Click "Fetch API Data" button in the app to display JSON response
- Returns list of 10 countries with details (name, code, flag, IP, region, latency)

### Responsive Design
- Desktop: Full grid layout with 5 columns
- Tablet: 3-4 columns with adjusted spacing
- Mobile: 2 columns with optimized touch targets

## Development

### Local Development Server

To run the app locally during development:

```bash
npm start
```

This starts the development server at `http://localhost:3000` with hot-reload enabled.

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `build/` directory.

### Run Tests

```bash
npm test
```

Launches the test runner in interactive watch mode.

## Troubleshooting

### Issue: "fatal: remote origin already exists"

**Solution**: Remove the existing remote and add it again:
```bash
git remote remove origin
git remote add origin git@github.com:jjjm03299-wq/jubilant-octo-bassoon.git
```

### Issue: SSH Key Authentication Fails

**Solution**: Use HTTPS instead:
```bash
git remote set-url origin https://github.com/jjjm03299-wq/jubilant-octo-bassoon.git
```

### Issue: GitHub Pages Not Updating

**Solution**: 
1. Verify the `gh-pages` branch exists in your repository
2. Check GitHub Pages settings point to `gh-pages` branch
3. Clear browser cache and do a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
4. Wait 1-2 minutes for GitHub to rebuild the site

### Issue: App Shows 404 After Deployment

**Solution**: Ensure `homepage` field in `package.json` matches your GitHub Pages URL:
```json
"homepage": "https://jjjm03299-wq.github.io/jubilant-octo-bassoon/"
```

## API Endpoint Reference

### GET /api/vpn-countries.json

Returns a list of available VPN countries.

**Response:**
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
    },
    ...
  ],
  "timestamp": "2024-07-31T00:00:00Z"
}
```

## Performance Optimization

The production build includes:
- Code minification and bundling
- CSS optimization
- Image optimization
- Gzip compression
- Tree-shaking of unused code

Build size: ~62.47 kB (gzipped)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Security Notes

- This is a mock VPN simulator for demonstration purposes
- No real VPN functionality is implemented
- All data is static and served from GitHub Pages
- No sensitive information is transmitted

## Next Steps

1. **Deploy the app**: Run `npm run deploy`
2. **Verify deployment**: Visit `https://jjjm03299-wq.github.io/jubilant-octo-bassoon/`
3. **Test functionality**: Try connecting/disconnecting and selecting different countries
4. **Customize**: Modify colors, add more countries, or enhance features as needed

## Support & Documentation

- React Documentation: https://react.dev
- GitHub Pages: https://pages.github.com
- gh-pages Package: https://www.npmjs.com/package/gh-pages

## License

This project is provided as-is for educational and demonstration purposes.

---

**Created**: July 31, 2024  
**Last Updated**: July 31, 2024  
**Repository**: git@github.com:jjjm03299-wq/jubilant-octo-bassoon.git
