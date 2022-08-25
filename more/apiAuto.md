# api自动引入

基于[unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)的api自动引入，支持`vue` `vue-router` `pinia` `@vueuse/core`更多说明参考[unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)文档

配置代码位置`vite.config.ts` 
``` ts
AutoImport({
    // 自动加载API
    imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
    // 可以选择auto-imports.d.ts生成的位置，使用ts建议设置为'src/auto-imports.d.ts'
    dts: 'types/auto-imports.d.ts',
    resolvers: [ElementPlusResolver()],
}),
```

**无需**

``` ts
import { computed, ref } from 'vue'
const count = ref(0)
const doubled = computed(() => count.value * 2)
```

**直接**

``` ts
const count = ref(0)
const doubled = computed(() => count.value * 2)
```