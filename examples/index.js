import React from 'react'
import ReactDOM from 'react-dom'

import Radio from '../src/Radio'

const radioDatas = {
  '1' : {
    name: '小明',
    icon: 'alipay',
  },
}

function radioClickTest(v) {
  console.log(v)
}

ReactDOM.render(
  <Radio onClick={radioClickTest} />,
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
