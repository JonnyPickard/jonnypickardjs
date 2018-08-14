// @flow

import React, { PureComponent } from 'react';
import type { Element } from 'react';
import classNames from 'classnames';

type Props = {
  /** CSS modules style object */
  theme: {
    [css_modules_class: string]: string
  },
  href: string,
  children: Element,
  extendStyle?: string
};

/**
 * WithLink Component
 */
class WithLink extends PureComponent<Props> {
  static displayName = 'WithLink';

  /**
   * Render
   * @return {Element<*>} JSX
   */
  render() {
    const { theme, extendStyle, href, children, noStyling } = this.props;

    return (
      <a
        href={href}
        className={classNames(
          theme.withLink,
          noStyling && theme.withLinkNoDefaultTheme,
          extendStyle
        )}
      >
        {children}
      </a>
    );
  }
}

export default WithLink;
