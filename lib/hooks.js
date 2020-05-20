import config from './config'
import PropTypes from 'prop-types'
import {useState, useEffect} from 'react'

/**
 * A hook to deal with closing Alert or Modal components.
 *
 * @author Greg Rickaby
 * @return {mixed} The value of isShowing; toggle function as a hook.
 */
export function useCloseButton() {
  // Instantiate state values.
  const [isShowing, setIsShowing] = useState(true)

  // Change the value of isShowing to the opposite of current state.
  function toggle() {
    setIsShowing(!isShowing)
  }

  return {
    isShowing,
    toggle
  }
}
