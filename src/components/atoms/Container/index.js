// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Utility functions
import { attributes } from '../../../utils/html.utils'

// Stylesheets
import './container.sass'
import './container.responsive.sass'

/**
 * @file Component representing a container
 * @module components/atoms/Container
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/div}
 */

/**
 * Renders a `<div>` element with the base class `ada-container`.
 *
 * @class Container
 * @param {ContainerProps} props - Component data
 * @returns {HTMLDivElement}
 */
const Container = props => {
  return <div {...attributes(props, 'ada-container')}>{props.children}</div>
}

/**
 * @link Container component properties.
 *
 * @typedef {ContainerProps}
 */
Container.propTypes = {
  /**
   * `Container` content.
   */
  children: PropTypes.node,

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
  id: PropTypes.string,

  /**
   * Contains a text representing advisory information related to the element it
   * belongs to. Such information can typically, but not necessarily, be
   * presented to the user as a tooltip.
   */
  title: PropTypes.string
}

export default Container
