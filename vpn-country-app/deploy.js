#!/usr/bin/env node

/**
 * VPN Country App - GitHub Pages Deployment Script
 * This script automates the build and deployment process to GitHub Pages
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function executeCommand(command, description) {
  try {
    log(`\n▶ ${description}...`, 'blue');
    execSync(command, { stdio: 'inherit' });
    log(`✓ ${description} completed`, 'green');
    return true;
  } catch (error) {
    log(`✗ ${description} failed`, 'red');
    return false;
  }
}

async function deploy() {
  log('\n╔════════════════════════════════════════════════════════════╗', 'yellow');
  log('║   VPN Country App - GitHub Pages Deployment Script         ║', 'yellow');
  log('╚════════════════════════════════════════════════════════════╝\n', 'yellow');

  // Step 1: Check if git is initialized
  log('Checking repository status...', 'blue');
  if (!fs.existsSync(path.join(__dirname, '.git'))) {
    log('Git repository not found. Initializing...', 'yellow');
    executeCommand('git init', 'Initialize git repository');
  }

  // Step 2: Check git remote
  try {
    const remoteUrl = execSync('git config --get remote.origin.url', { encoding: 'utf-8' }).trim();
    log(`Current remote: ${remoteUrl}`, 'green');
  } catch {
    log('No remote configured. Please add remote manually:', 'yellow');
    log('git remote add origin git@github.com:jjjm03299-wq/jubilant-octo-bassoon.git', 'blue');
  }

  // Step 3: Build the application
  if (!executeCommand('npm run build', 'Build React application')) {
    log('Build failed. Aborting deployment.', 'red');
    process.exit(1);
  }

  // Step 4: Deploy to GitHub Pages
  if (!executeCommand('npm run deploy', 'Deploy to GitHub Pages')) {
    log('Deployment failed. Check your git configuration.', 'red');
    process.exit(1);
  }

  log('\n╔════════════════════════════════════════════════════════════╗', 'green');
  log('║   ✓ Deployment completed successfully!                     ║', 'green');
  log('╚════════════════════════════════════════════════════════════╝\n', 'green');

  log('Your app is now available at:', 'blue');
  log('https://jjjm03299-wq.github.io/jubilant-octo-bassoon/', 'green');

  log('\nNext steps:', 'yellow');
  log('1. Verify the deployment on GitHub Pages', 'reset');
  log('2. Check the gh-pages branch in your repository', 'reset');
  log('3. Enable GitHub Pages in repository settings if needed', 'reset');
}

deploy().catch((error) => {
  log(`\nUnexpected error: ${error.message}`, 'red');
  process.exit(1);
});
