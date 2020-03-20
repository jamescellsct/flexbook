// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Container } from '../../atoms'

// Utility functions
import { attributes } from '../../../utils/html.utils'

// Stylesheets
import './article.sass'
import './article.responsive.sass'

/**
 * @file Component representing <article> elements
 * @module components/molecules/Article
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/article}
 */

/**
 * Renders an `<article>` element with the base class `adm-article`.
 *
 * @class Article
 * @param {ArticleProps} props - Component data
 * @returns {HTMLElement}
 */
const Article = props => {
  const { children, container } = props
  const attr = attributes(props, 'adm-article', ['container'])

  if (!container) return <article {...attr}>{children}</article>

  return (
    <article {...attr}>
      <Container className='article-container'>{children}</Container>
    </article>
  )
}

/**
 * @link Article component properties.
 *
 * @typedef {ArticleProps}
 */
Article.propTypes = {
  /**
   * `Article` content
   */
  children: PropTypes.node,

  /**
   * If true, render `children` inside of a `Container` component.
   *
   * The container will have the base classes `ada-container` and
   * `article-container`.
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

Article.defaultProps = {
  container: false
}

export default Article
