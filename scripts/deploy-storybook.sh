#!/usr/bin/env bash

yarn build-storybook

git add component-library/.out && git commit -m "Storybook Release"
git subtree push --prefix component-library/.out origin gh-pages 