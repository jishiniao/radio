# ui-radio

[NPM Download](https://www.npmjs.com/package/ui-radio) [Github Download](https://github.com/jishiniao/radio)

ui-radio is a react component: for instead of html radio element, enhance disabled property and extend html radio element's properties. new properties includs:
* datas
* defValue
* layout

## Installation

Install the radio in your project with npm or yarn:

```shell
$ npm install ui-radio
//or
$ yarn add ui-radio
```

## Basic Usage

use es6 import module, and then use, like this:

```javascript
import Radio from 'ui-radio'
// eg1
<Radio onClick={fun} />
// eg2
<Radio onClick={fun} disabled={boolean} datas={arrayData} defValue={stringOrNumber} />
```

## Parameters

| Name      | Type   | IsRequired | Description |
| --------- | ------ | ---------- | ----------- |
| `onClick`| function  | yes  | callback: return an object of parameter datas |
| `datas`   | array  | no        | such as `[{name:'单选1',value:1},{name:'单选2',value:2},{name:'单选3',value:3}]` |
| `defValue`| string or number  | no  | `datas`'s any value, default value is 1 |
| `layout`| number  | no  | 1 show horizontal radios style, 2 show Vertical radios style |

### Parameter: datas

Parameter datas have default value, like this:
```
[
  {
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
]
```

when you fill `datds` parameter with your data, radio component render a new radios group. `datds` parameter is an array, every array element is an object. If you create a simple radio group, an object includs the following properties:

| Name      | Type   | IsRequired | Description |
| --------- | ------ | ---------- | ----------- |
| `value` | string or number | yes |  form value data |
| `name` | string | yes |  radio name |
| `icon` | string | no | define radio's icon img, at present, there are these values: `alipay`, `wechat` |
| `spaceRight` | string | no | radio space between |

#### a simple radio group's datas, as following:
```
[
  {
    name: '按钮1',
    value: 's1',
  },
  {
    name: '按钮2',
    value: 's2',
  },
]
```

You can create a complex radio group, an object includs the following properties:

| Name      | Type   | IsRequired | Description |
| --------- | ------ | ---------- | ----------- |
| `value` | string or number | yes | form value data |
| `children` | node | yes | react component or html code |

#### a complex radio group's datas, as following:
```
[
  {
    children: <div>按钮1，<span>iuiui</span></div>,
    value: 1,
  },
  {
    children: '按钮2',
    value: 2,
  },
]
```
