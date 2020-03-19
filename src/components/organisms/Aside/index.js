// Packages
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'

// Components
import { CloseButton, Container } from '../../atoms'
import { Menu } from '../../molecules'

// Utility functions
import { attributes } from '../../../utils/html.utils'

// Stylesheets
import './aside.sass'
import './aside.responsive.sass'

/**
 * @file Component representing <aside> elements
 * @module components/organisms/Aside
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 */

const Aside = props => {
  const { children, container } = props

  const attr = attributes(props, 'ado-aside', ['container'])

  if (!container) return <aside {...attr}>{children}</aside>

  return (
    <aside {...attr}>
      <Container className='aside-container'>{children}</Container>
    </aside>
  )
}

const Sidebar = props => {
  const attr = attributes(props, 'sidebar', ['items'])
  const dimmer = attributes(props, 'sidebar-dimmer is-stretched')

  const close = event => {
    $('.sidebar').removeClass('visible')
    $('.sidebar-dimmer').removeClass('visible')
  }

  return (
    <Fragment>
      <Aside {...attr}>
        <CloseButton onClick={close} />
        <Menu className='sidebar-menu' items={props.items} />
      </Aside>
      <Container className={dimmer.className} />
    </Fragment>
  )
}

Aside.propTypes = {
  /**
   * Inner content.
   */
  children: PropTypes.node,

  /**
   * If true, render `children` inside of a `Container` component.
   *
   * The container will have the base classes `ada-container` and
   * `aside-container`.
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

Aside.defaultProps = {
  container: false
}

Sidebar.propTypes = {
  /**
   * Array of `Link` component data to display in the sidebar menu.
   */
  items: PropTypes.arrayOf(PropTypes.object)
}

Sidebar.defaultProps = {
  className: 'right visible',
  items: [
    {
      children: 'Overview',
      href: '#'
    },
    {
      children: 'About',
      href: '#'
    },
    {
      children: 'Login',
      href: '#'
    },
    {
      children: 'Get Started',
      href: '#'
    }
  ]
}

export {
  Aside as default,
  Aside,
  Sidebar
}
