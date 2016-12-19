import React, {PropTypes} from 'react'
import cssModules from 'react-css-modules'
import styles from './style.sass'

const TwoColumns = props => {
  return (
    <div styleName="two-columns">
      <div styleName="left" style={{width: props.leftWidth}}>{props.left}</div>
      <div styleName="right">{props.main}</div>
    </div>
  )
}

TwoColumns.propTypes = {
  left: PropTypes.element.isRequired,
  main: PropTypes.element.isRequired,
  leftWidth: PropTypes.number.isRequired
}

export default cssModules(TwoColumns, styles)
