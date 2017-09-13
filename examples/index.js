import React from 'react'
import ReactDOM from 'react-dom'

import Radio from '../src/Radio'

ReactDOM.render(
  <Radio />,
  document.getElementById('root')
)

if(module.hot) {
  // module.hot.accept('/', function() {
  //   ReactDOM.render(
  //     <h1>Hello, worsdfld!</h1>,
  //     document.getElementById('root')
  //   )
  // })
}
