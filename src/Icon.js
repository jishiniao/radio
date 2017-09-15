import React from 'react'

import ImgAlipay from './imgs/icon-alipay.png'
import ImgWechat from './imgs/icon-wechat.png'

const spanStyle = {
  display: 'inline-block',
  width: '1em',
  height: '1em',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left center',
  backgroundSize: '100% 100%',
  marginLeft: '0.5em',
}

export const IconAlipay = () => {
  spanStyle.backgroundImage = `url('${ImgAlipay}')`
  return <span style={spanStyle}/>
}

export const IconWechat = () => {
  spanStyle.backgroundImage = `url('${ImgWechat}')`
  return <span style={spanStyle}/>
}
