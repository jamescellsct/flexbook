/**
 * @file Fonts & Font Sizes
 * @module config/typography
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 */

/**
 * Font families used in this project.
 *
 * @type {Object}
 */
const FAMILIES = {
  proxima: {
    family: 'heebo, sans-serif',
    name: 'Heebo'
  }
}

/**
 * Font sizes used in this project.
 *
 * @type {Object}
 */
const SIZES = {
  s1: 12,
  s2: 14,
  s3: 16,
  m1: 20,
  m2: 24,
  m3: 28,
  l1: 32,
  l2: 36,
  l3: 40,
  l4: 48
}

/**
 * Font weights used in this project.
 *
 * @type {Object}
 */
const WEIGHTS = {
  light: '300',
  regular: '400',
  medium: '500',
  bold: '700',
  extrabold: '800',
  black: '900'
}

export { FAMILIES, WEIGHTS, SIZES }
