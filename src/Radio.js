import React from 'react'
import PropTypes from 'prop-types'

export default class Radio extends React.Component {

  render() {
    return <h1>Hello, Radio!</h1>
  }
}

Radio.defaultProps = {

}

Radio.PropTypes = {
  type: PropTypes.string,
  names: PropTypes.array,
  values: PropTypes.array,
  onClick : PropTypes.func,
  icons: PropTypes.array,
}
