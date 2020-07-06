#!/bin/bash

echo "Remove dist ..."
rm -rf dist

echo "Build ..."
npm run build

echo "Copy dist/* to ../.."
cp -r dist/* ../..
