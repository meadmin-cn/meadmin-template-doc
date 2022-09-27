# 常见问题

## 如何配置浏览器兼容性
浏览器兼容性基于`babel`实现，Babel 是一个工具链，主要用于在当前和旧的浏览器或环境中，将 ECMAScript 2015+ 代码转换为 JavaScript 向后兼容版本的代码。本项目是用`@rollup/plugin-babel`设置的兼容性，配置位置为`vite.coinfig.ts`
```
babel({
babelrc: false,
extensions: ['.ts', '.tsx'],
plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]],
presets: [
    [
    '@babel/preset-env',
    {
        targets: ['chrome 87', 'safari 13', 'firefox 78', 'edge 88'],
        useBuiltIns: 'usage',
        bugfixes: true,
        loose: false,
        modules: false,
        corejs: createRequire(import.meta.url)('core-js/package.json').version,
        shippedProposals: true,
        ignoreBrowserslistConfig: true,
    },
    ],
],
exclude: 'node_modules/**',
babelHelpers: 'runtime',
}),
```
如果想更改兼容性版本，直接更改targets数组即可，更多说明请参考[babel文档](https://babel.docschina.org/docs/en/babel-preset-env/#targets)

## 首次启动特别慢是为什么
首次启动时vite会扫描src里面引用到的包进行缓存，所以第一次启动会特别慢，之后再次启动因为包已经被缓存了就会很快。

如果想让首次启动加快 可以注释掉`vite.coinfig.ts`的以下代码:
```
    entries: ['./src/**/*.{ts,tsx,vue}'],
```
这样首次启动只寻找核心包进行缓存，但首次进入每个页面后会对页面所引用的包进行缓存，导致进入页面的时间变慢
