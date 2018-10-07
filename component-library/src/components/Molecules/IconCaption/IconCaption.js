// @flow

import React, { PureComponent } from 'react';
import classNames from 'classnames';

import { Icon, iconThemeDefault } from '@jonnypickardjs/Atoms/Icon';

type Props = {
  /** CSS modules style object */
  theme: {
    [css_modules_class: string]: string
  },
  iconName: string,
  iconColor: string,
  extendStyle?: string
};

/**
 * IconCaption Component
 */
class IconCaption extends PureComponent<Props> {
  static displayName = 'IconCaption';

  /**
   * Render
   * @return {Element<*>} JSX
   */
  render() {
    const { theme, extendStyle, iconName, iconColor } = this.props;
    return (
      <div className={classNames(theme.iconCaption, extendStyle)}>
        <Icon iconName={iconName} color={iconColor} theme={iconThemeDefault} />
      </div>
    );
  }
}

export default IconCaption;
