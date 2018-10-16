// @flow

import React, { PureComponent } from 'react';
import classNames from 'classnames';
import get from 'lodash.get';

import {
  IconCaption,
  iconCaptionThemeDefault as iconCaptionTheme
} from 'src/components/Molecules/IconCaption';
import {
  Heading,
  headingThemeDefault as headingTheme
} from 'src/components/Atoms/Heading';

import type { colorClassSelectors } from 'shared/flow-types/colorSelectorType.js';

type Props = {
  /** CSS modules style object */
  theme: {
    [css_modules_class: string]: string
  },
  extendStyle?: string,
  cells: Array<{
    backgroundColor: colorClassSelectors,
    text: string
  }>,
  tableKey: Array<{
    color: colorClassSelectors,
    text: string
  }>
};

/**
 * TableSimple Component
 */
class TableSimple extends PureComponent<Props> {
  static displayName = 'TableSimple';

  static defaultProps = {
    cells: [],
    tableKey: [],
    tableKeyTitle: ''
  };

  getClassSelectorForBGColor = (colorSelector: string): string => {
    const { theme } = this.props;

    return theme[`tableSimplebackgroundColors${colorSelector}`];
  };

  /**
   * Render
   * @return {Element<*>} JSX
   */
  render() {
    const { theme, extendStyle, cells, tableKey, tableKeyTitle } = this.props;

    const {
      tableSimple,
      tableSimpleCells,
      tableSimpleCell,
      tableSimpleKey
    } = theme;

    return (
      <div className={classNames(tableSimple, extendStyle)}>
        <div className={tableSimpleCells}>
          {cells.map((cell, index) => (
            <div
              className={classNames(
                tableSimpleCell,
                this.getClassSelectorForBGColor(get(cell, ['color'], ''))
              )}
              key={`simple-table-cell-${index}`}
            >
              <Heading
                theme={headingTheme}
                headingType="h3"
                content={tableKeyTitle}
              />
            </div>
          ))}
        </div>
        <div className={tableSimpleKey}>
          <Heading
            theme={headingTheme}
            headingType="h2"
            content={tableKeyTitle}
          />
          {tableKey.map((data, index) => (
            <IconCaption
              key={`simple-table-key-${index}`}
              theme={iconCaptionTheme}
              noIcon
              iconBackgroundColor={get(data, ['color'], '')}
              captionText={get(data, ['text'], '')}
              captionSize="h3"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TableSimple;
