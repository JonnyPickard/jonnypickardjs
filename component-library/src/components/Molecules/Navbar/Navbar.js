// @flow

import React, { PureComponent } from 'react';
import classNames from 'classnames';

import { Icon, iconThemeDefault } from '@jonnypickardjs/Atoms/Icon';
import { Heading, headingThemeDefault } from '@jonnypickardjs/Atoms/Heading';
import {
  ProfilePhoto,
  profilePhotoThemeDefault
} from '@jonnypickardjs/Molecules/ProfilePhoto';
import {
  WithLink,
  withLinkThemeDefault as withLinkTheme
} from '@jonnypickardjs/HOC/WithLink';

import type { colorClassSelectors } from 'shared/flow-types/colorSelectorType.js';
import type { iconSizeSelectors } from 'shared/flow-types/iconSizeSelectorType.js';
import type { headingTypeSelectors } from 'shared/flow-types/headingTypeSelectorType.js';

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
              src={profilePhoto.src}
              alt={profilePhoto.alt}
            />
            <WithLink
              theme={withLinkTheme}
              noStyling
              href={socialIcons[0].href}
            >
              <Icon
                theme={iconThemeDefault}
                iconName={socialIcons[0].iconName}
                color={socialIcons[0].iconColor}
                iconSize={socialIcons[0].iconSize}
              />
            </WithLink>
          </div>
          {/* Navbar Title */}
          <Heading
            theme={headingThemeDefault}
            extendStyle={theme.navbarTitle}
            content={navbarTitle.text}
            headingType={navbarTitle.size}
          />
          {/* Right Icon Section */}
          <div className={navbarRightSection}>
            {socialIcons.map((icon, index) => (
              <WithLink
                theme={withLinkTheme}
                noStyling
                key={`navbar-icon-${index}`}
                href={icon.href}
              >
                <Icon
                  theme={iconThemeDefault}
                  iconName={icon.iconName}
                  color={icon.iconColor}
                  iconSize={icon.iconSize}
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
