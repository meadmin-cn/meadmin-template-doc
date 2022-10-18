# 组件自动加载
组件自动加载功能基于[vite-plugin-autogeneration-import-file](https://github.com/yuntian001/vite-plugin-autogeneration-import-file)、[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)插件实现，相关配置说明请参考对应文档
## elment-plus组件自动引入
直接在vue文件中使用elment-plus组件，编译时会自动按需引入。
使用示例：
```
<template>
  <el-dropdown class="me-size-select" trigger="click" max-height="500px">
    <div class="flex-center pointer">
      <me-icon-size class="icon"></me-icon-size>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in SizeEnum"
          :key="item"
          :disabled="themeConfig.size === item"
          @click="themeConfig.size = item"
          >{{ $t(item) }}</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts" name="meSize">
import { SizeEnum } from '@/enums/configEnum';
import { useSettingStore } from '@/store';
const { themeConfig } = useSettingStore();
</script>
<style lang="scss" scoped>
.me-size-select {
  .flex-center {
    padding: 0 10px;

    .icon {
      font-size: 1.2em;
    }
  }
}
</style>
```
## 公共组件自动按需引入
- 在`@/components`文件夹下符合`['*.vue', '**/index.{vue,ts}']` `glob`规则的文件会被自动识别为公共组件，在使用时可直接使用，编译时会自动引入，组件名规则为相对于`@/components`并去除结尾的(index、Index)的大驼峰名称，最终名称可去类型声明文件中确认。
- 公共组件会自动创建类型声明，类型声明文件位于`types/components.d.ts`。

使用示例
```
<template>
  <div class="header">
    <me-dark-switch v-if="themeConfig.showDark"></me-dark-switch>
    <me-size-select v-if="themeConfig.showSize"></me-size-select>
    <me-locale-select v-if="localeConfig.localeList.length > 1"></me-locale-select>
  </div>
</template>
<script setup lang="ts" name="Header">
import { localeConfig } from '@/config';
import { useSettingStore } from '@/store';
const { themeConfig } = useSettingStore();
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 12px;
}
</style>
```