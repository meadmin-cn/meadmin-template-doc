# MeKeepAlive

vue 官方的KeepAlive缓存只支持按组件名筛选过滤，这里自定义了MeKeepAlive组件,在KeepAlive的前提下增加了组件key过滤条件,其余规范和功能和KeepAlive组件一致，KeepAlive官方说明[KeepAlive](https://cn.vuejs.org/guide/built-ins/keep-alive.html)

## 组件props

| props      | 类型 |说明|
| ----------- | ----------- | ----------- |
| max       | number | 限制最大缓存实例数 |
| include      | 以英文逗号分隔的字符串、一个正则表达式，或是包含这两种类型的一个数组 | 过滤组件名白名单 |
| exclude    | 以英文逗号分隔的字符串、一个正则表达式，或是包含这两种类型的一个数组     | 过滤组件名黑名单 |
| includeKey      | 以英文逗号分隔的字符串、一个正则表达式，或是包含这两种类型的一个数组 | 过滤组件key白名单 |
| excludeKey    | 以英文逗号分隔的字符串、一个正则表达式，或是包含这两种类型的一个数组     | 过滤组件key黑名单 |

## 使用演示

这里只样式includeKey、excludeKey其余说明参考[KeepAlive](https://cn.vuejs.org/guide/built-ins/keep-alive.html)
```
<me-keep-alive includeKey="a,b">
  <component :is="view" key="a" />
  <component :is="view" key="b" />
  <component :is="view" key="c" />
</me-keep-alive>
```
```
<me-keep-alive excludeKey="c">
  <component :is="view" key="a" />
  <component :is="view" key="b" />
  <component :is="view" key="c" />
</me-keep-alive>
```

## 局限性

因为vue编译模板时对`KeepAlive` `tagName`做了特殊处理,当`MeKeepAlive`和`Transition`组件、`TransitionGroup`配合使用使用时，只能用渲染函数的方式使用，在`Vue 的单文件组件 (即 *.vue 文件)`中请使用`KeepAlive`组件。

### `Transition`+渲染函数使用示例

```
import { Transition } from 'vue';
const transitionProps={};
const meKeepAlivenProps={};
h(Transition, transitionProps, { 
  default: () => h(MeKeepAlive, meKeepAlivenProps, [componentOptions])
})
```