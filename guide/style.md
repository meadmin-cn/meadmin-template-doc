# 样式
本系统样式采用的 [sass](https://www.sass.hk/)，建议全局样式和变量放在 公共样式文件夹 中，组件样式写在各自组件的`<style lang="scss" scoped>`标签中，请提前了解
[sass](https://www.sass.hk/) 和 [vue css](https://cn.vuejs.org/api/sfc-css-features.html)文档

## 公共样式文件夹
```
├── src  
|   ├── styles 公共样式文件
│   │   ├── element-plus.scss element-plus覆盖样式
│   │   ├── index.scss 全局样式
│   │   ├── transition.scss 动画样式
│   │   └── variables.scss  sass变量
```

## sass变量
sass 变量位于 `src/styles/variables.scss`文件中，已用`vite`的`css.preprocessorOptions.scss.additionalData`配置项自动引入，`vue`的模板中可直接使用

### 使用示例

```
<style lang="scss" scoped>
.main {
  padding: $page-padding;
}
</style>
```

## size切换

为了实现size 的切换功能，做了以下更改

- 修改large、small下的--el-font-size-base，代码位置位于`src/styles/element-plus.scss`

``` scss
.me-large {
  //这里强制将font-size-base设置为large
  --el-font-size-base: var(--el-font-size-large);
}
.me-small {
  //这里强制将font-size-base设置为small
  --el-font-size-base: var(--el-font-size-small);
}
```

- 不同size下 html基础`font-size`不同,代码位置位于`src/styles/index.scss`

``` scss
.me-large {
  font-size: var(--el-font-size-base);
}

.me-default {
  font-size: var(--el-font-size-base);
}

.me-small {
  font-size: var(--el-font-size-small);
}
```
- 将`font-size`的值由`px`自动转化为`rem`,实现代码位于`vite.config.ts`
``` ts
postcss: {
    plugins: [
        autoprefixer,
        px2rem({
        rootValue: 14, //换算基数，将 px 替换为 1/rootValue rem (即设计图下的fontSize)
        // unitPrecision: 5, //允许REM单位增长到的十进制数字。
        propWhiteList: ['font-size'], //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
        // propBlackList: ['font-size', 'border'], //不应从 px 更改为 rem 的属性
        exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
        // selectorBlackList: [], //要忽略并保留为px的选择器
        // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
        // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
        mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
        minPixelValue: 2, //设置要替换的最小像素值(包含)。 默认 0
        }),
    ],
},
```