const { uncapitalize } = require('./helpers');

module.exports = componentName => `\
// @flow

import React, { PureComponent } from 'react';
import classNames from 'classnames';

type Props = {
  /** CSS modules style object */
  theme: {
    [css_modules_class: string]: string
  },
  extendStyle?: string
};

/**
 * ${componentName} Component
 */
class ${componentName} extends PureComponent<Props> {
  static displayName = '${componentName}';
  
  /**
   * Render
   * @return {Element<*>} JSX
   */
  render() {
    const { theme, extendStyle } = this.props;
    return (
      <div className={classNames(theme.${uncapitalize(
        componentName
      )}, extendStyle)}>
        <h1>Hello from ${componentName}</h1>
      </div>
    );
  }
}

export default ${componentName};
`;
