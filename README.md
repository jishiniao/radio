# ui-radio

[NPM Download](https://www.npmjs.com/package/ui-radio)

ui-radio is a react component: for instead of html radio element, and extend html radio element's properties. new properties includs:
* datas
* defValue

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
| `datas`   | array  | yes        | such as `[{name:'单选1',value:1},{name:'单选2',value:2},{name:'单选3',value:3}]` |
| `onClick`| function  | yes  | callback |
| `defValue`| string or number  | no  | `datas`'s any value, default value is 1 |
| `sort`| number  | no  | 1 show horizontal radios style, 2 show Vertical radios style |

### Parameters one object of datas

## examples
