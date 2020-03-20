// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Container } from '../../atoms'

// Utility functions
import { attributes } from '../../../utils/html.utils'

// Stylesheets
import './column.sass'
import './column.responsive.sass'

/**
 * @file Components representing UI columns
 * @module components/molecules/Column
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/div}
 */

/**
 * Renders a `<div>` element with the base class `adm-column`.
 *
 * @class Column
 * @param {ColumnProps} props - Component data
 * @returns {HTMLDivElement}
 */
const Column = props => {
  const { children, container } = props
  const attr = attributes(props, 'adm-column', ['container'])

  if (!container) return <div {...attr}>{children}</div>

  return (
    <div {...attr}>
      <Container className='column-container'>{children}</Container>
    </div>
  )
}

/**
 * @link Column component properties.
 *
 * @typedef {ColumnProps}
 */
Column.propTypes = {
  /**
   * `Column` content.
   */
  children: PropTypes.node,

  /**
   * If true, render `children` inside of a `Container` component.
   *
   * The container will have the base classes `ada-container` and
   * `column-container`.
   */
  container: PropTypes.bool,

  /**
   * A space-separated list of the classes of the element.
   *
   * Classes allows CSS and JavaScript to select and access specific elements
   * via the class selectors or functions like the method
   * `Document.getElementsByClassName()`.
   */
  className: PropTypes.string,

  /**
   * Defines a unique identifier (ID) which must be unique in the whole
   * document. Its purpose is to identify the element when linking (using a
   * fragment identifier), scripting, or styling (with CSS).
   */
  id: PropTypes.string
}

Column.defaultProps = {
  container: false
}

export default Column
