module.exports = {
  templatesDirectory: 'config/component-generator/templates',
  templates: [
    {
      templateName: 'stories.template.js',
      extension: '.stories.js'
    },
    {
      folderName: '__tests__',
      templateName: 'test.template.js',
      extension: '.test.js'
    },
    {
      folderName: 'themes',
      templateName: 'scss.template.js',
      extension: '.default.scss'
    },
    {
      fileName: 'package.json',
      templateName: 'package.json.template.js',
      extension: '.json'
    },
    {
      templateName: 'component.template.js',
      extension: '.js'
    },
    {
      fileName: 'index.js',
      templateName: 'index.template.js',
      extension: '.js'
    }
  ]
};
