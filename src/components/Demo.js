import React, { useState } from 'react'

import Radio from '../index'
import {
  // baseDatas,
  customDatas,
} from './data'

const Demo = () => {
  const [disable, setDisable] = useState(false)
  const handleValue = (v)=> {
    console.log('test data: ', v)
  }
  const handlesubmit = () => {
    setDisable(true)
  }
  const radioProps = {
    onClick: handleValue,
    itemStyle: { borderRadius: '5px'},
    itemClass: 'atest',
    disabled: disable,
    datas: customDatas,
    defValue: 1,
  }
  return (
    <React.Fragment>
      <Radio onClick={handleValue} layout={2} />
      <Radio {...radioProps} />
      <button onClick={handlesubmit}>提交</button>
    </React.Fragment>
  )
}

export default Demo