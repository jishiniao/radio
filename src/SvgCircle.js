import React from 'react'
import PropTypes from 'prop-types'

export default class SvgCircle extends React.Component {
  static propTypes = {
    stroke: PropTypes.string,
    size: PropTypes.string,
  }

  static defaultProps = {
    stroke:'#666',
    size: '1em',
  }

  render() {
    const { stroke, size } = this.props

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
        <circle stroke={stroke} strokeWidth='4' fill='none' cx='38' cy='38' r='34'/>
      </svg>
    </span>
  }
}
