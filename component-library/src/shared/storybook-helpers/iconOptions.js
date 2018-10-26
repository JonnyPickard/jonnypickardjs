import icons from '@jonnypickardjs/assets/icons/icons.svg';
import iconNames from '@jonnypickardjs/assets/icons/iconNames.js';

export const iconOptions = iconNames.reduce((optionsObject, iconName) => {
  optionsObject[`${icons}#${iconName}`] = iconName;

  return optionsObject;
}, {});
