import{_ as o,r as d,o as r,c as l,a as e,b as i,e as n,d as t}from"./app.43081e59.js";const a={},c=e("h1",{id:"pinia\u4F7F\u7528",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pinia\u4F7F\u7528","aria-hidden":"true"},"#"),n(" Pinia\u4F7F\u7528")],-1),u=n("Pinia \u662F \u4E0B\u4E00\u4EE3 Vue \u7684\u5B58\u50A8\u5E93\uFF0C\u76F8\u5173\u4F7F\u7528\u8BF4\u660E\u8BF7\u53C2\u8003"),v={href:"https://pinia.web3doc.top/introduction.html",target:"_blank",rel:"noopener noreferrer"},m=n("Pinia"),h=n("\u6587\u6863"),_=e("h2",{id:"\u65B0\u5EFAstore\u6587\u4EF6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u65B0\u5EFAstore\u6587\u4EF6","aria-hidden":"true"},"#"),n(" \u65B0\u5EFAstore\u6587\u4EF6")],-1),b=n("store\u5B58\u653E\u6587\u4EF6\u5939\u4E3A"),p=e("code",null,"@/store/modules",-1),f=n("\uFF0C\u5728store\u6587\u4EF6\u5939\u4E0B\u65B0\u5EFA\u5BF9\u5E94store\u6587\u4EF6\uFF0C\u6309"),g={href:"https://pinia.web3doc.top/introduction.html",target:"_blank",rel:"noopener noreferrer"},x=n("Pinia"),R=n("\u89C4\u5219\u58F0\u660E"),P=e("code",null,"defineStore",-1),S=n("\u51FD\u6570\u5E76\u5BFC\u51FA\u4E3A"),k=e("code",null,"default",-1),q=n("\u5373\u53EF"),C=t(`<p>\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { filterAsyncRoutes } from &#39;@/utils/permission&#39;;
import useUserStore from &#39;./user&#39;;
import { constantRoutes, asyncRoutes } from &#39;@/router&#39;;
import { RouteRecordRaw } from &#39;vue-router&#39;;

export default defineStore(&#39;route&#39;, {
  state: () =&gt; ({
    addRoutes: [] as RouteRecordRaw[],
    noCacheFullPath: [] as Array&lt;string | RegExp&gt;,
  }),
  getters: {
    routes: (state) =&gt; constantRoutes.concat(state.addRoutes),
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
      if (index &gt; -1) {
        this.noCacheFullPath.splice(index, 1);
      }
    },
  },
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5BFC\u51FA\u8BED\u53E5\u81EA\u52A8\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u51FA\u8BED\u53E5\u81EA\u52A8\u751F\u6210" aria-hidden="true">#</a> \u5BFC\u51FA\u8BED\u53E5\u81EA\u52A8\u751F\u6210</h2><ul><li>\u5728<code>@/store/modules</code>\u6587\u4EF6\u5939\u4E0B\u7B26\u5408<code>[&#39;**/*.{ts,js}&#39;, &#39;*.{ts,js}&#39;]</code> <code>glob</code>\u89C4\u5219\u7684\u6587\u4EF6\u4F1A\u5728<code>@/store/module.ts</code>\u6587\u4EF6\u4E2D\u81EA\u52A8\u521B\u5EFA\u5BF9\u5E94\u5BFC\u51FA\u8BED\u53E5</li></ul>`,4),w={class:"custom-container tip"},N=e("p",{class:"custom-container-title"},"\u8BF4\u660E",-1),y=n("\u6B64\u529F\u80FD\u57FA\u4E8E"),F={href:"https://github.com/antfu/unplugin-vue-components",target:"_blank",rel:"noopener noreferrer"},U=n("unplugin-vue-components"),V=n("\u63D2\u4EF6\u5B9E\u73B0,\u5BF9\u5E94\u914D\u7F6E\u4F4D\u4E8E"),E=e("code",null,"vite.config.ts",-1),A=n("\u4E2D"),B=t(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u5F53\u524D\u6587\u4EF6\u7531vite-plugin-autogeneration-import-file\u81EA\u52A8\u751F\u6210
export { default as useGlobalStore } from &quot;./modules/global&quot;
export { default as useRouteStore } from &quot;./modules/route&quot;
export { default as useSettingStore } from &quot;./modules/setting&quot;
export { default as useUserStore } from &quot;./modules/user&quot;
//code
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>@/store/index.ts</code>\u6587\u4EF6\u5BF9<code>@/store/module.ts</code>\u6587\u4EF6\u8FDB\u884C\u4E86\u4E8C\u6B21\u5BFC\u51FA</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export * from &#39;./module&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528store" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528store" aria-hidden="true">#</a> \u4F7F\u7528store</h2>`,4),j=n("\u76F4\u63A5\u5BFC\u5165\u540E\u4F7F\u7528\u5373\u53EF,\u5177\u4F53\u89C4\u5219\u8BF7\u53C2\u8003"),I={href:"https://pinia.web3doc.top/introduction.html",target:"_blank",rel:"noopener noreferrer"},L=n("Pinia"),G=n("\u6587\u6863"),O=t(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { useUserStore } from &#39;@/store&#39;;
const userStore = useUserStore();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function T(z,D){const s=d("ExternalLinkIcon");return r(),l("div",null,[c,e("p",null,[u,e("a",v,[m,i(s)]),h]),_,e("p",null,[b,p,f,e("a",g,[x,i(s)]),R,P,S,k,q]),C,e("div",w,[N,e("p",null,[y,e("a",F,[U,i(s)]),V,E,A])]),B,e("p",null,[j,e("a",I,[L,i(s)]),G]),O])}const J=o(a,[["render",T],["__file","pinia.html.vue"]]);export{J as default};
