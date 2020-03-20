// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import { ArrowUpwardIcon, CloseIcon, MenuIcon } from '../Icon'

// Utility functions
import { attributes } from '../../../utils/html.utils'
import { scroll } from '../../../utils/ui.utils'

// Stylesheets
import './button.sass'
import './button.responsive.sass'

/**
 * @file Components representing <button> elements
 * @module components/atoms/Button
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/button}
 */

/**
 * Renders a `<button>` element with the base class `ada-button`.
 *
 * @class Button
 * @param {ButtonProps} props - Component data
 * @returns {HTMLElement}
 */
const Button = props => {
  const attr = attributes(props, 'ada-button')

  // NOTICE: `disabled` property isn't passed to button element, so we must
  // handle the functionality separately
  attr.className += attr.disabled ? ' is-disabled' : ''

  return <button {...attr}>{props.children}</button>
}

/**
 * Renders @link Button component with the base class `close-btn`.
 *
 * A @link CloseIcon component will be rendered inside the button with an
 * `aria-label` value of `Close`.
 *
 * @class CloseButton
 * @param {ButtonProps} props - Component data
 * @returns {Button}
 */
const CloseButton = props => {
  return (
    <Button {...attributes(props, 'close-btn')}>
      <CloseIcon aria-label='Close' />
      {props.children}
    </Button>
  )
}

/**
 * Renders @link Button component with the base class `menu-btn`.
 *
 * A @link MenuIcon component will be rendered inside the button with an
 * `aria-label` value of `Open the menu`.
 *
 * @class MenuButton
 * @param {ButtonProps} props - Component data
 * @returns {Button}
 */
const MenuButton = props => {
  return (
    <Button {...attributes(props, 'menu-btn')}>
      <MenuIcon aria-label='Open the menu' />
      {props.children}
    </Button>
  )
}

/**
 * Renders @link SmoothScrollButton component with the base class
 * `scroll-to-top-btn`.
 *
 * An @link ArrowUpwardIcon component will be rendered inside the button with an
 * `aria-label` value of `Scroll to top`.
 *
 * @class ScrollToTopButton
 * @param {SmoothScrollButtonProps} props - Component data
 * @returns {SmoothScrollButton}
 */
const ScrollToTopButton = props => {
  return (
    <SmoothScrollButton {...attributes(props, 'scroll-to-top-btn')}>
      <ArrowUpwardIcon aria-label='Scroll to top' />
      {props.children}
    </SmoothScrollButton>
  )
}

/**
 * Renders @link Button component with the base class `smooth-scroll-btn`.
 *
 * When the button is clicked, the page will scroll to the top of the element
 * selected by @param props.to .
 *
 * @class SmoothScrollButton
 * @param {SmoothScrollButtonProps} props - Component data
 * @returns {Button}
 */
const SmoothScrollButton = props => {
  const { duration, children, to } = props
  const attr = attributes(props, 'smooth-scroll-btn', ['duration', 'to'])

  return (
    <Button {...attr} onClick={event => scroll(event, to, duration)}>
      {children}
    </Button>
  )
}

/**
 * @link Button component properties.
 *
 * @typedef {ButtonProps}
 */
Button.propTypes = {
  /**
   * This attribute on a `<button>` is nonstandard and Firefox-specific.
   *
   * Unlike other browsers, Firefox persists the dynamic disabled state of a
   * `<button>` across page loads. Setting autocomplete="off" on the button
   * disables this feature.
   */
  autoComplete: PropTypes.string,

  /**
   * `Button` content.
   */
  children: PropTypes.node.isRequired,

  /**
   * A space-separated list of the classes of the element.
   *
   * Classes allows CSS and JavaScript to select and access specific elements
   * via the class selectors or functions like the method
   * `Document.getElementsByClassName()`.
   */
  className: PropTypes.string,

  /**
   * Prevents the user from interacting with the button: it cannot be pressed or
   * focused.
   *
   * Firefox, unlike other browsers, persists the dynamic disabled state of a
   * `<button>` across page loads. Use the `autocomplete` attribute to control
   * this feature.
   */
  disabled: PropTypes.bool,

  /**
   * The `<form>` element to associate the button with (its form owner). The
   * value of this attribute must be the id of a `<form>` in the same document.
   * (If this attribute is not set, the `<button>` is associated with its
   * ancestor `<form>` element, if any.)
   *
   * This attribute lets you associate `<button>` elements to `<form>`s anywhere
   * in the document, not just inside a `<form>`. It can also override an
   * ancestor `<form>` element.
   */
  form: PropTypes.string,

  /**
   * Defines a unique identifier (ID) which must be unique in the whole
   * document. Its purpose is to identify the element when linking (using a
   * fragment identifier), scripting, or styling (with CSS).
   */
  id: PropTypes.string,

  /**
   * The name of the button, submitted as a pair with the button’s value as part
   * of the form data.
   */
  name: PropTypes.string,

  /**
   * Code to be called when the the `click` event is raised.
   */
  onClick: PropTypes.func,

  /**
   * Contains a text representing advisory information related to the element it
   * belongs to. Such information can typically, but not necessarily, be
   * presented to the user as a tooltip.
   */
  title: PropTypes.string,

  /**
   * The default behavior of the button.
   *
   * Possible values are:
   *
   * - **submit**: Submits the form data to the server. This is the default if
   *   the attribute is not specified for buttons associated with a `<form>`, or
   *   if the attribute is an empty or invalid value.
   * - **reset**: Resets all the controls to their initial values, like `<input
   *   type="reset">` (This behavior tends to annoy users).
   * - **button**: No default behavior, and does nothing when pressed by
   *   default. It can have client-side scripts listen to the element's events,
   *   which are triggered when the events occur.
   */
  type: PropTypes.string,

  /**
   * Defines the value associated with the button’s name when it’s submitted
   * with the form data.
   *
   * This value is passed to the server in params when the form is submitted.
   */
  value: PropTypes.any
}

Button.defaultProps = {
  autoComplete: 'off',
  children: 'Button text',
  disabled: false,
  onClick: event => console.debug('BUTTON CLICKED =>', event),
  type: 'button'
}

CloseButton.defaultProps = {
  onClick: event => console.debug('CLOSE BUTTON CLICKED =>', event)
}

MenuButton.defaultProps = {
  onClick: event => console.debug('MENU BUTTON CLICKED =>', event)
}

/**
 * @link SmoothScrollButton component properties.
 *
 * @typedef {SmoothScrollButtonProps}
 */
SmoothScrollButton.propTypes = {
  /**
   * A string or number determining how long the `scroll` animation will run.
   */
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * A selector expression referencing the HTML element to scroll to.
   */
  to: PropTypes.string
}

SmoothScrollButton.defaultProps = {
  duration: 400,
  to: 'body'
}

export {
  Button as default,
  Button,
  CloseButton,
  MenuButton,
  ScrollToTopButton,
  SmoothScrollButton
}
