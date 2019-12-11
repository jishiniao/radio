import React, { useState } from 'react'

import Radio from '../index'
import {
  customDatas,
} from './data'

const Demo = () => {
  const [disable, setDisable] = useState(false)
  const [defValue, setDefValue] = useState(1)
  const handleValue = (v)=> {
    console.log('test data: ', v)
  }
  const handlesubmit = () => {
    setDisable(true)
  }
  const setDefValue2 = () => {
    setDefValue(2)
  }
  const radioProps = {
    onClick: handleValue,
    itemStyle: { borderRadius: '5px'},
    itemClass: 'atest',
    disabled: disable,
    datas: customDatas,
    defValue,
  }
  return (
    <React.Fragment>
      <Radio onClick={handleValue} layout={2} />
      <Radio {...radioProps} />
      <button onClick={handlesubmit}>提交</button>
      <button onClick={setDefValue2}>提交</button>
    </React.Fragment>
  )
}

export default Demo