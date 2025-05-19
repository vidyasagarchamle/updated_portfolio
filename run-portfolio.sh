#!/bin/bash

# Get the absolute path of the script's directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Change to the portfolio-site directory
cd "$SCRIPT_DIR/portfolio-site"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "Error: Cannot find package.json in the portfolio-site directory!"
    exit 1
fi

echo "Starting portfolio site from correct directory: $(pwd)"
npm run dev 