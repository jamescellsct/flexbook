// Packages
import { addDecorator, addParameters } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withConsole } from '@storybook/addon-console'
import { withKnobs } from '@storybook/addon-knobs'
import { withHTML } from '@whitespace/storybook-addon-html/react'

// Custom Viewports
import { viewports, defaultViewport } from './viewports'

/**
 * @file Storybook Configuration
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 */

// Customize Storybook UI
addParameters({
  options: { showRoots: true },
  viewport: { defaultViewport, viewports }
})

// Receive console outputs as a console, warn and error in the actions panel
addDecorator((storyFn, context) => withConsole()(storyFn)(context))

// Add accessibility testing
addDecorator(withA11y)

// Display compiled HTML for each story
addDecorator(withHTML)

// Edit props dynamically using the Storybook UI
addDecorator(withKnobs)
