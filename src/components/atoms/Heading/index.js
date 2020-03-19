// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Utility functions
import { attributes } from '../../../utils/html.utils'

// Stylesheets
import './heading.sass'
import './heading.responsive.sass'

/**
 * @file Component representing heading elements
 * @module components/atoms/Heading
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 */

class Heading extends React.Component {
  render() {
    const { children, size } = this.props

    const attr = attributes(this.props, 'ada-heading', ['size'])
    let $el

    switch (size) {
      case 2:
        $el = <h2 {...attr}>{children}</h2>
        break
      case 3:
        $el = <h3 {...attr}>{children}</h3>
        break
      case 4:
        $el = <h4 {...attr}>{children}</h4>
        break
      case 5:
        $el = <h5 {...attr}>{children}</h5>
        break
      case 6:
        $el = <h6 {...attr}>{children}</h6>
        break
      default:
        $el = <h1 {...attr}>{children}</h1>
        break
    }

    return $el
  }
}

Heading.propTypes = {
  /**
   * `Heading` text.
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
   * Heading sizes.
   */
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),

  /**
   * Contains a text representing advisory information related to the element it
   * belongs to. Such information can typically, but not necessarily, be
   * presented to the user as a tooltip.
   */
  title: PropTypes.string
}

Heading.defaultProps = {
  children: 'The quick brown fox jumps over the lazy dog',
  size: 1
}

export default Heading