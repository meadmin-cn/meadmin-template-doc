# 服务方式调用组件

本系统支持服务方式调用任意组件，主要方便以函数方式打开新增、编辑弹窗等组件。所有的背服务方式调用的组件都会背渲染到body下。

## 调用示例

### 声明组件

示例文件位置：`src/views/example/service/components/add.vue`

```vue
<template>
  <el-dialog v-model="show" @closed="$emit('closed')">
    <div>这是测试弹窗 <el-button @click="add()"> 再次打开弹窗 </el-button></div>
  </el-dialog>
</template>

<script setup lang="ts" name="Add">
import add from './add';
const show = defineModel<boolean>('show');
defineEmits<{ closed: [] }>();
</script>
```

### 声明调用函数

示例文件位置: `src/views/example/service/components/add.ts`

```vue
import { useGlobalStore } from '@/store';
import Add from './add.vue';
export default async (props: Omit<ComponentProps<typeof Add>, 'show'> = {}) => {
  const show = ref(true);
  const globalStore = useGlobalStore();
  const key = globalStore.addGlobalComponents(
    Add,
    computed(() => ({
      show: show.value,
      ...props,
      ['onUpdate:show']: (value: boolean) => {
        show.value = value;
      },
      onClosed: () => {
        globalStore.removeGlobalComponents(key); //关闭时移除当前组件
        props.onClosed && props.onClosed();
      },
    })),
  );
  await nextTick();
  return key;
};
```

### 以函数方式调用
```ts
import add from './add';
add();
```

## 注意事项
- 在合适的时机(如弹窗关闭时)调用`globalStore.removeGlobalComponents(key)`移除组件。

## 原理说明

服务调用方式采用将被调用组件放入全局store中，在`app.vue`中动态获取渲染的方式实现。
未使用类似于`meImageViewer`这种服务式组件由`h`函数动态创建然后绑定到当前vue示例的原因，是`h`函数动态创建的组件使用`vue-devtools`调试时无法追寻父级，不方便调试，调试模式下不容易被选取。




