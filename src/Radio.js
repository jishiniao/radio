import React from 'react'
import PropTypes from 'prop-types'

export default class Radio extends React.Component {

  static propTypes = {
    datas : PropTypes.object,
    onClick: PropTypes.func,
    sort: PropTypes.number, //1 horizontal, 2 Vertical
  }

  static defaultProps = {
    datas : {
      '1' : {
        name: '支付宝',
        icon: 'alipay',
      },
      '2' : {
        name: '微信支付',
        icon: 'wechat',
      },
    },
    sort: 1,
  }

  render() {
    return <h1>Hello, Radio!</h1>
  }

}

// const datas = {
//   'key' : {
//     name: 'string',
//     icon: 'string',
//     isDefalut: 'bool'
//   }
// }
