import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import IconAlipay from './imgs/icon-alipay.png'
import IconWechat from './imgs/icon-wechat.png'

const Icon = styled.span`
  display: inline-block;
  width: 1em;
  height: 1em;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 100% 100%;
`

const Icon1Alipay = styled(Icon)`
  background-image: url('${IconAlipay}');
`

const Icon1Wechat = styled(Icon)`
  background-image: url('${IconWechat}');
`

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
        return <Icon1Alipay />
      }
      case 'wechat': {
        return <Icon1Wechat />
      }
      default:
        return null
    }
  }

  renderText() {

  }

  render() {
    const { onClick, name, value } = this.props
    return <div id={value} style={ItemStyle} onClick={onClick}>
      {this.renderIcon()}
      {name}
    </div>
  }

}
