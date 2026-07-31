#!/bin/bash

# VPN Country App - Quick Deployment Script
# This script automates the deployment process to GitHub Pages

set -e

echo "╔════════════════════════════════════════════════════════════╗"
echo "║   VPN Country App - GitHub Pages Quick Deploy              ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Step 1: Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo -e "${BLUE}▶ Installing dependencies...${NC}"
    npm install
    echo -e "${GREEN}✓ Dependencies installed${NC}\n"
fi

# Step 2: Build the application
echo -e "${BLUE}▶ Building React application...${NC}"
npm run build
echo -e "${GREEN}✓ Build completed${NC}\n"

# Step 3: Deploy to GitHub Pages
echo -e "${BLUE}▶ Deploying to GitHub Pages...${NC}"
npm run deploy
echo -e "${GREEN}✓ Deployment completed${NC}\n"

# Step 4: Display deployment info
echo "╔════════════════════════════════════════════════════════════╗"
echo -e "║   ${GREEN}✓ Deployment completed successfully!${NC}                     ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo -e "${BLUE}Your app is now available at:${NC}"
echo -e "${GREEN}https://jjjm03299-wq.github.io/jubilant-octo-bassoon/${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Wait 1-2 minutes for GitHub Pages to rebuild"
echo "2. Visit the URL above to verify deployment"
echo "3. Check your repository settings for GitHub Pages configuration"
echo ""
