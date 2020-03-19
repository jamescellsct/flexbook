// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Container } from '../../atoms'

// Utility functions
import { attributes } from '../../../utils/html.utils'

// Stylesheets
import './navigation.sass'
import './navigation.responsive.sass'

/**
 * @file Components representing <nav> elements
 * @module components/organisms/Navigation
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 */

const Navigation = props => {
  const { children, container } = props
  const attr = attributes(props, 'ado-nav', ['container'])

  if (!container) return <nav {...attr}>{children}</nav>

  return (
    <nav {...attr}>
      <Container className='nav-container'>{children}</Container>
    </nav>
  )
}

Navigation.propTypes = {
  /**
   * `Navigation` content.
   */
  children: PropTypes.node,

  /**
   * If true, render `children` inside of a `Container` component.
   *
   * The container will have the base classes `ada-container` and
   * `nav-container`.
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

Navigation.defaultProps = {
  container: true
}

export default Navigation
