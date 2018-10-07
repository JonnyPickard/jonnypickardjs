import icons from 'assets/icons/icons.svg';
import iconNames from 'assets/icons/iconNames.js';

export const iconOptions = iconNames.reduce((optionsObject, iconName) => {
  optionsObject[`${icons}#${iconName}`] = iconName;

  return optionsObject;
}, {});
