# ```setup```标签语法设置自定义属性

::: warning 注意 
当代码中存在```<script lang="ts"> ```标签时，插件不会执行 
:::

```
 <script lang="ts" setup name="App" auth="{{'type'+(3+4)}}" >
  const test = 1
</script>
```
会生成
```
<script lang="ts">
 import { defineComponent } from 'vue';
 export default defineComponent({name:'App',auth:'type'+(3+4)});
</script>
<script lang="ts" setup>
 const test = 1
</script>
```