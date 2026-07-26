#!/bin/bash

# VPN API GitHub Pages Deployment Script
# This script automates the deployment process to GitHub Pages

set -e

echo "🚀 VPN API GitHub Pages Deployment Script"
echo "========================================="
echo ""

# Color codes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Input GitHub Token
echo -e "${BLUE}📝 GitHub Token Configuration${NC}"
echo "==============================="
echo ""
echo "To deploy to GitHub Pages, you need a GitHub Personal Access Token (PAT)"
echo ""

read -p "Enter your GitHub Token: " GITHUB_TOKEN

if [ -z "$GITHUB_TOKEN" ]; then
    echo -e "${RED}❌ Error: GitHub token cannot be empty${NC}"
    exit 1
fi

echo -e "${GREEN}✓ GitHub Token received${NC}"
echo ""

# Input Repository Information
echo -e "${BLUE}📋 Repository Information${NC}"
echo "============================"
echo ""

read -p "Enter repository owner (default: jjjm03299-wq): " REPO_OWNER
REPO_OWNER=${REPO_OWNER:-jjjm03299-wq}

read -p "Enter repository name (default: improved-journeyn): " REPO_NAME
REPO_NAME=${REPO_NAME:-improved-journeyn}

read -p "Enter branch to deploy (default: main): " BRANCH
BRANCH=${BRANCH:-main}

echo -e "${GREEN}✓ Repository: ${REPO_OWNER}/${REPO_NAME} (${BRANCH})${NC}"
echo ""

# Display Configuration
echo -e "${BLUE}⚙️  Deployment Configuration${NC}"
echo "============================="
echo ""
echo "Repository Owner:  ${REPO_OWNER}"
echo "Repository Name:   ${REPO_NAME}"
echo "Branch:            ${BRANCH}"
echo "Deploy Directory:  ./public"
echo "Pages URL:         https://${REPO_OWNER}.github.io/${REPO_NAME}"
echo ""

# Confirmation
read -p "Is this configuration correct? (y/n): " CONFIRM
if [ "$CONFIRM" != "y" ]; then
    echo -e "${RED}❌ Deployment cancelled${NC}"
    exit 1
fi

echo ""
echo -e "${BLUE}🔧 Setting up environment variables...${NC}"
echo ""

# Set environment variables
export GITHUB_TOKEN="$GITHUB_TOKEN"
export GITHUB_REPOSITORY="${REPO_OWNER}/${REPO_NAME}"
export GITHUB_REF="refs/heads/${BRANCH}"

# Create .env file (for local reference only, not committed)
cat > .env.deployment << EOF
GITHUB_TOKEN=$GITHUB_TOKEN
GITHUB_REPOSITORY=$GITHUB_REPOSITORY
GITHUB_REF=$GITHUB_REF
DEPLOY_DIR=./public
PAGES_URL=https://${REPO_OWNER}.github.io/${REPO_NAME}
DEPLOYMENT_DATE=$(date -u '+%Y-%m-%dT%H:%M:%SZ')
EOF

echo -e "${GREEN}✓ Environment variables configured${NC}"
echo ""

# Verify public directory exists
echo -e "${BLUE}📁 Verifying deployment directory...${NC}"
if [ ! -d "./public" ]; then
    echo -e "${RED}❌ Error: ./public directory not found${NC}"
    exit 1
fi

echo -e "${GREEN}✓ ./public directory found${NC}"
echo ""

# Install dependencies (if needed)
echo -e "${BLUE}📦 Installing dependencies...${NC}"
if [ -f "package.json" ]; then
    npm install
    echo -e "${GREEN}✓ Dependencies installed${NC}"
else
    echo -e "${YELLOW}⚠ package.json not found, skipping npm install${NC}"
fi
echo ""

# Build (if needed)
echo -e "${BLUE}🔨 Building application...${NC}"
if grep -q '"build"' package.json 2>/dev/null; then
    npm run build
    echo -e "${GREEN}✓ Build completed${NC}"
else
    echo -e "${YELLOW}⚠ No build script found, skipping build${NC}"
fi
echo ""

# Deploy to GitHub Pages
echo -e "${BLUE}🚀 Deploying to GitHub Pages...${NC}"
echo ""

# Configure git
git config --global user.email "deployment@github.com"
git config --global user.name "GitHub Pages Deploy Bot"

# Install gh-pages if not present
if ! npm list gh-pages > /dev/null 2>&1; then
    echo "Installing gh-pages..."
    npm install --save-dev gh-pages
fi

# Deploy using gh-pages
echo "Running gh-pages deployment..."
npx gh-pages -d public -r "https://${GITHUB_TOKEN}@github.com/${REPO_OWNER}/${REPO_NAME}.git"

echo ""
echo -e "${GREEN}✅ Deployment successful!${NC}"
echo ""

# Display success information
echo -e "${BLUE}📊 Deployment Summary${NC}"
echo "======================"
echo ""
echo "Repository:        ${REPO_OWNER}/${REPO_NAME}"
echo "Branch:            ${BRANCH}"
echo "Deploy Directory:  ./public"
echo "GitHub Pages URL:  https://${REPO_OWNER}.github.io/${REPO_NAME}"
echo "Deployment Time:   $(date -u '+%Y-%m-%d %H:%M:%S UTC')"
echo ""

# Verify deployment
echo -e "${BLUE}🔍 Verifying deployment...${NC}"
echo ""

PAGES_CHECK=$(curl -s -o /dev/null -w "%{http_code}" "https://${REPO_OWNER}.github.io/${REPO_NAME}")

if [ "$PAGES_CHECK" = "200" ]; then
    echo -e "${GREEN}✓ GitHub Pages is live and accessible!${NC}"
    echo ""
    echo "Visit your deployed VPN API dashboard:"
    echo -e "${GREEN}https://${REPO_OWNER}.github.io/${REPO_NAME}${NC}"
else
    echo -e "${YELLOW}⚠ Pages deployment may take a few minutes to be live${NC}"
    echo "Check status at: https://github.com/${REPO_OWNER}/${REPO_NAME}/settings/pages"
fi

echo ""

# Display API endpoints
echo -e "${BLUE}🔌 Available API Endpoints${NC}"
echo "============================"
echo ""
echo "Dashboard:       https://${REPO_OWNER}.github.io/${REPO_NAME}"
echo "Status:          GET  /api/vpn/status"
echo "Connect:         POST /api/vpn/connect"
echo "Disconnect:      POST /api/vpn/disconnect"
echo "Servers:         GET  /api/vpn/servers"
echo "Servers Flags:   GET  /api/vpn/servers/flags"
echo "Countries:       GET  /api/vpn/countries"
echo "Countries Flags: GET  /api/vpn/countries/flags"
echo "VPN IPs:         GET  /api/vpn/ips"
echo ""

# Cleanup
echo -e "${BLUE}🧹 Cleaning up...${NC}"
rm -f .env.deployment
echo -e "${GREEN}✓ Cleanup completed${NC}"
echo ""

echo -e "${GREEN}🎉 Deployment Complete!${NC}"
echo ""
echo "Next steps:"
echo "1. Open your browser and visit: https://${REPO_OWNER}.github.io/${REPO_NAME}"
echo "2. Test the VPN API endpoints"
echo "3. Configure additional servers if needed"
echo "4. Share your VPN API dashboard with others"
echo ""
echo "For support, check: GITHUB_TOKEN_SETUP.md"
