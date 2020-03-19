// Packages
import $ from 'jquery'

/**
 * @file UI utilities
 * @module utils/ui
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 */

/**
 * Adds the class "visible" to the elements to the <Sidebar/> component
 *
 * @param {boolean} open - If true, open the sidebar
 * @returns {undefined}
 */
export const handleSidebar = open => {
  $('.sidebar').removeClass('hidden')
  $('.sidebar-dimmer').removeClass('hidden')

  if (open) {
    $('.sidebar').addClass('visible')
    $('.sidebar-dimmer').addClass('visible')
  }
}

/**
 * Animates the scrolling of the page to the top of @see @param selector .
 *
 * @see @param selector defaults to "body."
 *
 * @see {@link https://api.jquery.com/category/selectors/}
 *
 * @param {number} duration - Animation speed in milliseconds
 * @param {MouseEvent} event - Event object passed to the `click` event
 * @param {string} selector - A string containing a selector expression
 * @returns {undefined}
 */
export const scroll = (event, selector = 'body', duration) => {
  $('html, body').animate({ scrollTop: $(selector).offset().top }, duration)
  event.preventDefault()
}
