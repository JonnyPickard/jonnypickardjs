// @flow

import React, { PureComponent } from 'react';
import classNames from 'classnames';

type Props = {
  /** CSS modules style object */
  theme?: {
    [css_modules_class: string]: string
  },
  src: string,
  alt: string,
  otherOptions?: Object,
  extendStyle?: string
};

/**
 * Image Component
 */
class Image extends PureComponent<Props> {
  static displayName = 'Image';

  /**
   * Render
   * @return {Element<*>} JSX
   */
  render() {
    const { src, alt, otherOptions, extendStyle } = this.props;
    return (
      <img
        src={src}
        alt={alt}
        className={classNames(extendStyle)}
        {...otherOptions}
      />
    );
  }
}

export default Image;
