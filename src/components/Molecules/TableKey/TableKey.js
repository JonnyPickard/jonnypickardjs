// @flow

import React, { PureComponent } from 'react';

type Props = {
  /** CSS modules style object */
  theme: {
    classTableKey: string
  }
};

/**
 * NavBar
 * @extends PureComponent<Props>
 */
class TableKey extends PureComponent<Props> {
  render() {
    const { classTableKey } = this.props;
    return (
      <div className={classTableKey}>
        <h1>Hello from TableKey</h1>
      </div>
    );
  }
}

export default TableKey;
