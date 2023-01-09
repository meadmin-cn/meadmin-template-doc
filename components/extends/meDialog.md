# Dialog 对话框
组件名`MeDialog`，对[elment-plus dialog](https://element-plus.org/zh-CN/component/dialog.html)组件的封装，在保留原有功能的情况下，扩展了最大化/还原、拖动大小、样式调整自动滚动条、可移动功能，并且保留`elment-plus dialog`的 `props` 和 `emit` `type`提示。

::: warning 注意
- 扩展组件只存在`完整版`中，`基础模板`中不含有，如果想在基础模板中使用，请将对应文件粘贴到代码中使用。
- 当前组件位置`@/components/meDialog`。
:::

## 组件props

| props      | 类型 |说明|必填|
| ----------- | ----------- | ----------- | ----------- |
| full | boolean | 名称默认值为`true`,是否启用最大化/还原、拖动大小、可移动功能 | 否 |
| maxHeight | boolean | 名称默认值为`60vh`,弹窗最大高度 | 否 |
| elDialog的属性 | - | 支持element-plus  Dialog组件 的所有属性，请参考[elDialog文档](https://element-plus.org/zh-CN/component/dialog.html#%E5%B1%9E%E6%80%A7)| - | 

## 组件事件
| emit      | 格式 |说明|
| ----------- | ----------- | ----------- |
| elDialog的事件 | - | 支持element-plus  Dialog组件 的所有事件，请参考[elDialog文档](https://element-plus.org/zh-CN/component/dialog.html#%E4%BA%8B%E4%BB%B6)| - |

## 组件插槽

| 插槽名  |	说明  |	子标签 |
| ----------- | ----------- | ----------- |
| - | Dialog 的内容,和[elDialog](https://element-plus.org/zh-CN/component/dialog.html#%E6%8F%92%E6%A7%BD)对应插槽功能一致。| - |
| header | 对话框标题的内容；会替换标题部分，但不会移除关闭按钮。和[elDialog](https://element-plus.org/zh-CN/component/dialog.html#%E6%8F%92%E6%A7%BD)对应插槽功能一致。|	— |
| title	| 与 header 作用相同 请使用 header,和[elDialog](https://element-plus.org/zh-CN/component/dialog.html#%E6%8F%92%E6%A7%BD)对应插槽功能一致。|	— |
| footer | Dialog 按钮操作区的内容,和[elDialog](https://element-plus.org/zh-CN/component/dialog.html#%E6%8F%92%E6%A7%BD)对应插槽功能一致。| — |

![](/meDialog.png)