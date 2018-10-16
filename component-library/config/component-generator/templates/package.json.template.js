module.exports = componentName => `\
{
  "name": "@jonnypickardjs/${String(componentName).toLowerCase()}",
  "description": "Presentational",
  "version": "0.0.0",
  "main": "./index.js",
  "files": [
    "./__themes__/${componentName}.default.scss"
  ],
  "peerDependencies": {
    "react": "^16.2.0",
    "classnames": "^2.2.5"
  }
}
`;
