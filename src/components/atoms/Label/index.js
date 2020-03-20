// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Utility functions
import { attributes } from '../../../utils/html.utils'

// Stylesheets
import './label.sass'
import './label.responsive.sass'

/**
 * @file Component representing a <label> element
 * @module components/atoms/Label
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 * @see {@link https://reactjs.org/docs/dom-elements.html}
 */

const Label = props => {
  const { children } = props

  return <label {...attributes(props, 'ada-label')}>{children}</label>
}

Label.propTypes = {
  /**
   * Label text. The label text is not only visually associated with its
   * corresponding text input; it is programmatically associated with it too.
   * This means that, for example, a screenreader will read out the label when
   * the user is focused on the form input, making it easier for an assistive
   * technology user to understand what data should be entered.
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
   * The `<form>` element with which the label is associated (its form owner).
   *
   * If specified, the value of the attribute is the id of a `<form>` element in
   * the same document. This lets you place label elements anywhere within a
   * document, not just as descendants of their form elements.
   */
  form: PropTypes.string,

  /**
   * The `id` of a labelable form-related element in the same document as the
   * `<label>` element.
   *
   * The first element in the document with an id matching the value of the
   * `for` attribute is the labeled control for this label element, if it is a
   * labelable element.
   *
   * If it is not labelable then the for attribute has no effect.
   *
   * If there are other elements which also match the id value, later in the
   * document, they are not considered.
   */
  htmlFor: PropTypes.string,

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

Label.defaultProps = {
  children: 'a11y: ensure every form element has a label!'
}

export default Label
