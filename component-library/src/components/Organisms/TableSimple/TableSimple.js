// @flow

import React, { PureComponent } from 'react';
import classNames from 'classnames';

import type { colorClassSelectors } from 'shared/flow-types/colorSelectorType.js';

type Props = {
  /** CSS modules style object */
  theme: {
    [css_modules_class: string]: string
  },
  extendStyle?: string,
  cells: {
    backgroundColor: colorClassSelectors,
    text: string
  }
};

/**
 * TableSimple Component
 */
class TableSimple extends PureComponent<Props> {
  static displayName = 'TableSimple';

  /**
   * Render
   * @return {Element<*>} JSX
   */
  render() {
    const { theme, extendStyle } = this.props;
    return (
      <div className={classNames(theme.tableSimple, extendStyle)}>
        <h1>Hello from TableSimple</h1>
      </div>
    );
  }
}

export default TableSimple;
