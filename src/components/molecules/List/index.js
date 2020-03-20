// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Item, { Bucket } from '../Item'

// Utility functions
import { attributes } from '../../../utils/html.utils'
import { createLinks } from '../../../utils/component.utils'

// Stylesheets
import './list.sass'
import './list.responsive.sass'

/**
 * @file Components representing <dl>, <ol>, and <ul> elements
 * @module components/molecules/List
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/dl}
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/ol}
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/ul}
 */

/**
 * Renders a `<dl>`, `<ol>`, or `<ul>` element with the base class `adm-list`.
 *
 * @class List
 * @param {ListProps} props - Component data
 * @returns {HTMLDListElement | HTMLOListElement | HTMLUListElement}
 */
const List = props => {
  const { children, type } = props

  const attr = attributes(props, 'adm-list', ['type'])
  attr['data-type'] = type

  switch (type) {
    case 'ordered':
      return <ol {...attr}>{children}</ol>
    case 'description':
      return <dl {...attr}>{children}</dl>
    default:
      return <ul {...attr}>{children}</ul>
  }
}

/**
 * Renders a @link List component with the base class `buckets`.
 *
 * A list of @link Bucket components will be the list's children.
 *
 * @class Buckets
 * @param {BucketsProps} props - Component data
 * @returns {List}
 */
const Buckets = props => {
  const { items = [] } = props

  return (
    <List {...attributes(props, 'buckets', ['items'])}>
      {items.map(item => <Bucket {...item} key={item.title} />)}
    </List>
  )
}

/**
 * Renders a @link List component with the base class `menu`.
 *
 * The menu links will be rendered inside of @link Item components, which will
 * be the list children.
 *
 * @class Menu
 * @param {MenuProps} props - Component data
 * @returns {List}
 */
const Menu = props => {
  const { items = [] } = props

  return (
    <List {...attributes(props, 'menu', ['items'])}>
      {createLinks(items).map((item, i) => {
        return <Item key={`menu-item-${i}`}>{item}</Item>
      })}
    </List>
  )
}

/**
 * @link List component properties.
 *
 * @typedef {ListProps}
 */
List.propTypes = {
  /**
   * List items.
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
   * Determines the type of list rendered.
   *
   * Possible values are:
   *
   * - unordered: `<ul>`
   * - ordered: `<ol>`
   * - description: `<dl>`
   */
  type: PropTypes.oneOf(['unordered', 'ordered', 'description'])
}

List.defaultProps = {
  type: 'unordered'
}

/**
 * @link Buckets component properties.
 *
 * @typedef {BucketsProps}
 */
Buckets.propTypes = {
  /**
   * Collection of `Bucket` component properties.
   */
  items: PropTypes.arrayOf(PropTypes.object)
}

Buckets.defaultProps = {
  items: [
    {
      title: 'Bucket title 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in velit enim. Nam mollis consequat.',
      link: {
        children: 'Bucket link 1',
        href: '#'
      }
    },
    {
      title: 'Bucket title 2',
      text: 'Etiam augue nunc, laoreet eu iaculis at, pellentesque eu turpis. Cras aliquet imperdiet.',
      link: {
        children: 'Bucket link 2',
        href: '#'
      }
    },
    {
      title: 'Bucket title 3',
      text: 'Quisque arcu erat, vehicula et ullamcorper nec, bibendum nec justo. Aenean sit amet odio nibh.',
      link: {
        children: 'Bucket link 3',
        href: '#'
      }
    }
  ]
}

/**
 * @link Menu component properties.
 *
 * @typedef {MenuProps}
 */
Menu.propTypes = {
  /**
   * Collection of `Link` component properties.
   */
  items: PropTypes.arrayOf(PropTypes.object)
}

Menu.defaultProps = {
  items: [
    {
      children: 'Menu Link 1',
      href: '#'
    },
    {
      children: 'Menu Link 2',
      href: '#'
    },
    {
      children: 'Menu Link 3',
      href: '#'
    },
    {
      children: 'Menu Link 4',
      href: '#'
    },
    {
      children: 'Menu Link 5',
      href: '#'
    }
  ]
}

export {
  List as default,
  Buckets,
  List,
  Menu
}
