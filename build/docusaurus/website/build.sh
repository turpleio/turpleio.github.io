#!/bin/bash

echo "Clean and Build ..."
npm run build

echo "Copy build/guide to ../../../"
rm -rf ../../../guide
cp -r build/guide ../../../
