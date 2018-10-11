// @flow

import React, { PureComponent } from 'react';
import classNames from 'classnames';
import get from 'lodash.get';

import {
  Image,
  imageThemeDefault as imageTheme
} from '@jonnypickardjs/Atoms/Image';
import {
  Text,
  textThemeDefault as textTheme
} from '@jonnypickardjs/Atoms/Text';
import {
  Heading,
  headingThemeDefault as headingTheme
} from '@jonnypickardjs/Atoms/Heading';
import {
  IconCaption,
  iconCaptionThemeDefault as iconCaptionTheme
} from '@jonnypickardjs/Molecules/IconCaption';
import {
  ProfilePhoto,
  profilePhotoThemeDefault as profilePhotoTheme
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
  heroImage: {
    src: string,
    alt: string
  },
  heroImageMobile: {
    src: string,
    alt: string
  },
  heroTitle: string,
  heroSubtitle: string,
  /** Description/ About section */
  heroBlurb: string,
  /** Icon with Caption Links */
  heroLinks: Array<{
    iconColor: colorClassSelectors,
    iconSize: iconSizeSelectors,
    iconName: string,
    captionSize: headingTypeSelectors,
    captionText: string,
    href: string
  }>,
  extendStyle?: string
};

/**
 * HeroSection Component
 */
class HeroSection extends PureComponent<Props> {
  static displayName = 'HeroSection';

  /**
   * Render
   * @return {Element<*>} JSX
   */
  render() {
    const {
      theme,
      extendStyle,
      heroImage,
      heroTitle,
      heroSubtitle,
      heroLinks,
      heroBlurb,
      heroImageMobile
    } = this.props;

    const {
      heroSection,
      heroSectionProfilePhoto,
      heroSectionTitlesAndLinks,
      heroSectionTitles,
      heroSectionLinks,
      heroSectionBlurb
    } = theme;

    return (
      <div className={classNames(heroSection, extendStyle)}>
        {/* Left Main Section - Image */}
        <div className={heroSectionProfilePhoto}>
          {/* Circular photo - Mobile Only */}
          <ProfilePhoto
            theme={profilePhotoTheme}
            src={get(heroImageMobile, 'src', '')}
            alt={get(heroImage, 'alt', 'Hero Image')}
          />
          {/* Standard Image - Desktop */}
          <Image
            theme={imageTheme}
            src={get(heroImage, 'src', '')}
            alt={get(heroImage, 'alt', 'Hero Image')}
          />
        </div>
        {/* Right Main Section - Profile Info */}
        <div>
          {/* Profile Section */}
          <div className={heroSectionTitlesAndLinks}>
            {/* Title + Links */}
            <div className={heroSectionTitles}>
              {/* Title */}
              <Heading
                theme={headingTheme}
                headingType="h1"
                content={heroTitle}
              />
              {/* Subtitle */}
              <Heading
                theme={headingTheme}
                headingType="h2"
                content={heroSubtitle}
              />
            </div>
            <div className={heroSectionLinks}>
              {heroLinks.map((link, index) => {
                const iconName = get(link, 'iconName', '');
                const iconSize = get(link, 'iconSize');
                const iconColor = get(link, 'iconColor');
                const captionSize = get(link, 'captionSize');
                const captionText = get(link, 'captionText', '');
                const href = get(link, 'href', '');

                return (
                  <WithLink
                    noStyling
                    theme={withLinkTheme}
                    href={href}
                    key={`hero-icon-${index}`}
                  >
                    <IconCaption
                      theme={iconCaptionTheme}
                      iconName={iconName}
                      iconSize={iconSize}
                      iconColor={iconColor}
                      captionSize={captionSize}
                      captionText={captionText}
                    />
                  </WithLink>
                );
              })}
            </div>
          </div>
          {/* Blurb */}
          <Text
            theme={textTheme}
            content={heroBlurb}
            extendStyle={heroSectionBlurb}
          />
        </div>
      </div>
    );
  }
}

export default HeroSection;
