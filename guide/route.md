# 路由菜单

这里的路由分为两种，constantRoutes 和 asyncRoutes。

constantRoutes： 代表那些不需要动态判断权限的路由，如登录页、404、等通用页面。

asyncRoutes： 代表那些需求动态判断权限并通过 addRoutes 动态添加的页面。

## 静态路由(constantRoutes)

静态路由定义位于`@/router/routes/index.ts`文件下，除了不经过权限过滤外其余规则和[**动态路由定义**](#动态路由定义)规则一样

## 动态路由(asyncRoutes)

- **动态定义分为前端定义、通过api接口获取两种。**
- **动态路由会经过权限过滤后动态注册到vue-router中。**
- **动态路由注册时会自动注册到一级路由`/`的children下,这样菜单路由只有一级也可以渲染出layout框架**


路由功能基于[vue-router](https://router.vuejs.org/zh/introduction.html)开发,自定义配置放在了[meta](#meta配置说明)中,其余定义规则参考[vue-router#routerecordraw](https://router.vuejs.org/zh/api/#routerecordraw)。

### 动态路由前端定义模式

将`settingConfig.menuMode`(位于`@/config/index.ts`文件中)设置为`MenuModeEnum.STATIC`，将使用前端定义模式。

在前端定义模式下，`@/router/routes`文件夹下的所有.ts文件会被自动加载并经过权限过滤后动态注册到vue-router中。
::: warning 注意
- 只会动态注册`@/router/routes`文件夹下的.ts文件 不会注册其子文件夹的.ts文件。
- 路由注册顺序会根据文件名按**字符串顺序**进行注册，建议文件命名时加上`数字-`前缀以明确菜单顺序。
- 默认只有一个children的菜单会省略父级菜单。
- component说明：目录路由使用`Layout`,最低级路由使用自己的view组件。
:::

#### 定义示例
- **单文件路由注册示例**

1. 二级路由示例
```ts
import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
export const routes: RouteRecordRaw[] = [
  {
    path: '/example',
    component: Layout,
    children: [
      {
        path: '/example/test',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: 'test示例'},
      },
    ],
    meta: { title: '示例', icon: 'mel-icon-promotion' },
  },
];
```   
2. 多级路由示例
```ts
import { RouteRecordRaw, RouterView } from 'vue-router';
import { Layout } from '@/router/constant';
export const routes: RouteRecordRaw[] = [
  {
    path: '/example',
    component: Layout,
    children: [
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
    ],
    meta: { title: '示例', icon: 'mel-icon-promotion' },
  },
];
```

- **文件+文件夹组合注册示例**
  
父级路由`@/router/routes/example.ts`
```ts
import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
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
```ts
import { RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
  {
    path: '/example/test',
    component: () => import('@/views/dashboard/index.vue'),
    meta: { title: 'test示例'},
  },
];
```
### 动态路由api获取模式

将`settingConfig.menuMode`(位于`@/config/index.ts`文件中)设置为`MenuModeEnum.API`，将使用api模式。

在api模式下，登录成功后或者已登录首次访问时，会通过调用接口获取菜单数组，经权限过滤后动态注册到vue-router中。

#### api调用代码
```ts
//src/store/modules/route.ts
async generateRoutes() {
  if (useUserStore().rules) {
    switch (settingConfig.menuMode) {
      case MenuModeEnum.STATIC:
        this.addRoutes = markRaw(filterAsyncRoutes(asyncRoutes));
        break;
      case MenuModeEnum.API://代表api模式
        initDynamicViewsModules();//注册视图文件modules
        this.addRoutes = markRaw(filterAsyncRoutes(await menuApi()(), undefined, true));//通过接口获取菜单路由定义，可修改menuApi,改为自己的api调用函数。
        break;
    }
  }
  return this.addRoutes;
}
```
```ts
//src/api/routeMenu.ts
//获取路由菜单的api请求定义，可以修改为自己的地址
export function menuApi(returnAxios = true) {
  return request<RouteRecordRaw[], [], typeof returnAxios>(
    () => ({
      url: Api.MENU,
      method: 'get',
    }),
    {},
    returnAxios,
  );
}
```

#### 路由菜单接口返回示例
- 除了`component`为string,其余字段和格式均和路由定义规则相同,详细请参考[vue-router#routerecordraw](https://router.vuejs.org/zh/api/#routerecordraw)。
- 默认只有一个children的菜单会省略父级菜单。
- component说明：目录路由使用`Layout`,最低级路由使用相对于`src/views`目录的相对地址(不可携带后缀，会自动添加.vue、.tsx进行匹配)。

```ts
[
  {
    path: '/index',
    redirect: '/index/index',
    component: 'Layout',
    children: [
      {
        path: 'index',
        component: 'dashboard/index',
        meta: {
          title: '首页',
          affix: true,
          icon: 'me-icon-dashboard',
        },
      },
    ],
    meta: {
      title: '',
    },
  },
  {
    path: '/example',
    component: 'Layout',
    children: [
      {
        path: 'permission',
        component: 'example/permission',
        meta: {
          title: '权限',
        },
      },
      {
        path: 'componentLang',
        component: 'example/componentLang/index',
        meta: {
          title: '组件语言包',
        },
      },
      {
        path: 'request',
        component: 'example/request',
        meta: {
          title: '请求示例',
        },
      },
      {
        path: 'https://github.com/meadmin-cn/meadmin-template',
        component: '404',
        meta: {
          title: '外链',
          isLink: true,
        },
      },
      {
        path: 'pagePermission',
        component: 'example/pagePermission',
        meta: {
          title: '页面权限',
          rule: ['edit'],
        },
      },
      {
        path: 'multilevel',
        component: 'Layout',
        meta: {
          title: '多级菜单',
        },
        children: [
          {
            path: '1',
            component: 'Layout',
            meta: {
              title: '多级菜单1',
            },
            children: [
              {
                path: '1-1',
                component: 'Layout',
                meta: {
                  title: '多级菜单1-1',
                  alwaysShow: true,
                },
                redirect: '/example/multilevel/1/1-1/1-1-1',
                children: [
                  {
                    path: '1-1-1',
                    component: 'dashboard/index',
                    meta: {
                      title: '多级菜单1-1-1',
                    },
                  },
                  {
                    path: '/test/componentLang',
                    component: 'example/componentLang/index',
                    meta: {
                      title: '组件语言包',
                    },
                  },
                ],
              },
              {
                path: '1-2',
                component: 'dashboard/index',
                meta: {
                  title: '多级菜单1-2',
                },
              },
            ],
          },
        ],
      },
    ],
    meta: {
      title: '示例',
      icon: 'mel-icon-promotion',
    },
  },
]

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
    // 是否需要面包屑 false不展示在面包屑,ture一直展示在面包屑,undefined当只有一个子元素面包屑时跳过展示
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


 - 如果想全局禁用keppAlive，去`@/config/index.ts`配置`settingConfig.openKeepAlive`为`false`即可，配置详情参见[config](/guide/config.md#基础配置)。
 - 如需设置某个路由不缓存设置`meta.noCache`值为`true`即可。
