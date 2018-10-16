// @flow

import React, { PureComponent } from 'react';
import classNames from 'classnames';

import type { colorClassSelectors } from 'shared/flow-types/colorSelectorType.js';

type Props = {
  /** CSS modules style object */
  theme: {
    [css_modules_class: string]: string
  },
  dividerColor: colorClassSelectors,
  dividerSize: 'xs' | 'sm' | 'md',
  axis: 'vertical' | 'horizontal',
  extendStyle?: string
};

/**
 * Divider Component
 */
class Divider extends PureComponent<Props> {
  static displayName = 'Divider';

  static defaultProps = {
    dividerColor: 'grayscaleColor5',
    axis: 'horizontal',
    dividerSize: 'xs'
  };

  getClassSelectorForSize = (): string => {
    const { dividerSize, axis, theme } = this.props;

    return theme[`divider${axis}${dividerSize}`];
  };

  getClassSelectorForAxis = (): string => {
    const { axis, theme } = this.props;

    return theme[`divider${axis}`];
  };

  getClassSelectorForColor = (): string => {
    const { dividerColor, theme } = this.props;

    return theme[`dividercolors${dividerColor}`];
  };

  /**
   * Render
   * @return {Element<*>} JSX
   */
  render() {
    const { theme, extendStyle, axis } = this.props;

    const DividerTag = axis === 'horizontal' ? 'hr' : 'div';

    return (
      <DividerTag
        className={classNames(
          theme.divider,
          this.getClassSelectorForSize(),
          this.getClassSelectorForAxis(),
          this.getClassSelectorForColor(),
          extendStyle
        )}
      />
    );
  }
}

export default Divider;
