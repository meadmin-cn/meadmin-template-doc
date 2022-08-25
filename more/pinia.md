# Pinia使用

Pinia 是 下一代 Vue 的存储库，相关使用说明请参考[Pinia](https://pinia.web3doc.top/introduction.html)文档

## 新建store文件
store存放文件夹为`@/store/modules`，在store文件夹下新建对应store文件，按[Pinia](https://pinia.web3doc.top/introduction.html)规则声明`defineStore`函数并导出为`default`即可

示例：
```
import { filterAsyncRoutes } from '@/utils/permission';
import useUserStore from './user';
import { constantRoutes, asyncRoutes } from '@/router';
import { RouteRecordRaw } from 'vue-router';

export default defineStore('route', {
  state: () => ({
    addRoutes: [] as RouteRecordRaw[],
    noCacheFullPath: [] as Array<string | RegExp>,
  }),
  getters: {
    routes: (state) => constantRoutes.concat(state.addRoutes),
  },
  actions: {
    generateRoutes() {
      if (useUserStore().rules) {
        this.addRoutes = markRaw(filterAsyncRoutes(asyncRoutes));
      }
      return this.addRoutes;
    },
    setNoCache(fullPath: string) {
      if (!this.noCacheFullPath.includes(fullPath)) {
        this.noCacheFullPath.push(fullPath);
      }
    },
    removeNoCache(fullPath: string) {
      const index = this.noCacheFullPath.indexOf(fullPath);
      if (index > -1) {
        this.noCacheFullPath.splice(index, 1);
      }
    },
  },
});

```
## 导出语句自动生成
- 在`@/store/modules`文件夹下符合`['**/*.{ts,js}', '*.{ts,js}']` `glob`规则的文件会在`@/store/module.ts`文件中自动创建对应导出语句

::: tip 说明
此功能基于[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)插件实现,对应配置位于`vite.config.ts`中
:::
```
//当前文件由vite-plugin-autogeneration-import-file自动生成
export { default as useGlobalStore } from "./modules/global"
export { default as useRouteStore } from "./modules/route"
export { default as useSettingStore } from "./modules/setting"
export { default as useUserStore } from "./modules/user"
//code
```
- `@/store/index.ts`文件对`@/store/module.ts`文件进行了二次导出
```
export * from './module';
```
## 使用store
直接导入后使用即可,具体规则请参考[Pinia](https://pinia.web3doc.top/introduction.html)文档
```
import { useUserStore } from '@/store';
const userStore = useUserStore();
```