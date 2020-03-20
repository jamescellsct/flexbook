// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Container, Heading, Paragraph } from '../../atoms'
import { Column, Row } from '../../molecules'

// Utility functions
import { attributes } from '../../../utils/html.utils'

// Stylesheets
import './section.sass'
import './section.responsive.sass'

/**
 * @file Components representing UI sections
 * @module components/organisms/Section
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/section}
 */

/**
 * Renders a `<section>` element with the base class `ado-section`.
 *
 * @class Section
 * @param {SectionProps} props - Component data
 * @returns {HTMLElement}
 */
const Section = props => {
  const { children, container } = props
  const attr = attributes(props, 'ado-section', ['container'])

  if (!container) return <section {...attr}>{children}</section>

  return (
    <section {...attr}>
      <Container className='section-container'>{children}</Container>
    </section>
  )
}

/**
 * Renders a @link Section component with the base class `hero`.
 *
 * @class Hero
 * @param {HeroProps} props - Component data
 * @returns {Section}
 */
const Hero = props => {
  const { text, title } = props

  return (
    <Section {...attributes(props, 'hero', ['text', 'title'])}>
      <Container className='hero-container'>
        <Row>
          <Column className='text-column'>
            <Container className='text-layout-container'>
              <Heading className='hero-title'>{title}</Heading>
              <Paragraph className='hero-text'>{text}</Paragraph>
            </Container>
          </Column>
        </Row>
      </Container>
    </Section>
  )
}

/**
 * @link Section component properties.
 *
 * @typedef {SectionProps}
 */
Section.propTypes = {
  /**
   * `Section` content.
   */
  children: PropTypes.node,

  /**
   * If true, render `children` inside of a `Container` component.
   *
   * The container will have the base classes `ada-container` and
   * `section-container`.
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

Section.defaultProps = {
  container: true
}

/**
 * @link Hero component properties.
 *
 * @typedef {HeroProps}
 */
Hero.propTypes = {
  /**
   * `Paragraph` `children` to display.
   */
  text: PropTypes.string,

  /**
   * `Heading` `children` to display. The heading be `size` 1.
   */
  title: PropTypes.string
}

Hero.defaultProps = {
  text: 'How vexingly quick daft zebras jump! Sphinx of black quartz, judge my vow. Jackdaws love my big sphinx of quartz. Pack my box with five dozen liquor jugs.',
  title: 'The Quick Brown Fox Jumps Over the Lazy Dog'
}

export {
  Section as default,
  Hero,
  Section
}
