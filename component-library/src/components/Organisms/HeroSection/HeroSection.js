// @flow

import React, { PureComponent } from 'react';
import classNames from 'classnames';

import type { colorClassSelectors } from 'shared/flow-types/colorSelectorType.js';
import type { iconSizeSelectors } from 'shared/flow-types/iconSizeSelectorType.js';
import type { headingTypeSelectors } from 'shared/flow-types/headingTypeSelectorType.js';

type Props = {
  /** CSS modules style object */
  theme: {
    [css_modules_class: string]: string
  },
  heroTitle: string,
  heroSubtitle: string,
  /** Description/ About section */
  heroBlurb: string,
  heroLinks: Array<{
    iconColor: colorClassSelectors,
    iconSize: iconSizeSelectors,
    iconName: string,
    captionSize: headingTypeSelectors,
    captionText: string
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
    const { theme, extendStyle } = this.props;
    return (
      <div className={classNames(theme.heroSection, extendStyle)}>
        <div>Image Section</div>
        <div>
          Profile Section
          <div>
            Title + Links
            <div>
              <div>Title</div>
              <div>Subtitle</div>
            </div>
            <div>
              <div>Linkedin Link</div>
              <div>Github Link</div>
            </div>
          </div>
          <div>Blurb</div>
        </div>
      </div>
    );
  }
}

export default HeroSection;
