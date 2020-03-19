// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Container } from '../../atoms'

// Utility functions
import { attributes } from '../../../utils/html.utils'

// Stylesheets
import './header.sass'
import './header.responsive.sass'

/**
 * @file Components representing <header> elements
 * @module components/organisms/Header
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 */

const Header = props => {
  const { children, container } = props
  const attr = attributes(props, 'ado-header', ['container'])

  if (!container) return <header {...attr}>{children}</header>

  return (
    <header {...attr}>
      <Container className='header-container'>{children}</Container>
    </header>
  )
}

Header.propTypes = {
  /**
   * `Header` content.
   */
  children: PropTypes.node,

  /**
   * If true, render `children` inside of a `Container` component.
   *
   * The container will have the base classes `ada-container` and
   * `header-container`.
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

Header.defaultProps = {
  container: true
}

export default Header
