#!/bin/bash

# Kill any running Node.js processes
killall node 2>/dev/null

# Get the absolute path of the script's directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Navigate to the portfolio-site directory
cd "$SCRIPT_DIR/portfolio-site"

# Verify we're in the correct directory
if [ ! -f "package.json" ]; then
    echo "Error: Could not find package.json in the portfolio-site directory"
    exit 1
fi

# Clear the .next directory to ensure a fresh build
rm -rf .next

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Start the development server
echo "Starting development server..."
npm run dev 