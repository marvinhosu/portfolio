#!/bin/bash
# Build script that properly loads environment variables from .env file

# Load environment variables from .env
if [ -f .env ]; then
  export $(cat .env | grep -v '^#' | xargs)
fi

# Run the build
npm run build
