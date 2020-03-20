// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import { ChevronRightIcon } from '../Icon'

// Utility functions
import { attributes } from '../../../utils/html.utils'

// Stylesheets
import './link.sass'
import './link.responsive.sass'

/**
 * @file Component representing <a> elements
 * @module components/atoms/Link
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/a}
 */

/**
 * Renders an `<a>` element with the base class `ada-link`.
 *
 * Using the `ActionLink` component will produce a link where a
 * `ChevronRightIcon` component will be rendered next to the link text.
 */
const Link = props => {
  return <a {...attributes(props, 'ada-link')}>{props.children}</a>
}

/**
 * Renders a `Link` component with the base class `action-link`.
 * A `ChevronRightIcon` component will be rendered next to the link text.
 */
const ActionLink = props => {
  const { children } = props

  return (
    <Link {...attributes(props, 'action-link')}>
      {children}<ChevronRightIcon />
    </Link>
  )
}

Link.propTypes = {
  /**
   * Link text.
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
   * Prompts the user to save the linked URL instead of navigating to it.
   */
  download: PropTypes.oneOf([true, false]),

  /**
   * The URL that the hyperlink points to.
   */
  href: PropTypes.string,

  /**
   * Defines a unique identifier (ID) which must be unique in the whole
   * document. Its purpose is to identify the element when linking (using a
   * fragment identifier), scripting, or styling (with CSS).
   */
  id: PropTypes.string,

  /**
   * The relationship of the linked URL as space-separated link types.
   */
  rel: PropTypes.string,

  /**
   * Where to display the linked URL, as the name for a browsing context (a tab,
   * window, or `<iframe>`).
   */
  target: PropTypes.string
}

Link.defaultProps = {
  children: 'Link text',
  download: false,
  href: '#',
  rel: 'noreferrer noopener',
  target: '_self'
}

ActionLink.defaultProps = {
  children: 'Action link text'
}

export {
  Link as default,
  ActionLink,
  Link
}
