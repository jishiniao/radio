import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'immutable'

import Item from './Item'

export default class Radio extends React.Component {

  static propTypes = {
    datas : PropTypes.array.isRequired,
    defValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    onClick: PropTypes.func.isRequired,
    sort: PropTypes.number, //1 horizontal, 2 Vertical
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    datas : [
      {
        name: '支付宝',
        value: 1,
        icon: 'alipay',
      },
      {
        name: '微信支付',
        value: 2,
        icon: 'wechat',
      },
      {
        name: '对公转账',
        value: 3,
        spaceRight: '0',
      }
    ],
    defValue: 1,
    sort: 1,
    disabled: false,
  }

  constructor(props) {
    super(props)

    const { defValue, disabled } = this.props

    this.state = {
      defValue,
      disabled,
    }

  }

  handleClick(data) {
    const { onClick } = this.props
    // const value = e.currentTarget.dataset['value']
    const value = data.value
    this.setState({ defValue: value })
    onClick(data)
  }

  renderItems() {
    const { datas, disabled } = this.props
    const { defValue } = this.state

    const datasList = List(datas)
    return datasList.map((data, k) => {
      const elIsDef = (data.value == defValue) ? true : false
      return <Item key={k} icon={data.icon}
              name={data.name}
              value={data.value}
              spaceRight={data.spaceRight}
              isDef={elIsDef}
              disabled={disabled}
              onClick={this.handleClick.bind(this, data)}>{data.children}</Item>
    })
  }

  render() {
    const { sort } = this.props
    const HOrV = (sort === 2) ? 'column nowrap' : 'row nowrap'
    const RadioStyle = {
      display: 'flex',
      flexFlow: HOrV,
    }
    return (
      <div style={RadioStyle}>
        {this.renderItems()}
      </div>
    )
  }

}
