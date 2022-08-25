# 路由

这里的路由分为两种，constantRoutes 和 asyncRoutes。

constantRoutes： 代表那些不需要动态判断权限的路由，如登录页、404、等通用页面。

asyncRoutes： 代表那些需求动态判断权限并通过 addRoutes 动态添加的页面。

## 静态路由(constantRoutes)

静态路由定义位于`@/router/routes/index.ts`文件下，除了不经过权限过滤外其余规则和[**动态路由定义**](#动态路由定义)规则一样

## 动态路由定义
asyncRoutes的定义位于`@/router/routes`文件夹下，`@/router/routes`文件夹下的所有.ts文件会被自动加载并经过权限过滤后动态注册到vue-router中。

路由功能基于[vue-router](https://router.vuejs.org/zh/introduction.html)开发自定义配置放在了[meta](#meta配置说明)中,其余定义规则参考[vue-router#routerecordraw](https://router.vuejs.org/zh/api/#routerecordraw)。

::: warning 注意
- 只会动态注册`@/router/routes`文件夹下的.ts文件 不会注册其子文件夹的.ts文件.
- 路由注册顺序会跟进文件名按字符串顺序进行注册，建议文件命名时加上`数字-`前缀以明确菜单顺序
:::

### 定义示例
- **单文件路由注册示例**

```
import { RouteRecordRaw, RouterView } from 'vue-router';
import LayoutPage from '@/layout/components/page.vue';
export const routes: RouteRecordRaw[] = [
  {
    path: '1',
    component: LayoutPage,
    meta: { title: '多级菜单1' },
    children: [
      {
        path: '1-1',
        component: LayoutPage,
        meta: { title: '多级菜单1-1', alwaysShow: true },
        children: [
          {
            path: '1-1-1',
            component: () => import('@/views/dashboard/index.vue'),
            meta: { title: '多级菜单1-1-1' },
          },
          {
            path: '/test/componentLang',
            component: async () => await import('@/views/example/componentLang/index.vue'),
            meta: { title: '组件语言包' },
          },
        ],
      },
      {
        path: '1-2',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '多级菜单1-2' },
      },
    ],
  },
];
```

- **文件+文件夹组合注册示例**
  
父级路由`@/router/routes/example.ts`
```
import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';
import { concatObjectValue } from '@/utils/helper';
export const routes: RouteRecordRaw[] = [
  {
    path: '/example',
    component: Layout,
    children: concatObjectValue<RouteRecordRaw>(import.meta.glob('./example/*.ts', { eager: true, import: 'routes' })),
    meta: { title: '示例', icon: 'mel-icon-promotion' },
  },
];
```
子路由 `@/router/routes/example/1-test.ts`
```
import { RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
  {
    path: '/example',
    component: () => import('@/views/dashboard/index.vue'),
    meta: { title: 'test示例'},
  },
];
```
### Meta配置说明
```
export interface RouteMeta extends Record<string | number | symbol, unknown> {
    // 标题设置该路由在侧边栏和面包屑中展示的名字
    title: string;
    // 对应权限 多个之间为或的关系
    rule?: string[];
    // 是否是固定的tag
    affix?: boolean;
    // 图标
    icon?: string;
    // 在tag中隐藏
    hideTag?: boolean;
    // 外链
    isLink?: boolean;
    // 当路由设置了该属性，则会高亮相对应的侧边栏。
    // 这在某些场景非常有用，比如：一个文章的列表页路由为：/article/list
    // 点击文章进入文章详情页，这时候路由为/article/1，但你想在侧边栏高亮文章列表的路由，就可以进行如下设置
    // asyncRoutes如果不设置会自动计算展示不隐藏的祖级（包括当前）
    activeMenu?: string;
    // 如果设置为true，则不会被 <keep-alive> 缓存
    noCache?: boolean;
    // 在菜单中隐藏
    hideMenu?: boolean;
    // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式
    // 只有一个时，会将那个子路由当做根路由显示在侧边栏
    // 若你想不管路由下面的 children 声明的个数都显示你的根路由
    // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
    alwaysShow?: boolean;
    // 是否需要面包屑false不需要 ture或undefined为需要
    breadcrumb?: boolean;
  }
```

### 外链

将路由的path设置为外链地址 `meta.isLink`设置为`true` 即可设置外链

```
import { RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
  {
    path: 'https://github.com/meadmin-cn/meadmin-template',
    component: async () => await import('@/views/404.vue'),
    meta: { title: '外链', isLink: true },
  },
];
```

### 路由权限

路由权限定义字段为`meta.rule`,`meta.rule`接收一个字符串数组，当用户匹配成功权限数组中的任意一个元素,会注册此路由，不设置`meta.rule`表示，此路由无需权限校验。

```
import { RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
  {
    path: 'pagePermission',
    component: async () => await import('@/views/example/pagePermission.vue'),
    meta: { title: '页面权限', rule: ['edit'] },
  },
];
```

### 菜单图标

菜单图标通过`meta.icon`定义值为图标组件的name,自定义svg图标和使用elment-plus图标请参考[图标](/guide/icon.md)

### keepAlive缓存

页面缓存通过 组件[me-keep-alive](/guide/components/meKeepAlive.md)实现,通过路由的fullPath进行缓存过滤，所以无需对页面组件设置name,即可进行缓存，并且多路由共用同一页面组件时，可以进行独立刷新，互不影响。

keppAlive缓存默认是开启的，如需不缓存设置`meta.noCache`值为`true`即可
