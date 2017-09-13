import React from 'react'
import PropTypes from 'prop-types'

import { IconAlipay, IconWechat } from './Icon'

const ItemStyle = {
  cursor: 'pointer',
}

export default class Item extends React.Component {

  static propTypes = {
    icon: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func,
  }

  constructor(props) {
    super(props)
  }

  renderIcon() {
    const { icon } = this.props
    switch(icon) {
      case 'alipay': {
        return <IconAlipay />
      }
      case 'wechat': {
        return <IconWechat />
      }
      default:
        return null
    }
  }

  renderRadio() {
    
  }

  render() {
    const { onClick, name, value } = this.props
    return <div id={value} style={ItemStyle} onClick={onClick}>
      {this.renderIcon()}
      {name}
    </div>
  }

}
