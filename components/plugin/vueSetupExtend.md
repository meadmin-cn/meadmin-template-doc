# vueSetupExtend
 自定义vite插件，方便给vue `<script setup>` 标签语法设置自定义属性,文件位置位于 `plugin\vueSetupExtend.ts`。

## 快速开始

`vite.config.ts`
```
import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetUpExtend from './plugin/vueSetupExtend';

export default defineConfig({
  plugins: [vue(), vueSetupExtend({
    exclude: ['steup', 'lang'],
    setLangImport: true,
    setComponents: true
  })],
})

```

## 规则

::: warning 注意
当代码中存在`<script lang="ts>`标签时，插件不会执行
:::

```
 <script lang="ts" setup name="App" auth="{{'type'+(3+4)}}" >
  const test = 1
</script>
 ```
 会生成
 ```
<script lang="ts>
  import { defineComponent } from 'vue';
  export default defineComponent({name:'App',auth:'type'+(3+4)});
</script>
 <script lang="ts" setup>
  const test = 1
</script>
 ```

 ## 配置参数


|  config     | 类型 |说明|
| ----------- | ----------- | ----------- | 
| exclude | string[] | 需要排除的attribute |
| setLangImport | boolean | 为true时会自动提取`<script setup lang="ts">`中形如`useLocalesI18n({}, [(locale: string) => import(`./lang/${locale}.json`), 'compnentLang'])`的语言加载函数设置为`langImport`属性 |
| setComponents | boolean | 为true时会自动生成getComponents属性,值为：`()=>[component1,component2...]`。可用其获取所有引用的组件 |

config默认值为:`{ exclude: ['lang', 'setup'] }`