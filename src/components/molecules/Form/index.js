// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Button } from '../../atoms'
import { EmailField, SearchField } from '../Fieldset'

// Utility functions
import { attributes } from '../../../utils/html.utils'

// Stylesheets
import './form.sass'
import './form.responsive.sass'

/**
 * @file Components representing `<form>` elements
 * @module components/molecules/Form
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 */

const Form = props => {
  return (
    <form {...attributes(props, 'adm-form')}>
      {props.children}
    </form>
  )
}

const EmailForm = props => {
  let { button, field } = props

  const form = attributes(props, 'email-form', ['button', 'field'])

  button = { ...button, form: form.id, type: 'submit' }
  button = attributes(button, 'email-form-btn')

  field.input.form = form.id

  return (
    <Form {...form}>
      <EmailField {...field} />
      <Button {...button}>{props.button.children}</Button>
    </Form>
  )
}

const SearchBar = props => {
  let { button, field } = props

  const form = attributes(props, 'searchbar', ['button', 'field'])

  button = { ...button, form: form.id, type: 'submit' }
  button = attributes(button, 'searchbar-btn')

  field.input.form = form.id

  return (
    <Form {...form}>
      <SearchField {...field} />
      <Button {...button}>{props.button.children}</Button>
    </Form>
  )
}

Form.propTypes = {
  /**
   * The URL that processes the form submission.
   *
   * This value can be overridden by a formaction attribute on a <button>,
   * `<input type=submit>`, or `<input type=image>` element.
   */
  action: PropTypes.string,

  /**
   * Indicates whether input elements can by default have their values
   * automatically completed by the browser. autocomplete attributes on form
   * elements override it on `<form>`.
   *
   * Possible values:
   *
   * - **off**: The browser may not automatically complete entries. (Browsers
   *   tend to ignore this for suspected login forms)
   * - **on**: The browser may automatically complete entries.
   */
  autoComplete: PropTypes.string,

  /**
   * A space-separated list of the classes of the element.
   *
   * Classes allows CSS and JavaScript to select and access specific elements
   * via the class selectors or functions like the method
   * `Document.getElementsByClassName()`.
   */
  className: PropTypes.string,

  /**
   * If the value of the method attribute is post, enctype is the MIME type of
   * the form submission.
   *
   * Possible values:
   *
   * - application/x-www-form-urlencoded: The default value.
   * - multipart/form-data: Use this if the form contains <input> elements with
   *   type=file.
   * - text/plain: Introduced by HTML5 for debugging purposes.
   *
   * This value can be overridden by formenctype attributes on <button>, <input
   * type="submit">, or <input type="image"> elements.
   */
  encType: PropTypes.string,

  /**
   * Defines a unique identifier (ID) which must be unique in the whole
   * document. Its purpose is to identify the element when linking (using a
   * fragment identifier), scripting, or styling (with CSS).
   */
  id: PropTypes.string,

  /**
   * The HTTP method to submit the form with.
   *
   * Possible values:
   *
   * - post: The `POST` method; form data sent as the request body.
   * - get: The `GET` method; form data appended to the action URL with a `?`
   *   separator. Use this method when the form has no side-effects.
   * - dialog: When the form is inside a `<dialog>`, closes the dialog on
   *   submission.
   *
   * This value is overridden by formmethod attributes on `<button>`, `<input
   * type="submit">`, or `<input type="image">` elements.
   */
  method: PropTypes.string,

  /**
   * Indicates that the form shouldn't be validated when submitted.
   *
   * If this attribute is not set (and therefore the form is validated), it can
   * be overridden by a formnovalidate attribute on a `<button>`, `<input
   * type="submit">`, or `<input type="image">` element belonging to the form.
   */
  noValidate: PropTypes.bool,

  /**
   * Indicates where to display the response after submitting the form.
   *
   * In HTML4, this is the name/keyword for a frame.
   *
   * In HTML5, it is a name/keyword for a browsing context (for example, tab,
   * window, or iframe).
   *
   * The following keywords have special meanings:
   *
   * - `_self` (default): Load into the same browsing context as the current
   *   one.
   * - `_blank`: Load into a new unnamed browsing context.
   * - `_parent`: Load into the parent browsing context of the current one. If
   *   no parent, behaves the same as `_self`.
   * - `_top`: Load into the top-level browsing context (i.e., the browsing
   *   context that is an ancestor of the current one and has no parent). If no
   *   parent, behaves the same as `_self`.
   *
   * This value can be overridden by a formtarget attribute on a `<button>`,
   * `<input type="submit">`, or `<input type="image">` element.
   */
  target: PropTypes.string
}

Form.defaultProps = {
  action: null,
  autoComplete: 'on',
  noValidate: false,
  target: '_self'
}

const SUBCOMPONENT_PROPS = {
  /**
   * `Button` component properties.
   */
  button: PropTypes.object,

  /**
   * Properties to pass to the `Fieldset` (sub)component inside the form.
   */
  field: PropTypes.object
}

EmailForm.propTypes = SUBCOMPONENT_PROPS

EmailForm.defaultProps = {
  button: {
    children: 'Submit',
    onClick: e => console.warn('EMAIL SUBMISSION BUTTON CLICKED =>', e.target)
  },
  field: { input: {} },
  id: 'email-form'
}

SearchBar.propTypes = SUBCOMPONENT_PROPS

SearchBar.defaultProps = {
  button: {
    children: 'Discover',
    onClick: e => console.warn('SEARCH BUTTON CLICKED =>', e.target)
  },
  field: { input: {} },
  id: 'searchbar'
}

export {
  Form as default,
  Form,
  EmailForm,
  SearchBar
}
