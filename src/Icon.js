import React from 'react'

import ImgAlipay from './imgs/icon-alipay.png'
import ImgWechat from './imgs/icon-wechat.png'

const iconStyle = {
  display: 'inline-block',
  width: '1em',
  height: '1em',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left center',
  backgroundSize: '100% 100%',
  marginLeft: '0.5em',
}

export const IconAlipay = () => {
  const styles = {
    ...iconStyle,
    backgroundImage: `url('${ImgAlipay}')`,
  }
  return <span style={styles}/>
}

export const IconWechat = () => {
  const styles = {
    ...iconStyle,
    backgroundImage: `url('${ImgWechat}')`,
  }
  return <span style={styles}/>
}
