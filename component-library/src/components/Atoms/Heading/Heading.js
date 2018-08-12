// @flow

import React, { PureComponent } from 'react';
import classNames from 'classnames';

type Props = {
  /** CSS modules style object */
  theme: {
    [css_modules_class: string]: string
  },
  headingType: 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  content: string,
  extendStyle?: string
};

/**
 * Heading Component
 */
class Heading extends PureComponent<Props> {
  static displayName = 'Heading';

  static defaultProps = {
    headingType: 'h1'
  };

  getClassSelectorForType = (): string => {
    const { headingType, theme } = this.props;

    return theme[`headingtypes${headingType}`];
  };

  getElementForType = (): string => {
    const { headingType } = this.props;
    switch (headingType) {
      case 'display':
        return 'h1';
      default:
        return headingType;
    }
  };

  /**
   * Render
   * @return {Element<*>} JSX
   */
  render() {
    const { theme, content, extendStyle } = this.props;

    const HeadingTag = this.getElementForType();

    return (
      <HeadingTag
        className={classNames(
          theme.heading,
          this.getClassSelectorForType(),
          extendStyle
        )}
      >
        {content}
      </HeadingTag>
    );
  }
}

export default Heading;
