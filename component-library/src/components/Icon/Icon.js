// @flow

import React, { PureComponent } from 'react';
import classNames from 'classnames';

import type { colorClassSelectors } from 'shared/flow-types/colorSelectorType.js';

type Props = {
  /** CSS modules style object */
  theme: {
    [css_modules_class: string]: string
  },
  /** Path + Selector for the icon */
  iconName: string,
  /** Enum types that map to the css color class selectors */
  color: colorClassSelectors,
  extendStyle?: Array<*> | string
};

/**
 * Icon
 * @param {Object} props - props
 * @returns {JSX} Icon component
 */
class Icon extends PureComponent<Props> {
  static defaultProps = {
    color: 'black'
  };

  getClassSelectorForColor = (): string => {
    const { color, theme } = this.props;

    return theme[`icon${color}`];
  };

  render() {
    const { theme, iconName, extendStyle } = this.props;
    return (
      <div
        className={classNames(
          theme.icon,
          this.getClassSelectorForColor(),
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
