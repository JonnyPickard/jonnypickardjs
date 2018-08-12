// @flow

import React, { PureComponent } from 'react';
import classNames from 'classnames';

type Props = {
  /** CSS modules style object */
  theme: {
    [css_modules_class: string]: string
  },
  textType: 'body' | 'note' | 'description',
  content: string,
  isInline: boolean,
  isBold?: boolean,
  isItalic?: boolean,
  isUnderlined?: boolean,
  extendStyle?: string
};

/**
 * Text Component
 */
class Text extends PureComponent<Props> {
  static displayName = 'Text';

  static defaultProps = {
    textType: 'body',
    isInline: false
  };

  getClassSelectorForType = (): string => {
    const { theme, textType } = this.props;

    return theme[`texttypes${textType}`];
  };

  /**
   * Render
   * @return {Element<*>} JSX
   */
  render() {
    const {
      theme,
      extendStyle,
      isBold,
      isItalic,
      isUnderlined,
      content
    } = this.props;

    const TextTag = this.props.isInline ? 'span' : 'div';

    return (
      <TextTag
        className={classNames(
          this.getClassSelectorForType(),
          isBold && theme.textBold,
          isItalic && theme.textItalic,
          isUnderlined && theme.textUnderlined,
          extendStyle
        )}
      >
        {content}
      </TextTag>
    );
  }
}

export default Text;
