import React from 'react'
import cssModules from 'react-css-modules'
import TwoColumns from 'common/components/two-columns'
import styles from './style.sass'

const App = () => {
  return (
    <div styleName="app">
      <div styleName="header">
        <h1>CIRCUIT Main Page</h1>
      </div>
      <div styleName="content">
        <TwoColumns left={<h1>LEFT</h1>} main={<h1>MAIN</h1>} leftWidth={250}/>
      </div>
    </div>
  )
}

export default cssModules(App, styles)
