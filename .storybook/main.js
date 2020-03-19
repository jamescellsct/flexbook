/**
 * @file Storybook Configuration
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 */

module.exports = {
  /**
   * Project addons.
   *
   * @see {@link https://storybook.js.org/docs/addons/introduction/}
   *
   * @property {Array<Object, String>} addons
   */
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@whitespace/storybook-addon-html'
  ],

  /**
   * Project presets.
   *
   * @see {@link https://storybook.js.org/docs/presets/introduction/}
   *
   * @property {Array<Object, String>} presets
   */
  presets: [],

  /**
   * Stories paths to load.
   *
   * @property {string[]} stories
   */
  stories: [
    '../src/docs/index.stories.mdx',
    '../src/docs/*.stories.mdx',
    '../src/blocks/*.stories.mdx',
    '../src/components/**/**/*.stories.mdx'
  ],

  /**
   * Alters the Storybook Webpack configuration.
   *
   * This project uses Babel and Sass.
   *
   * @param param1.configType has a value of 'DEVELOPMENT' or 'PRODUCTION'.
   * 'PRODUCTION' is used when building the static version of storybook.
   *
   * @param {object} config - Base Webpack config
   * @param {object} param1 - Storybook config
   * @param {string} param1.configType - Storybook development environment
   * @returns {object} Webpack configuration
   */
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.jsx?$/i,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      ]
    })

    config.module.rules.push(
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              data: '@import ../../../sass/global.sass',
              sassOptions: {
                includePaths: ['./src/components/**/**/*.sass'],
                indentedSyntax: true,
                prependData: `$env: ${process.env.NODE_ENV}`
              }
            }
          }
        ]
      }
    )

    return config
  }
}
