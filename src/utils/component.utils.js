// Packages
import React from 'react'

// Components
import { Link } from '../components/atoms'

/**
 * @file React component utilities
 * @module utils/component
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 */

/**
 * Converts @param items into an array of @link Link components.
 *
 * @param {LinkProps[]} items - Array of @link LinkProps data
 * @returns {Link[]}
 */
export const createLinks = (items = []) => {
  return items.map(link => <Link {...link} key={link.href} />)
}
