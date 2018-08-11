import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import backgrounds from '@storybook/addon-backgrounds';

addDecorator(
  backgrounds([
    { name: 'white', value: '#FFFFFF', default: true },
    { name: 'grayscale', value: '#424242' }
  ])
);


setOptions({
  name: "Jonny's Components",
  url: 'https://github.com/jonnypickard.github.io',
  goFullScreen: false,
  showStoriesPanel: true,
  addonPanelInRight: false
  // showAddonPanel: false,
});

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
