import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'component-library',
  url: 'https://github.com/JonnyPickard/react-component-lib-boilerplate',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: false,
  addonPanelInRight: false
});

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
