#!/usr/bin/env bash

# This script expects the following directory structure and has only been tested on mac os:
# .
# ├── JonnyPickard.github.io/
# └── portfolio-website-codebase/

PARENT_DIR=$(dirname `pwd`) 

JP_DIR_PATH="$PARENT_DIR/JonnyPickard.github.io"

echo $JP_DIR_PATH

yarn bundle

cp -R docs "$JP_DIR_PATH/docs"
cp README.md $JP_DIR_PATH
cp -R app/build/* $JP_DIR_PATH

git -C $JP_DIR_PATH add .; git -C $JP_DIR_PATH commit -m "New Release";
git -C $JP_DIR_PATH push origin master;