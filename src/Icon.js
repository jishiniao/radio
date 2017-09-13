import styled from 'styled-components'
import ImgAlipay from './imgs/icon-alipay.png'
import ImgWechat from './imgs/icon-wechat.png'

const Icon = styled.span`
  size: 1em;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 100% 100%;
`

const IconAlipay = styled(Icon)`
  background-image: url('${ImgAlipay}');
`

const IconWechat = styled(Icon)`
  background-image: url('${ImgWechat}');
`

export default { IconAlipay, IconWechat }
