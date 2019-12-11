/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'

import Item from './Item'

const Radio = ({
  datas,
  defValue,
  onClick,
  layout,
  disabled,
  itemStyle,
  itemClass,
}) => {
  const [defValue2, setDefValue] = useState(defValue)

  const handleClick = (data) => {
    setDefValue(data.value)
    onClick(data)
  }
  const renderItems = () => {
    return datas.map((data, k) => {
      const {
        icon,
        name,
        value,
        spaceRight,
        children,
      } = data
      const isDef = (data.value == defValue2) ? true : false
      const itemProps = {
        icon,
        name,
        value,
        spaceRight,
        children,
        isDef,
        disabled,
        onClick: () => {
          handleClick(data)
        },
        itemStyle,
        itemClass,
      }
      return <Item key={k} {...itemProps} />
    })
  }
  const HOrV = (layout === 2) ? 'column nowrap' : 'row nowrap'
  const RadioStyle = {
    display: 'flex',
    flexFlow: HOrV,
  }
  useEffect(() => {
    setDefValue(defValue)
  }, [defValue])
  return (
    <div style={RadioStyle}>
      {renderItems()}
    </div>
  )
}

Radio.defaultProps = {
  datas: [{
        name: '支付宝',
        value: 1,
        icon: 'alipay',
      },
      {
        name: '微信支付',
        value: 2,
        icon: 'wechat',
      },
      {
        name: '对公转账',
        value: 3,
        spaceRight: '0',
      }
    ],
    defValue: 1,
    layout: 1,
    disabled: false,
}

export default Radio