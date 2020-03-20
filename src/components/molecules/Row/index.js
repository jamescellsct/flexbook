// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Container } from '../../atoms'

// Utility functions
import { attributes } from '../../../utils/html.utils'

// Stylesheets
import './row.sass'
import './row.responsive.sass'

/**
 * @file Components representing UI rows
 * @module components/molecules/Row
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/div}
 */

/**
 * Renders a `<div>` element with the base class `adm-row`.
 *
 * @class Row
 * @param {RowProps} props - Component data
 * @returns {HTMLDivElement}
 */
const Row = props => {
  const { children, container } = props
  const attr = attributes(props, 'adm-row', ['container'])

  if (!container) return <div {...attr}>{children}</div>

  return (
    <div {...attr}>
      <Container className='row-container'>{children}</Container>
    </div>
  )
}

/**
 * @link Row component properties.
 *
 * @typedef {RowProps}
 */
Row.propTypes = {
  /**
   * `Row` content.
   */
  children: PropTypes.node,

  /**
   * If true, render `children` inside of a `Container` component.
   *
   * The container will have the base classes `ada-container` and
   * `row-container`.
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

Row.defaultProps = {
  container: false
}

export default Row
