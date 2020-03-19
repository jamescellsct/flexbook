/**
 * @file HTML Utility Functions
 * @module utils/html
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 */

/**
 * Returns an HTML element safe version of the specified component properties.
 *
 * Additionally, the component base class name will be merged the incoming
 * classes from @see @param props.className .
 *
 * @param {object} props - Component properties
 * @param {string} props.className - Incoming component class names
 * @param {string} style - Base class name
 * @returns {object} Object containing HTML element safe properties
 */
export const attributes = (props = {}, style = '', remove = ['children']) => {
  if (!remove.includes('children')) remove.unshift('children')

  const attributes = Object.assign({}, props)
  attributes.className = styles(style, props.className || '')

  remove.forEach(prop => Reflect.deleteProperty(attributes, prop))

  return attributes
}

/**
 * Generates a class string for an HTML element.
 *
 * @param {string} base - Base class
 * @param {string} addl - Additional classes
 * @returns {string} Trimmed class string
 */
export const styles = (base = '', addl = '') => `${base} ${addl}`.trim()
