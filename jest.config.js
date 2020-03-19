/**
 * @file Jest Configuration
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 * @see {@link https://jestjs.io/docs/en/configuration}
 */

module.exports = {
  transform: {
    // Transform MDX stories
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx'
  },
  verbose: true
}
