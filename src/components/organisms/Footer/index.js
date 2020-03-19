// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Container } from '../../atoms'

// Utility functions
import { attributes } from '../../../utils/html.utils'

// Stylesheets
import './footer.sass'
import './footer.responsive.sass'

/**
 * @file Components representing <footer> elements
 * @module components/organisms/Footer
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 */

const Footer = props => {
  const { children, container } = props
  const attr = attributes(props, 'ado-footer', ['container'])

  if (!container) return <footer {...attr}>{children}</footer>

  return (
    <footer {...attr}>
      <Container className='footer-container'>{children}</Container>
    </footer>
  )
}

Footer.propTypes = {
  /**
   * `Footer` content.
   */
  children: PropTypes.node,

  /**
   * If true, render `children` inside of a `Container` component.
   *
   * The container will have the base classes `ada-container` and
   * `footer-container`.
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

Footer.defaultProps = {
  container: true
}

export default Footer
