// @flow

import React, { PureComponent } from 'react';
import classNames from 'classnames';

import type { colorClassSelectors } from '@jonnypickardjs/clib-shared/flow-types/colorSelectorType.js';
import type { iconSizeSelectors } from '@jonnypickardjs/clib-shared/flow-types/iconSizeSelectorType.js';

type Props = {
  /** CSS modules style object */
  theme: {
    [css_modules_class: string]: string
  },
  /** Path + Selector for the icon */
  iconName: string,
  /** Enum types that map to the css color class selectors */
  color: colorClassSelectors,
  backgroundColor: colorClassSelectors,
  /** Have border radius on bg */
  backgroundBorderRadius: boolean,
  iconSize: iconSizeSelectors,
  extendStyle?: Array<*> | string
};

/**
 * Icon
 * @param {Object} props - props
 * @returns {JSX} Icon component
 */
class Icon extends PureComponent<Props> {
  static defaultProps = {
    color: 'black',
    iconSize: 'md',
    backgroundColor: '',
    backgroundBorderRadius: false
  };

  getClassSelectorForColor = (): string => {
    const { color, theme } = this.props;

    return theme[`iconcolors${color}`];
  };

  getClassSelectorForBGColor = (): string => {
    const { backgroundColor, theme } = this.props;

    return theme[`iconbackgroundColors${backgroundColor}`];
  };

  getClassSelectorForSize = (): string => {
    const { iconSize, theme } = this.props;

    return theme[`iconsizes${iconSize}`];
  };

  render() {
    const { theme, iconName, extendStyle, backgroundBorderRadius } = this.props;
    return (
      <div
        className={classNames(
          theme.icon,
          backgroundBorderRadius && theme.iconbackgroundBorderRadius,
          this.getClassSelectorForColor(),
          this.getClassSelectorForBGColor(),
          this.getClassSelectorForSize(),
          extendStyle
        )}
      >
        <svg>
          <use xlinkHref={iconName} />
        </svg>
      </div>
    );
  }
}

export default Icon;
