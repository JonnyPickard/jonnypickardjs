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
    "classnames": "2.2.6",
    "react": "16.4.2"
  }
}
`;
