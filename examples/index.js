import React from 'react'
import ReactDOM from 'react-dom'

import UiRadio from '../lib/index'

const datas = [
  {
    name: '按钮1',
    value: 's1',
  },
  {
    name: '按钮2',
    value: 's2',
  },
]

function radioClickTest(v) {
  console.log(v)
}

ReactDOM.render(
  <UiRadio onClick={radioClickTest} />,
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
