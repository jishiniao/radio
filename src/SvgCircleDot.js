import React from 'react'
import PropTypes from 'prop-types'

export default class SvgCircleDot extends React.Component {
  static propTypes = {
    stroke: PropTypes.string,
    fill: PropTypes.string,
    size: PropTypes.string,
  }

  static defaultProps = {
    stroke:'#666',
    fill: '#666',
    size: '1em',
  }

  render() {
    const { stroke, fill, size } = this.props

    const svgStyle = {
      width: size,
      height: size,
    }

    const spanStyle = {
      display: 'inline-block',
      width: size,
      height: size,
    }

    return <span style={spanStyle}>
      <svg viewBox='0 0 76 76' xmlns='http://www.w3.org/2000/svg' style={svgStyle}>
        <g fill='none' fillRule='evenodd' stroke={stroke}>
          <circle strokeWidth='4' cx='38' cy='38' r='34'/>
          <circle fill={fill} cx='38' cy='38' r='20'/>
        </g>
      </svg>
    </span>
  }
}
