// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Container, EmailInput, SearchInput } from '../../atoms'

// Utility functions
import { attributes } from '../../../utils/html.utils'

// Stylesheets
import './fieldset.sass'
import './fieldset.responsive.sass'

/**
 * @file Components representing <fieldset> elements
 * @module components/molecules/Fieldset
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/fieldset}
 * @see {@link https://khrome.dev/blog/html-elements-with-flex-box-quirks/}
 */

/**
 * Renders a `<fieldset>` element with the base class `adm-fieldset`.
 *
 * Because `<fieldset>` elements ignore Flexbox properties, a `Container`
 * element with the class `fieldset-container` will wrap the child elements.
 *
 * See: https://khrome.dev/blog/html-elements-with-flex-box-quirks/
 *
 * @class Fieldset
 * @param {FieldsetProps} props - Component data
 * @returns {HTMLFieldSetElement}
 */
const Fieldset = props => {
  return (
    <fieldset {...attributes(props, 'adm-fieldset')}>
      <Container className='fieldset-container'>
        {props.children}
      </Container>
    </fieldset>
  )
}

/**
 * Renders a @link Fieldset component with the base class `email-field` and an
 * @link EmailInput component as its child.
 *
 * @class EmailField
 * @param {EmailFieldProps} props - Component data
 * @returns {Fieldset}
 */
const EmailField = props => {
  let { input } = props

  input = attributes({ ...input, type: 'email' }, 'email-field-input')

  return (
    <Fieldset {...attributes(props, 'email-field', ['input'])}>
      <EmailInput {...input} />
    </Fieldset>
  )
}

/**
 * Renders a @link Fieldset component with the base class `search-field` and a
 * @link SearchInput component as its child.
 *
 * @class SearchField
 * @param {SearchFieldProps} props - Component data
 * @returns {Fieldset}
 */
const SearchField = props => {
  let { input } = props

  input = attributes({ ...input, type: 'search' }, 'search-field-input')

  return (
    <Fieldset {...attributes(props, 'search-field', ['input'])}>
      <SearchInput {...input} />
    </Fieldset>
  )
}

/**
 * @link Fieldset component properties.
 *
 * @typedef {FieldsetProps}
 */
Fieldset.propTypes = {
  /**
   * Form controls to group together.
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
   * If this Boolean attribute is set, all form controls that are descendants of
   * the `<fieldset>`, are disabled, meaning they are not editable and won't be
   * submitted along with the `<form>`. They won't receive any browsing
   * events, like mouse clicks or focus-related events. By default browsers
   * display such controls grayed out.
   *
   * **Note**: Form elements inside the `<legend>` element won't be disabled.
   *
   */
  disabled: PropTypes.bool,

  /**
   * This attribute takes the value of the id attribute of a `<form>` element
   * you want the `<fieldset>` to be part of, even if it is not inside the form.
   */
  form: PropTypes.string,

  /**
   * Defines a unique identifier (ID) which must be unique in the whole
   * document. Its purpose is to identify the element when linking (using a
   * fragment identifier), scripting, or styling (with CSS).
   */
  id: PropTypes.string,

  /**
   * The name associated with the group.
   */
  name: PropTypes.string
}

Fieldset.defaultProps = {}

/**
 * @link EmailField component properties.
 *
 * @typedef {EmailFieldProps}
 */
EmailField.propTypes = {
  /**
   * Properties to pass to the `EmailInput` component inside the field.
   */
  input: PropTypes.object
}

EmailField.defaultProps = {
  input: {
    id: 'email-input',
    inputMode: 'email',
    label: {
      children: 'Email address',
      htmlFor: 'email-input'
    },
    placeholder: 'you@email.com',
    type: 'email'
  },
  name: 'email-field'
}

/**
 * @link SearchField component properties.
 *
 * @typedef {SearchFieldProps}
 */
SearchField.propTypes = {
  /**
   * Properties to pass to the `SearchInput` component inside the field.
   */
  input: PropTypes.object
}

SearchField.defaultProps = {
  input: {
    id: 'search-input',
    inputMode: 'search',
    label: {
      children: 'Search',
      htmlFor: 'search-input'
    },
    placeholder: 'Looking for something? Start here',
    type: 'search'
  },
  name: 'search-field'
}

export {
  Fieldset as default,
  Fieldset,
  EmailField,
  SearchField
}
