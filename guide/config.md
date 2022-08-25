# 配置

## 登录配置

登录后token会储存在在cookie中，可以在配置文件中配置token相关cookie设置

配置文件地址 `@/config/login.ts`
``` ts
export default {
  tokenName: 'auth-token', // cookie中存储的token key
  tokenExpires: 7, // token 过期时间
  tokenDomain: typeof window === 'undefined' ? '' : window.location.hostname, // token 存储cookie域名
};
```

## 主题配置

配置文件地址`@/config/theme.ts`
``` ts
import { SizeEnum } from '@/enums/configEnum';
export default {
  primaryColor: '#409eff', // 主题颜色
  menuBg: '#1d1e1f', // 菜单背景颜色
  menuWidth: '200px', // 菜单展开宽度
  menuCollapse: true, // 菜单是否折叠
  size: SizeEnum.DEFAULT, // 默认大小
  fixedHeader: true, // 固定header
  topBar: true, // 是否显示顶栏
  breadcrumb: true, // 面包屑
  showDark: true, // 开启暗黑模式切换
  showSize: true, // 开启大小切换
  tagBar: true, // 标签栏
  tagBarMenu: true, // 标签栏快捷菜单
  tagBarRefresh: true, // 标签栏刷新按钮
  showSetting: true, // 展示设置按钮
};
```

## 国际化配置

配置文件地址`@/config/locale.ts`

- 语言包异步导入配置
  
``` ts
export const loadMessageConfig = {
// 导入语言包配置
timeOut: 10000, // 导入语言包超时时间ms(对于单次导入而不是整体导入)0代表不超时
errorWarning: false, // 导入失败的警告（生产环境会被屏蔽）
componentLoad: true, // 组件语言包导入 不需要多语言或只使用全局语言包时设置为false以提升性能
};
```
- 语言列表
  
::: warning 注意
locale命名时需要和[element-plus](https://element-plus.gitee.io/zh-CN/guide/i18n.html#cdn-%E7%94%A8%E6%B3%95)的local命名一致，否则无法加载element-plus对应的语言包 
:::

``` ts
export const localeList = [
  {
    text: '简体中文',
    locale: 'zh-cn',
  },
  {
    text: '美国英语',
    locale: 'en',
  },
]
```

- 全局[VueI18n](https://vue-i18n.intlify.dev/api/general.html#i18noptions)初始参数(VueI18n版本基于v9.x)

::: warning 注意
legacy和globalInjection无需设置
程序内部强制把legacy设置为了false、globalInjection设置为了true。
:::

``` ts
const localeSetting: I18nOptions = {
  // Locale
  locale: localeList[0].locale,
  // Default locale
  fallbackLocale: localeList[0].locale,
  missingWarn: false, // 当本地化失败时，压制输出的警告
  fallbackWarn: false, // 抑制回落警告
  fallbackFormat: true, // 跳过为你的"base"语言编写模板;key是您的模板
};
```