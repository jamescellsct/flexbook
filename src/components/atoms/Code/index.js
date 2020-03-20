// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Utility functions
import { attributes } from '../../../utils/html.utils'

// Stylesheets
import './code.sass'
import './code.responsive.sass'

/**
 * @file Components representing a <code> element
 * @module components/atoms/Code
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/code}
 * @see {@link https://reactjs.org/docs/dom-elements.html}
 */

/**
 * Renders a `<code>` element with the base class `ada-code`.
 *
 * @class Code
 * @param {CodeProps} props - Component data
 * @returns {HTMLElement}
 */
const Code = props => {
  return <code {...attributes(props, 'ada-code')}>{props.children}</code>
}

/**
 * @link Code component properties.
 *
 * @typedef {CodeProps}
 */
Code.propTypes = {
  /**
   * Code snippet.
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
   * React’s replacement for using `innerHTML` in the browser DOM.
   *
   * In general, setting HTML from code is risky because it’s easy to
   * inadvertently expose your users to a cross-site scripting (XSS) attack.
   *
   * See: https://reactjs.org/docs/dom-elements.html
   */
  dangerouslySetInnerHTML: PropTypes.exact({
    __html: PropTypes.string.isRequired
  }),

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

Code.defaultProps = {
  dangerouslySetInnerHTML: {
    __html: '// Logs a message to the console<br/>console.log("Hello, world!")'
  }
}

export default Code
