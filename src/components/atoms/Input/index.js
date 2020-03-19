// Packages
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

// Components
import { Label } from '../../atoms'

// Utility functions
import { attributes } from '../../../utils/html.utils'

// Stylesheets
import './input.sass'
import './input.responsive.sass'

/**
 * @file Components representing <input> elements
 * @module components/atoms/Input
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 */

const Input = props => {
  const { label } = props

  label.htmlFor = props.id

  return (
    <Fragment>
      <input {...attributes(props, 'ada-input', ['label'])} />
      <Label {...label} />
    </Fragment>
  )
}

const EmailInput = props => {
  const input = attributes(props, 'email-input')

  input.inputMode = 'email'
  input.type = 'email'

  return <Input {...input} />
}

const SearchInput = props => {
  const input = attributes(props, 'search-input')

  input.inputMode = 'search'
  input.type = 'search'

  return <Input {...input} />
}

Input.propTypes = {
  /**
   * Valid for the file input type only, the accept property defines which file
   * types are selectable in a file upload control.
   *
   * https://developer.mozilla.org/docs/Web/SVG/Content_type
   */
  accept: PropTypes.string,

  /**
   * Not a `Boolean` attribute, the autocomplete attribute takes as its value a
   * space separated string that describes what, if any, type of autocomplete
   * functionality the input should provide.
   *
   * The autocomplete attribute is valid on `hidden`, `text`, `search`, `url`,
   * `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`,
   * `number`, `range`, `color` and `password`.
   *
   * This attribute has no effect on input types that do not return numeric or
   * text data, being valid for all input types except `checkbox`, `radio`,
   * `file`, or any of the button types.
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
   * Valid for both radio and checkbox types, checked is a `Boolean` attribute.
   *
   * If present on a radio type, it indicates that that radio button is the
   * currently selected one in the group of same-named radio buttons.
   *
   * If present on a checkbox type, it indicates that the checkbox is checked by
   * default (when the page loads). It does not indicate whether this checkbox
   * is currently checked: if the checkbox’s state is changed, this content
   * attribute does not reflect the change. (Only the `HTMLInputElement`’s
   * checked IDL attribute is updated.)
   */
  checked: PropTypes.bool,

  /**
   * A `Boolean` attribute which, if present, indicates that the user should not
   * be able to interact with the input.
   *
   * Disabled inputs are typically rendered with a dimmer color or using some
   * other form of indication that the field is not available for use.
   *
   * Specifically, disabled inputs do not receive the click event, and disabled
   * inputs are not submitted with the form.
   *
   * **Note**: Although not required by the specification, Firefox will by
   * default persist the dynamic disabled state of an `<input>` across page
   * loads. Use the `autocomplete` attribute to control this feature.
   */
  disabled: PropTypes.bool,

  /**
   * A string specifying the `<form>` element with which the input is associated
   * (that is, its form owner).
   *
   * This string's value, if present, must match the id of a `<form>` element in
   * the same document. If this attribute isn't specified, the `<input>` element
   * is associated with the nearest containing form, if any.
   *
   * The form attribute lets you place an input anywhere in the document but
   * have it included with a form elsewhere in the document.
   *
   * **Note**: An input can only be associated with one form.
   */
  form: PropTypes.string,

  /**
   * Defines a unique identifier (ID) which must be unique in the whole
   * document. Its purpose is to identify the element when linking (using a
   * fragment identifier), scripting, or styling (with CSS).
   */
  id: PropTypes.string,

  /**
   * Global value valid for all elements, it provides a hint to browsers as to
   * the type of virtual keyboard configuration to use when editing this element
   * or its contents.
   *
   * Values include `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal`,
   * and `search`.
   */
  inputMode: PropTypes.string,

  /**
   * Component properties of `Label`.
   */
  label: PropTypes.object.isRequired,

  /**
   * The values of the list attribute is the id of a `<datalist>` element
   * located in the same document.
   *
   * The `<datalist>`  provides a list of predefined values to suggest to the
   * user for this input.
   *
   * Any values in the list that are not compatible with the type are not
   * included in the suggested options.
   *
   * The values provided are suggestions, not requirements: users can select
   * from this predefined list or provide a different value.
   *
   * It is valid on `text`, `search`, `url`, `tel`, `email`, `date`, `month`,
   * `week`, `time`, `datetime-local`, `number`, `range`, and `color`.
   *
   * Per the specifications, the list attribute is not supported by the
   * `hidden`, `password`, `checkbox`, `radio`, `file`, or any of the button
   * types.
   *
   * Depending on the browser, the user may see a custom color palette
   * suggested, tic marks along a range, or even a input that opens like a
   * select but allows for non-listed values.
   */
  list: PropTypes.string,

  /**
   * Valid for `date`, `month`, `week`, `time`, `datetime-local`, `number`, and
   * `range`, it defines the greatest value in the range of permitted values.
   *
   * If the value entered into the element exceeds this, the element fails
   * constraint validation.
   *
   * If the value of the max attribute isn't a number, then the element has no
   * maximum value.
   */
  max: PropTypes.number,

  /**
   * Valid for `text`, `search`, `url`, `tel`, `email`, and `password`, it
   * defines the maximum number of characters (as UTF-16 code units) the user
   * can enter into the field. This must be an integer value 0 or higher.
   *
   * If no maxlength is specified, or an invalid value is specified, the field
   * has no maximum length. This value must also be greater than or equal to the
   * value of minlength.
   *
   * The input will fail constraint validation if the length of the text entered
   * into the field is greater than maxlength UTF-16 code units long. By
   * default, browsers prevent users from entering more characters than allowed
   * by the maxlength attribute.
   */
  maxlength: PropTypes.number,

  /**
   * Valid for `date`, `month`, `week`, `time`, `datetime-local`, `number`, and
   * `range`, it defines the most negative value in the range of permitted
   * values.
   *
   * If the value entered into the element is less than this this, the element
   * fails constraint validation.
   *
   * If the value of the min attribute isn't a number, then the element has no
   * minimum value.
   *
   * This value must be less than or equal to the value of the max attribute. If
   * the min attribute is present by is not specified or is invalid, no min
   * value is applied. If the min attribute is valid and a non-empty value is
   * less than the minimum allowed by the min attribute, constraint validation
   * will prevent form submission.
   */
  min: PropTypes.number,

  /**
   * Valid for `text`, `search`, `url`, `tel`, `email`, and `password`, it
   * defines the minimum number of characters (as UTF-16 code units) the user
   * can enter into the entry field. This must be an non-negative integer value
   * smaller than or equal to the value specified by maxlength.
   *
   * If no minlength is specified, or an invalid value is specified, the input
   * has no minimum length.
   *
   * The input will fail constraint validation if the length of the text entered
   * into the field is fewer than minlength UTF-16 code units long, preventing
   * form submission. See Client-side validation for more information.
   */
  minlength: PropTypes.number,

  /**
   * The `Boolean` multiple attribute, if set, means the user can enter comma
   * separated email addresses in the email widget or can choose more than one
   * file with the file input.
   */
  multiple: PropTypes.bool,

  /**
   * A string specifying a name for the input control. This name is submitted
   * along with the control's value when the form data is submitted.
   */
  name: PropTypes.string,

  /**
   * The placeholder attribute is a string that provides a brief hint to the
   * user as to what kind of information is expected in the field.
   *
   * It should be a word or short phrase that demonstrates the expected type of
   * data, rather than an explanatory message. The text must not include
   * carriage returns or line feeds.
   */
  placeholder: PropTypes.string,

  /**
   * A `Boolean` attribute which, if present, indicates that the user should not
   * be able to edit the value of the input.
   *
   * Supported by `text`, `search`, `url`, `tel`, `email`, `date`, `month`,
   * `week`, `time`, `datetime-local`, `number`, and `password` input types.
   */
  readOnly: PropTypes.bool,

  /**
   * A `Boolean` attribute which, if present, indicates that the user must
   * specify a value for the input before the owning form can be submitted.
   *
   * Supported by `text`, `search`, `url`, `tel`, `email`, `date`, `month`,
   * `week`, `time`, `datetime-local`, `number`, and `file` input types.
   */
  required: PropTypes.bool,

  /**
   * Valid for `email`, `password`, `tel`, and `text` input types only.
   * Specifies how much of the input is shown.
   */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Valid for the numeric input types, including number, date/time input types,
   * and range, the step attribute is a number that specifies the granularity
   * that the value must adhere to.
   *
   * If not explicitly included, step defaults to 1 for number and range, and 1
   * unit type (second, week, month, day) for the date/time input types. The
   * value can must be a positive number - integer or float -- or the special
   * value any, which means no stepping is implied, and any value is allowed
   * (barring other constraints, such as min and max).
   *
   * If any is not explicity set, valid values for the number, date/time input
   * types, and range input types are equal to the basis for stepping - the min
   * value and increments of the step value, up to the max value, if specified.
   *
   * The default stepping value for number inputs is 1, allowing only integers
   * to be entered, unless the stepping base is not an integer. The default
   * stepping value for time is 1 second, with 900 being equal to 15 minutes.
   */
  step: PropTypes.number,

  /**
   * Text representing advisory information related to the element it belongs
   * to. Such information can typically, but not necessarily, be presented to
   * the user as a tooltip.
   *
   * The title should NOT be used as the primary explanation of the purpose of
   * the form control. Instead, use the `<label>` element with a for attribute
   * set to the form control's id attribute.
   */
  title: PropTypes.string,

  /**
   * A string specifying the type of control to render. For example, to create a
   * checkbox, a value of checkbox is used.
   *
   * If omitted (or an unknown value is specified), the input type `text` is
   * used, creating a plaintext input field.
   */
  type: PropTypes.string,

  /**
   * The input control's value. When specified in the HTML, this is the initial
   * value, and from then on it can be altered or retrieved at any time using
   * JavaScript to access the respective HTMLInputElement object's value
   * property.
   *
   * The value attribute is always optional, though should be **considered**
   * **mandatory for `checkbox`, `radio`, and `hidden` input types.**
   */
  value: PropTypes.any
}

Input.defaultProps = {
  disabled: false,
  id: 'input',
  inputMode: 'text',
  label: {
    children: 'Input label',
    htmlFor: 'input'
  },
  placeholder: 'Placeholder text',
  readOnly: false,
  required: false,
  type: 'text'
}

EmailInput.defaultProps = {
  id: 'email-input',
  inputMode: 'email',
  label: {
    children: 'Email address',
    htmlFor: 'email-input'
  },
  placeholder: 'you@email.com',
  type: 'email'
}

SearchInput.defaultProps = {
  id: 'search-input',
  inputMode: 'search',
  label: {
    children: 'Search',
    htmlFor: 'search-input'
  },
  placeholder: 'Looking for something? Start here',
  type: 'search'
}

export {
  Input as default,
  EmailInput,
  Input,
  SearchInput
}
