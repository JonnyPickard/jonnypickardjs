// @flow

import React, { PureComponent } from 'react';
import classNames from 'classnames';
import get from 'lodash.get';

import { Icon, iconThemeDefault } from '@jonnypickardjs/icon';
import { Heading, headingThemeDefault } from '@jonnypickardjs/heading';
import {
  ProfilePhoto,
  profilePhotoThemeDefault
} from '@jonnypickardjs/profilephoto';
import {
  WithLink,
  withLinkThemeDefault as withLinkTheme
} from '@jonnypickardjs/withlink';

import type { colorClassSelectors } from '@jonnypickardjs/clib-shared/flow-types/colorSelectorType.js';
import type { iconSizeSelectors } from '@jonnypickardjs/clib-shared/flow-types/iconSizeSelectorType.js';
import type { headingTypeSelectors } from '@jonnypickardjs/clib-shared/flow-types/headingTypeSelectorType.js';

type Props = {
  /** CSS modules style object */
  theme: {
    [css_modules_class: string]: string
  },
  socialIcons: [
    Array<{
      iconName: string,
      iconSize: iconSizeSelectors,
      iconColor: colorClassSelectors,
      href: string
    }>
  ],
  profilePhoto: {
    src: string,
    alt: string
  },
  navbarTitle: {
    size: headingTypeSelectors,
    text: string
  },
  extendStyle?: string
};

/**
 * Navbar Component
 */
class Navbar extends PureComponent<Props> {
  static displayName = 'Navbar';

  /**
   * Render
   * @return {Element<*>} JSX
   */
  render() {
    const {
      theme,
      extendStyle,
      socialIcons,
      profilePhoto,
      navbarTitle
    } = this.props;

    const { navbar, navbarRightSection, navbarLeftSection } = theme;

    return (
      <div className={classNames(navbar, extendStyle)}>
        <div>
          {/* Left Icon Section */}
          <div className={navbarLeftSection}>
            <ProfilePhoto
              theme={profilePhotoThemeDefault}
              proPhotoSize="sm"
              src={get(profilePhoto, 'src', '')}
              alt={get(profilePhoto, 'alt', 'Profile Photo')}
            />
            <WithLink
              theme={withLinkTheme}
              noStyling
              href={get(socialIcons, '0.href', '')}
            >
              <Icon
                theme={iconThemeDefault}
                iconName={get(socialIcons, '0.iconName', '')}
                color={get(socialIcons, '0.iconColor')}
                iconSize={get(socialIcons, '0.iconSize')}
              />
            </WithLink>
          </div>
          {/* Navbar Title */}
          <Heading
            theme={headingThemeDefault}
            extendStyle={theme.navbarTitle}
            content={get(navbarTitle, 'text', '')}
            headingType={get(navbarTitle, 'size', 'h3')}
          />
          {/* Right Icon Section */}
          <div className={navbarRightSection}>
            {socialIcons.map((icon, index) => (
              <WithLink
                theme={withLinkTheme}
                noStyling
                key={`navbar-icon-${index}`}
                href={get(icon, 'href', '')}
              >
                <Icon
                  theme={iconThemeDefault}
                  iconName={get(icon, 'iconName', '')}
                  color={get(icon, 'iconColor')}
                  iconSize={get(icon, 'iconSize', 'md')}
                />
              </WithLink>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
