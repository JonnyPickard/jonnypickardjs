// @flow

import React, { PureComponent } from 'react';
import classNames from 'classnames';

import { Icon, iconThemeDefault } from '@jonnypickardjs/Atoms/Icon';
import { Heading, headingThemeDefault } from '@jonnypickardjs/Atoms/Heading';

import type { colorClassSelectors } from 'shared/flow-types/colorSelectorType.js';
import type { iconSizeSelectors } from 'shared/flow-types/iconSizeSelectorType.js';
import type { headingTypeSelectors } from 'shared/flow-types/headingTypeSelectorType.js';

type Props = {
  /** CSS modules style object */
  theme: {
    [css_modules_class: string]: string
  },
  iconName: string,
  iconSize: iconSizeSelectors,
  /** If you only want a colored block - useful for table keys */
  noIcon: boolean,
  /** Enum types that map to the css color class selectors */
  iconBackgroundColor: colorClassSelectors,
  iconBackgroundBorderRadius: boolean,
  iconColor: colorClassSelectors,
  captionText: string,
  captionSize: headingTypeSelectors,
  extendStyle?: string
};

/**
 * IconCaption Component
 */
class IconCaption extends PureComponent<Props> {
  static displayName = 'IconCaption';

  static defaultProps = {
    captionSize: 'h2',
    iconSize: 'md',
    noIcon: false,
    iconName: '',
    iconColor: '',
    iconBackgroundColor: '',
    iconBackgroundBorderRadius: false
  };

  /**
   * Render
   * @return {Element<*>} JSX
   */
  render() {
    const {
      theme,
      extendStyle,
      iconName,
      iconColor,
      iconBackgroundColor,
      iconSize,
      captionText,
      noIcon,
      iconBackgroundBorderRadius,
      captionSize
    } = this.props;

    return (
      <div className={classNames(theme.iconCaption, extendStyle)}>
        <Icon
          iconName={noIcon ? '' : iconName}
          iconSize={iconSize}
          color={iconColor}
          backgroundColor={iconBackgroundColor}
          backgroundBorderRadius={iconBackgroundBorderRadius}
          theme={iconThemeDefault}
        />
        <Heading
          content={captionText}
          headingType={captionSize}
          theme={headingThemeDefault}
        />
      </div>
    );
  }
}

export default IconCaption;
