// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Utility functions
import { attributes } from '../../../utils/html.utils'

// Stylesheets
import './icon.sass'
import './icon.responsive.sass'

/**
 * @file Icon components
 * @module components/atoms/Icon
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 * @see {@link https://google.github.io/material-design-icons/}
 */

const Icon = props => {
  const { children } = props
  const attr = attributes(props, 'ada-icon material-icons')

  attr['data-icon'] = children

  return <span {...attr}>{children}</span>
}

const ArrowUpwardIcon = props => {
  return <Icon {...attributes(props, 'arrow-upward-icon')}>arrow_upward</Icon>
}

const ChevronRightIcon = props => {
  return <Icon {...attributes(props, 'chevon-right-icon')}>chevron_right</Icon>
}

const CloseIcon = props => {
  return <Icon {...attributes(props, 'close-icon')}>close</Icon>
}

const LoadingIcon = props => {
  return <Icon {...attributes(props, 'loading-icon')}>refresh</Icon>
}

const MenuIcon = props => {
  return <Icon {...attributes(props, 'menu-icon')}>menu</Icon>
}

Icon.propTypes = {
  /**
   * Ligature or numeric character reference.
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

ArrowUpwardIcon.defaultProps = {
  children: 'arrow_upward'
}

ChevronRightIcon.defaultProps = {
  children: 'chevon_right'
}

CloseIcon.defaultProps = {
  children: 'close'
}

LoadingIcon.defaultProps = {
  children: 'refresh'
}

MenuIcon.defaultProps = {
  children: 'menu'
}

export {
  Icon as default,
  Icon,
  ArrowUpwardIcon,
  ChevronRightIcon,
  CloseIcon,
  LoadingIcon,
  MenuIcon
}
