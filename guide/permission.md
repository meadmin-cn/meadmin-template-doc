# 权限

## 初始化权限

当登录成功或刷新页面后，会请求`/api/user/info`接口获取权限，相关代码在`@/store/modules/user.ts`中,`rules`值为用户具有的权限数组，格式为`string[]`。
``` ts
// 初始化
init: async function (tokenValue?: string) {
    const token = tokenValue ?? cookies.get(config.tokenName);
    if (token) {
    this.token = token;
    this.user = await userInfoApi(true)();
    this.rules = this.user.rules;
    useRouteStore()
        .generateRoutes()
        .forEach((route) => router.addRoute(route));
    } else {
    this.token = '';
    }
},
```

## 路由权限校验

初始化完权限后，根据获取到的权限动态过滤`asyncRoutes`,并注册过滤后的路由，过滤规则参考[路由权限](/guide/route.md#路由权限)

## 按钮权限校验

权限校验函数为permission(rules?: string | string[])，当入参为数组时，匹配成功数组中的任意一个权限则返回true。

通过v-if指令和permission函数配合进行按钮权限校验(未进行封装指令的原因是，指令方式对服务端渲染不友好，建议使用v-if判断)。

- 通过全局函数$permission()校验权限
``` vue
    <el-button v-if="$permission('edit')">{{ $t('编辑') }}</el-button>

```
- 引入 permission()函数校验
  
``` vue
<template>
  <div class="permission">
    <el-button v-if="permission('show')">{{ $t('查看') }}</el-button>
  </div>
</template>
<script setup lang="ts" name="permission">
import { permission } from '@/utils/permission';
</script>
```

## 超管权限

当初始化权限时拿到的`rules`数组包含'*'时，代表具有所有权限，权限permission函数会必定返回`true`