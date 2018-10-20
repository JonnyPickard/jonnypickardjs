// @flow

import React, { PureComponent } from 'react';
import classNames from 'classnames';

import { Image, imageThemeDefault as imageTheme } from '@jonnypickardjs/image';
import { Text, textThemeDefault as textTheme } from '@jonnypickardjs/text';
import {
  Heading,
  headingThemeDefault as headingTheme
} from '@jonnypickardjs/heading';
import {
  IconCaption,
  iconCaptionThemeDefault as iconCaptionTheme
} from '@jonnypickardjs/iconcaption';
import {
  ProfilePhoto,
  profilePhotoThemeDefault as profilePhotoTheme
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

  static defaultProps = {
    heroLinks: []
  };

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
      heroSectionContainer,
      heroSectionProfilePhoto,
      heroSectionTitlesAndLinks,
      heroSectionTitles,
      heroSectionLinks,
      heroSectionBlurb
    } = theme;

    return (
      <div className={classNames(heroSection, extendStyle)}>
        <div className={heroSectionContainer}>
          {/* Left Main Section - Image */}
          <div className={heroSectionProfilePhoto}>
            {/* Circular photo - Mobile Only */}
            <ProfilePhoto
              theme={profilePhotoTheme}
              src={heroImageMobile.src}
              alt={heroImage.alt}
            />
            {/* Standard Image - Desktop */}
            <Image theme={imageTheme} src={heroImage.src} alt={heroImage.alt} />
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
                {heroLinks.map(
                  (
                    {
                      iconName,
                      iconSize,
                      iconColor,
                      captionSize,
                      captionText,
                      href
                    },
                    index
                  ) => {
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
                  }
                )}
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
      </div>
    );
  }
}

export default HeroSection;
