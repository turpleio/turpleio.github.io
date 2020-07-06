#!/bin/bash

echo "Clean and Build ..."
npm run build

echo "Copy build/guide to ../../../"
cp -r build/guide ../../../
