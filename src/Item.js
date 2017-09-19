import React from 'react'
import PropTypes from 'prop-types'

import SvgCircle from './SvgCircle'
import SvgCircleDot from './SvgCircleDot'
import { IconAlipay, IconWechat } from './Icon'

const textStyle = {
  display: 'inline-block',
  paddingLeft:'0.5em'
}

const disableColor = '#DDD'
const enableColor = '#427afb'
const bolderColor = '#D8D8D8'
const bolderActiveColor = '#427AFB'

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
    disabled: PropTypes.bool,
    children: PropTypes.node,
  }

  static defaultProps = {
    icon: '',
    spaceRight: '2em',
    isDef: false,
    disabled: false,
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
    const { isDef, disabled } = this.props
    if(isDef) {
      return disabled ? <SvgCircleDot stroke={disableColor} fill={disableColor} /> : <SvgCircleDot stroke={enableColor} fill={enableColor} />
    } else {
      return disabled ? <SvgCircle stroke={disableColor} /> : <SvgCircle />
    }
  }

  render() {
    const { onClick, name, value, spaceRight, disabled, children, isDef } = this.props

    const ItemStyle = {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      marginRight: spaceRight,
    }

    let clickFn = onClick

    if(disabled) {
      ItemStyle.color = disableColor
      clickFn = null
    }

    if(children) {
      ItemStyle.border = `1px solid ${bolderColor}`

      if(isDef) {
        ItemStyle.borderColor = bolderActiveColor
        if(disabled) {
          ItemStyle.borderColor = bolderColor
          ItemStyle.boxShadow = `0 0 3px 0 ${bolderColor}`
        } else {
          ItemStyle.boxShadow = `0 0 3px 0 ${bolderActiveColor}`
        }
      } else {
        ItemStyle.borderColor = bolderColor
      }

      return <div data-value={value} style={ItemStyle} onClick={clickFn}>
        {children}
      </div>
    }

    return <div data-value={value} style={ItemStyle} onClick={clickFn}>
      {this.renderItemDefault()}
      {this.renderIcon()}
      <div style={textStyle}>{name}</div>
    </div>
  }

}
