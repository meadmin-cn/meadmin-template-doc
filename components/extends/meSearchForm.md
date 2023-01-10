# 查询表单
组件名`meSearchForm`，对[elment-plus from](https://element-plus.org/zh-CN/component/form.html)组件的封装，在保留原有功能的情况下，扩展了收起展开、查询、重置功能，并且保留`elment-plus table`的 `props` 和 `emit` `type`提示。

::: warning 注意
- 扩展组件只存在`完整版`中，`基础模板`中不含有，如果想在基础模板中使用，请将对应文件粘贴到代码中使用。
- 当前组件位置`@/components/meSearchForm`。
:::

## 组件props

| props      | 类型 |说明|必填|
| ----------- | ----------- | ----------- | ----------- |
| inline | boolean | 默认值为`true`,行内表单模式 | 否 |
| defaultAll | boolean | 默认值为`false` ，默认展开所有筛选  | 否 |
| searchText | string | 默认值为'查询' 查询按钮文案，当值为`undefined`时不展示查询按钮 | 否 |
| resetText |  string | 默认值为'重置' 重置按钮文案，当值为`undefined`时不展示重置按钮 | 否 |
| elForm的属性 | - | 支持element-plus  Form组件 的所有属性，请参考[elForm文档](https://element-plus.org/zh-CN/component/form.html#form-%E5%B1%9E%E6%80%A7)| - | 

## 组件事件

| emit      | 类型 |说明|必填|
| ----------- | ----------- | ----------- | ----------- |
| search | `() => void` | 查询事件 | - |
| reset | `() => void` | 重置事件,不绑定重置事件时，点击重置按钮会调用 `elFormRef.resetFields()`| - |
| elForm的事件 | - | 支持element-plus  Form组件的所有事件，请参考[elForm文档](https://element-plus.org/zh-CN/component/form.html#form-%E4%BA%8B%E4%BB%B6)| - | 

## 插槽
| 插槽名  |	说明  |	子标签 |
| ----------- | ----------- | ----------- |
| - | 自定义默认内容。和[elForm](https://element-plus.org/zh-CN/component/form.html#form-%E6%8F%92%E6%A7%BD)对应插槽功能一致。 | FormItem |
| more | 展开/收起 按钮控制显隐的内容(通过v-show控制),不存在当前插槽时不展示更多按钮 | FormItem |
| button | 尾部按钮 | - |


## 组件属性/方法
| 名称 | 类型 | 说明 |
| ----------- | ----------- | ----------- |
| elFormRef | FormInstance | `elForm` 的 `ref`引用，可通过其访问`elForm`的属性和方法 |
