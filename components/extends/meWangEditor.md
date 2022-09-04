# meWangEditor
集成了[WangEditor](https://www.wangeditor.com/v5/getting-started.html),编辑器默认高度为`500px`可通过样式直接覆盖更改,详细说明请参考[WangEditor 文档](https://www.wangeditor.com/v5/getting-started.html)和[用于Vue3](https://www.wangeditor.com/v5/for-frame.html#vue3)。

::: warning 注意
- 扩展组件只存在`完整版`中，`基础模板`中不含有，如果想在基础模板中使用，请将对应文件粘贴到代码中使用。
- 当前组件位置`@/components/meWangEditor`
:::

## 组件props

| props      | 类型 |说明|必填|
| ----------- | ----------- | ----------- | ----------- |
| mode      | 'simple' \| 'default' | 模式，默认值为`default`。 'default'默认模式，集成了 wangEditor 所有功能。 'simple'简洁模式，仅有部分常见功能，但更加简洁易用|否|
| config      | `{ toolbar?: Partial<IToolbarConfig>; editor?: Partial<IEditorConfig> }` | wangeditor配置，默认值为`{}`。toolbar为[工具栏配置](https://www.wangeditor.com/v5/toolbar-config.html)对象， editor为[编辑器配置](https://www.wangeditor.com/v5/editor-config.html)和[菜单配置](https://www.wangeditor.com/v5/menu-config.html)对象。|否|
| modelValue(v-model) | string | 非格式化的 html内容 |是|
| defaultContent | SlateDescendant[](editor.children 获取的内容) | 编辑器默认内容,默认值为`[]`,参考[设置-json](https://www.wangeditor.com/v5/content.html#%E8%AE%BE%E7%BD%AE-json) |否|
| defaultHtml | string | 默认html内容，默认值为`''`,为空时编辑器会使用`v-model`绑定的值。参考[设置-html](https://www.wangeditor.com/v5/content.html#%E8%AE%BE%E7%BD%AE-html) | 否|


## 组件事件

| emit      | 格式 |说明|
| ----------- | ----------- | ----------- |
| onCreated | (editor: IDomEditor) =>void | 编辑器创建完毕时的回调函数。参考[onCreated](https://www.wangeditor.com/v5/editor-config.html#oncreated) |
| onChange | (editor: IDomEditor) =>void | 编辑器内容、选区变化时的回调函数。参考[onChange](https://www.wangeditor.com/v5/editor-config.html#onchange) |
| onDestroyed | (editor: IDomEditor) =>void | 编辑器销毁时的回调函数。参考[onDestroyed](https://www.wangeditor.com/v5/editor-config.html#ondestroyed) |
| onMaxLength | (editor: IDomEditor) =>void | 配置编辑器的 maxlength。参考[maxLength onMaxLength](https://www.wangeditor.com/v5/editor-config.html#maxlength-onmaxlength) |
| onFocus | (editor: IDomEditor) =>void | 编辑器 focus 时的回调函数。参考[onFocus](https://www.wangeditor.com/v5/editor-config.html#onfocus) |
| onBlur | (editor: IDomEditor) =>void | 编辑器 blur 时的回调函数。参考[onBlur](https://www.wangeditor.com/v5/editor-config.html#onblur) |
| customAlert | (s: string, t: string) =>void | 自定义编辑器 alert 。如想用 antd 的 message 功能。参考[customAlert](https://www.wangeditor.com/v5/editor-config.html#customalert) |
| customPaste | (editor: IDomEditor, event: ClipboardEvent,(val: boolean) => { res = val})=>void | 自定义粘贴。可阻止编辑器的默认粘贴，实现自己的粘贴逻辑。参考[customPaste](https://www.wangeditor.com/v5/editor-config.html#custompaste)和[wangEditor-for-vue3](https://github.com/wangeditor-team/wangEditor-for-vue3/blob/main/src/components/Editor.vue) |

::: warning 注意
注意上述组件事件，必须通过 Vue 事件来传递，不可以放在 `config.editor` 中
:::

## 示例

```vue
<template>
  <div>
    <me-wang-editor v-model="html" :config="config"></me-wang-editor>
  </div>
</template>
<script setup lang="ts" name="WangEditor">
const html = ref('<p>hello word!</p>');
const config = {
  editor: {
    maxLength: 1000,
    ['MENU_CONF']: {
      uploadImage: {
        // 小于该值就插入 base64 格式（而不上传），默认为 0
        base64LimitSize: 2 * 1024 * 1024, // 5mb
      },
    },
  },
};
</script>
```