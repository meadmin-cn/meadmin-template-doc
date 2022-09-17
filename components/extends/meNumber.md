# 数字动画

组件名`MeNumber`，数字动画组件，基于[vueuse usetransition](https://vueuse.org/core/usetransition/#usetransition)实现。

::: warning 注意
- 扩展组件只存在`完整版`中，`基础模板`中不含有，如果想在基础模板中使用，请将对应文件粘贴到代码中使用。
- 当前组件位置`@/components/meNumber.vue`
:::

## 组件props

| props      | 类型 |说明|必填|
| ----------- | ----------- | ----------- | ----------- |
| start      | number | 数字动画起始值 默认为0|否|
| end      | number \| [number(结束数字),string(前缀),string(后缀)] | 数字动画结束值 |是|
| delay    | number | 开始动画等待的毫秒数默认为0 |否|
| disabled | boolean | 禁用动画(默认为false) |否|
| duration | number | 动画持续时间毫秒数默认为1000 | 否|
| transition|  EasingFunction \| keyof typeof TransitionPresets  | 动画类型默认为`'easeOutExpo'`，详细说明请参考[vueuse文档](https://vueuse.org/core/usetransition/#type-declarations) | 否 |
|format| (number: number, decimals: number) => string | number |数字格式化函数,number为当前展示数字，decimals为end的小数位数 默认值`(number: number, decimals: number) => formatNumber({ truncate: decimals, padRight: decimals })(number)`，每千分位一个`,`隔开  参考[format-number文档](https://www.npmjs.com/package/format-number)|否|

## 组件事件

| emit      | 格式 |说明|
| ----------- | ----------- | ----------- |
| onFinished | () => void | 转换完成后执行。|
| onStarted | () => void | 转换开始后执行。|

## 示例

```vue
<me-number :end="103256.25"></me-number>
```