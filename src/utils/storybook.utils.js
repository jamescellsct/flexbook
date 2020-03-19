/**
 * @file Storybook Utilities
 * @module utils/storybook
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 */

/**
 * Returns the subcomponents of @param component .
 * To be used with `@storybook/addon-docs`.
 *
 * @param {*} base
 */
export const subcomponents = (component = {}) => {
  const copy = Object.assign({}, component)
  delete copy.default
  return copy
}
