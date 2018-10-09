// @flow
import React, { PureComponent } from 'react';
import classNames from 'classnames';

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
      heroBlurb
    } = this.props;

    const {
      heroSection,
      heroSectionProfilePhoto,
      heroSectionTitlesAndLinks,
      heroSectionTitles,
      heroSectionLinks
    } = theme;

    return (
      <div className={classNames(heroSection, extendStyle)}>
        {/* Left Main Section - Image */}
        <div className={heroSectionProfilePhoto}>
          <Image theme={imageTheme} src={heroImage.src} alt={heroImage.alt} />
        </div>
        {/* Right Main Section - Profile Info */}
        <div>
          {/* Profile Section */}
          <div className={heroSectionTitlesAndLinks}>
            {/* Title + Links */}
            <div className={heroSectionTitles}>
              <Heading
                theme={headingTheme}
                headingType="h1"
                content={heroTitle}
              />
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
          <Text theme={textTheme} content={heroBlurb} />
        </div>
      </div>
    );
  }
}

export default HeroSection;
