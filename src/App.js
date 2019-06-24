import React from 'react'
import ReactDOM from 'react-dom'

import Radio from './index'

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

const datas2 = [
  {
    children: <div>按钮1，<span>iuiui</span></div>,
    value: 1,
  },
  {
    children: '按钮2',
    value: 2,
  },
]

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      disabled: false,
    }

    this.handleValue = this.handleValue.bind(this)
    this.handlesubmit = this.handlesubmit.bind(this)
  }

  handleValue(v) {
    console.log(v)
  }

  handlesubmit() {
    this.setState({disabled: true})
  }

  render() {
    const { disabled } = this.state
    return (
      <div>
        <Radio onClick={this.handleValue} layout={2} />
        <Radio onClick={this.handleValue} itemStyle={{ borderRadius: '5px'}} itemClass={'atest'} disabled={disabled} datas={datas2} defValue={1} />
        <button onClick={this.handlesubmit}>提交</button>
      </div>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
