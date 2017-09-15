import React from 'react'
import PropTypes from 'prop-types'

import SvgCircle from './SvgCircle'
import SvgCircleDot from './SvgCircleDot'
import { IconAlipay, IconWechat } from './Icon'

const textStyle = {
  display: 'inline-block',
  paddingLeft:'0.5em'
}

export default class Item extends React.Component {

  static propTypes = {
    icon: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    onClick: PropTypes.func,
    spaceRight: PropTypes.string,
    isDef: PropTypes.bool,
  }

  static defaultProps = {
    icon: '',
    spaceRight: '2em',
    isDef: false,
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

  renderItemDefault() {
    const { isDef } = this.props
    return isDef ? <SvgCircleDot stroke={'#427afb'} fill={'#427afb'} /> : <SvgCircle />
  }

  render() {
    const { onClick, name, value, spaceRight } = this.props

    const ItemStyle = {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      marginRight: spaceRight,
    }

    return <div data-value={value} style={ItemStyle} onClick={onClick}>
      {this.renderItemDefault()}
      {this.renderIcon()}
      <div style={textStyle}>{name}</div>
    </div>
  }

}
