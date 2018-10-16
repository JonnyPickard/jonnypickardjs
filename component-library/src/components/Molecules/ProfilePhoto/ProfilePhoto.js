// @flow

import React, { PureComponent } from 'react';
import classNames from 'classnames';

import { Image } from '@jonnypickardjs/image';

type Props = {
  /** CSS modules style object */
  theme: {
    [css_modules_class: string]: string
  },
  proPhotoSize: 'xs' | 'sm' | 'md' | 'lg' | 'xlg',
  src: string,
  alt: string,
  extendStyle?: string
};

/**
 * ProfilePhoto Component
 */
class ProfilePhoto extends PureComponent<Props> {
  static displayName = 'ProfilePhoto';

  static defaultProps = {
    proPhotoSize: 'md'
  };

  getClassSelectorForSize = (): string => {
    const { proPhotoSize, theme } = this.props;

    return theme[`profilePhotosizes${proPhotoSize}`];
  };

  /**
   * Render
   * @return {Element<*>} JSX
   */
  render() {
    const { theme, extendStyle, src, alt } = this.props;

    return (
      <div
        className={classNames(
          theme.profilePhoto,
          this.getClassSelectorForSize(),
          extendStyle
        )}
      >
        <Image src={src} alt={alt} />
      </div>
    );
  }
}

export default ProfilePhoto;
