// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import { ActionLink, Paragraph } from '../../atoms'

// Utility functions
import { attributes } from '../../../utils/html.utils'

// Stylesheets
import './item.sass'
import './item.responsive.sass'

/**
 * @file Component representing a <li> element
 * @module components/molecules/Item
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 */

const Item = props => {
  return <li {...attributes(props, 'adm-item')}>{props.children}</li>
}

const Bucket = props => {
  const { link, title, text } = props

  return (
    <Item className='is-bucket'>
      <Paragraph className='bucket-title'>{title}</Paragraph>
      <Paragraph className='bucket-text'>{text}</Paragraph>
      <ActionLink {...link} className='bucket-link' />
    </Item>
  )
}

Item.propTypes = {
  /**
   * `Item` content.
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

Bucket.propTypes = {
  /**
   * `Link` component properties.
   */
  link: PropTypes.object,

  /**
   * Bucket text.
   */
  text: PropTypes.string,

  /**
   * Bucket title text.
   */
  title: PropTypes.string
}

Item.defaultProps = {
  children: 'List item'
}

Bucket.defaultProps = {
  link: { children: 'Bucket link', href: '#' },
  text: 'The quick brown fox jumps over the lazy dog. How vexingly quick daft zebras jump! Sphinx of black quartz, judge my vow. The five boxing wizards jump quickly. Jackdaws love my big sphinx of quartz. Pack my box with five dozen liquor jugs. Jived fox nymph grabs quick waltz. Glib jocks quiz nymph to vex dwarf.',
  title: 'Bucket title'
}

export {
  Item as default,
  Bucket,
  Item
}
