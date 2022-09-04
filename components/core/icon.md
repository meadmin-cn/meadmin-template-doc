# 图标

## 自定义svg图标

svg图标的存放目录为`@/src/icons/svg`，该文件夹下.svg结尾的文件会被自动注册为图标组件，组件名为`me-icon-{name}`

## 使用elment-plus图标
elment-plus图标默认已全局注册，注册组件名为`mel-icon-{name}`,elment-plus图标完整列表请参考[elment-plus文档](https://element-plus.org/zh-CN/component/icon.html#%E5%9B%BE%E6%A0%87%E9%9B%86%E5%90%88)

## 组件props

图标组件接受两个props：size、color
| props      | 类型 |说明|
| ----------- | ----------- | ----------- |
| size      | string/number | 图标的fontSize |
| color   | string        | 图标的color属性 |