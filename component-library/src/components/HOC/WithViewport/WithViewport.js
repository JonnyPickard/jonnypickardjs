// @flow

import React, { PureComponent } from 'react';
import get from 'lodash.get';

import viewportSizes from '@jonnypickardjs/theme/mediaQueries.js';

type Props = {
  /** CSS modules style object */
  theme: {
    [css_modules_class: string]: string
  },
  /** Callback function will return mobile | tablet | desktop */
  getViewport?: Function,
  extendStyle?: string
};

/**
 * WithViewport Component
 */
class WithViewport extends PureComponent<Props> {
  Node: Element;
  ViewportSize: 'mobile' | 'tablet' | 'desktop';

  static displayName = 'WithViewport';

  componentDidMount() {
    this.getViewportSize();
    window.addEventListener('resize', this.getViewportSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getViewportSize);
  }

  getViewportSize = () => {
    const width = get(this.Node.getBoundingClientRect(), ['width'], 0);
    const { desktop, tablet } = viewportSizes;
    const { getViewport } = this.props;

    if (width !== 0) {
      let viewportSize = 'mobile';

      if (width >= desktop) {
        viewportSize = 'desktop';
      } else if (width >= tablet) {
        viewportSize = 'tablet';
      }

      this.ViewportSize = viewportSize;

      if (getViewport) {
        getViewport(viewportSize);
      }
    }
  };

  setRef = element => {
    if (element) {
      this.Node = element;
    }
  };

  /**
   * Render
   * @return {Element<*>} JSX
   */
  render() {
    const { theme, children } = this.props;
    return (
      <span className={theme.withViewport} ref={this.setRef}>
        {children}
      </span>
    );
  }
}

export default WithViewport;
