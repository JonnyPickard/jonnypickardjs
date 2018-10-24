#!/usr/bin/env bash

# This script expects the following directory structure and has only been tested on mac os:
# .
# ├── JonnyPickard.github.io/
# └── portfolio-website-codebase/

PARENT_DIR=$(dirname `pwd`) 
JP_DIR_PATH="$PARENT_DIR/JonnyPickard.github.io"
GIT_BRANCH=$(git rev-parse --symbolic-full-name --abbrev-ref HEAD)
ALLOWED_DEPLOYMENT_BRANCH="master"

if [ $GIT_BRANCH != $ALLOWED_DEPLOYMENT_BRANCH ]
  then
    echo "Warning you are attempting to deploy from the wrong branch"
    exit 1;
fi

yarn bundle

cp -R docs "$JP_DIR_PATH/docs"
cp README.md $JP_DIR_PATH
cp -R app/build/* $JP_DIR_PATH

git -C $JP_DIR_PATH add .; git -C $JP_DIR_PATH commit -m "New Release";
git -C $JP_DIR_PATH push origin master;