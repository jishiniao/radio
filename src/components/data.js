import React from 'react'

const baseDatas = [{
    name: '按钮1',
    value: 's1',
  },
  {
    name: '按钮2',
    value: 's2',
  },
]

const customDatas = [
  {
    children: <div>按钮1，<span>iuiui</span></div>,
    value: 1,
  },
  {
    children: '按钮2',
    value: 2,
  },
]

export {
  baseDatas,
  customDatas,
}