import React from 'react'
import ReactDOM from 'react-dom'
import TwoColumns from 'common/components/two-columns'
import 'tachyons/css/tachyons.css'

ReactDOM.render(
  <TwoColumns left={<h1>LEFT</h1>} main={<h1>MAIN</h1>} leftWidth={250}/>,
  document.querySelector('#root')
)
