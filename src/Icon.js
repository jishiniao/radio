import styled from 'styled-components'

import ImgAlipay from './imgs/icon-alipay.png'
import ImgWechat from './imgs/icon-wechat.png'

const Icon = styled.span`
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 100% 100%;
`

export const IconAlipay = styled(Icon)`
  background-image: url('${ImgAlipay}');
`

export const IconWechat = styled(Icon)`
  background-image: url('${ImgWechat}');
`
