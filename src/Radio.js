import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'immutable'

import Item from './Item'

export default class Radio extends React.Component {

  static propTypes = {
    datas : PropTypes.array,
    onClick: PropTypes.func,
    sort: PropTypes.number, //1 horizontal, 2 Vertical
  }

  static defaultProps = {
    datas : [
      {
        name: '支付宝',
        value: '1',
        icon: 'alipay',
      },
      {
        name: '微信支付',
        value: '2',
        icon: 'wechat',
      },
      {
        name: '对公转账',
        value: '3',
      }
    ],
    sort: 1,
  }

  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    const { onClick } = this.props
    const value = e.target.id
    onClick(value)
  }

  renderItems() {
    const { datas } = this.props
    const datasList = List(datas)
    return datasList.map((data, k) => {
      return <Item key={k} icon={data.icon}
              name={data.name}
              value={data.value}
              onClick={this.handleClick} />
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
