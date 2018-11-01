// @flow

import React, { PureComponent } from 'react';
import type { Element } from 'react';
import classNames from 'classnames';

type Props = {
  /** CSS modules style object */
  theme: {
    [css_modules_class: string]: string
  },
  /** If passed in a React-Router Link Component use it */
  ReactRouterLink?: Function,
  href: string,
  children: Element<*>,
  noStyling: boolean,
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
    const {
      theme,
      extendStyle,
      href,
      children,
      noStyling,
      ReactRouterLink
    } = this.props;

    const HTMLTag = ReactRouterLink || 'a';

    return (
      <HTMLTag
        to={href}
        href={href}
        className={classNames(
          theme.withLink,
          noStyling && theme.withLinkNoDefaultTheme,
          extendStyle
        )}
      >
        {children}
      </HTMLTag>
    );
  }
}

export default WithLink;
