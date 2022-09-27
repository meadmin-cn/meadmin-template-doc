# 预览图片
将 `element-plus` 的 `ElImageViewer` 组件函数化，可通过服务方式调用。

::: warning 注意
- 扩展组件只存在`完整版`中，`基础模板`中不含有，如果想在基础模板中使用，请将对应文件粘贴到代码中使用。
- 当前组件位置`@/components/service/meImageViewer.ts`
- 服务式组件只能通过服务方式调用
:::

## 组件props

| props      | 类型 |说明|必填|
| ----------- | ----------- | ----------- | ----------- |
| urlList	  | string[] | 用于预览的图片链接列表，默认为[]|否|
| zIndex      | number \| string | 预览时遮罩层的 z-index |否|
| initialIndex | number | 初始预览图像索引，小于 urlList 的长度,默认为0 |否|
| infinite | boolean | 是否可以无限循环预览，默认为true |否|
| hideOnClickModal	 | boolean | 是否可以通过点击遮罩层关闭预览,默认为false | 否|
|teleported| boolean | image 自身是否插入至 body 元素上。嵌套的父元素属性会发生修改时应该将此属性设置为 true，默认为fale| 否 |
|onClose | ()=>void| 当点击 X 按钮或者在hideOnClickModal为 true 时点击遮罩层时触发 | 否|
|onSwitch | (index: number) => void| 切换图像时触发。 | 否 |

## 使用示例

```ts
import { createImageViewer } from '@/components/service/meImageViewer';

createImageViewer({
urlList: [
    'https://scpic.chinaz.net/Files/pic/pic6/pic1281.jpg',
    'https://scpic.chinaz.net/files/pic/pic9/202009/apic27858.jpg',
    'https://tse3-mm.cn.bing.net/th/id/OIP-C.n0_p3rYRuofABd3XudbZnAHaEo?pid=ImgDet&rs=1',
],
});
```