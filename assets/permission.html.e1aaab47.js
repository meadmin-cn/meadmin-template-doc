import{_ as e,r as p,o,c,a as s,b as i,w as u,d as a,e as n}from"./app.43081e59.js";const l={},r=a(`<h1 id="\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u6743\u9650" aria-hidden="true">#</a> \u6743\u9650</h1><h2 id="\u521D\u59CB\u5316\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u6743\u9650" aria-hidden="true">#</a> \u521D\u59CB\u5316\u6743\u9650</h2><p>\u5F53\u767B\u5F55\u6210\u529F\u6216\u5237\u65B0\u9875\u9762\u540E\uFF0C\u4F1A\u8BF7\u6C42<code>/api/user/info</code>\u63A5\u53E3\u83B7\u53D6\u6743\u9650\uFF0C\u76F8\u5173\u4EE3\u7801\u5728<code>@/store/modules/user.ts</code>\u4E2D,<code>rules</code>\u503C\u4E3A\u7528\u6237\u5177\u6709\u7684\u6743\u9650\u6570\u7EC4\uFF0C\u683C\u5F0F\u4E3A<code>string[]</code>\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u521D\u59CB\u5316</span>
<span class="token function-variable function">init</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>tokenValue<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> token <span class="token operator">=</span> tokenValue <span class="token operator">??</span> cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>tokenName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>token <span class="token operator">=</span> token<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>user <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">userInfoApi</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>rules <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>user<span class="token punctuation">.</span>rules<span class="token punctuation">;</span>
    <span class="token function">useRouteStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">generateRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> router<span class="token punctuation">.</span><span class="token function">addRoute</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>token <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8DEF\u7531\u6743\u9650\u6821\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u6743\u9650\u6821\u9A8C" aria-hidden="true">#</a> \u8DEF\u7531\u6743\u9650\u6821\u9A8C</h2>`,5),k=n("\u521D\u59CB\u5316\u5B8C\u6743\u9650\u540E\uFF0C\u6839\u636E\u83B7\u53D6\u5230\u7684\u6743\u9650\u52A8\u6001\u8FC7\u6EE4"),d=s("code",null,"asyncRoutes",-1),v=n(",\u5E76\u6CE8\u518C\u8FC7\u6EE4\u540E\u7684\u8DEF\u7531\uFF0C\u8FC7\u6EE4\u89C4\u5219\u53C2\u8003"),m=n("\u8DEF\u7531\u6743\u9650"),g=a(`<h2 id="\u6309\u94AE\u6743\u9650\u6821\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u6309\u94AE\u6743\u9650\u6821\u9A8C" aria-hidden="true">#</a> \u6309\u94AE\u6743\u9650\u6821\u9A8C</h2><p>\u6743\u9650\u6821\u9A8C\u51FD\u6570\u4E3Apermission(rules?: string | string[])\uFF0C\u5F53\u5165\u53C2\u4E3A\u6570\u7EC4\u65F6\uFF0C\u5339\u914D\u6210\u529F\u6570\u7EC4\u4E2D\u7684\u4EFB\u610F\u4E00\u4E2A\u6743\u9650\u5219\u8FD4\u56DEtrue\u3002</p><p>\u901A\u8FC7v-if\u6307\u4EE4\u548Cpermission\u51FD\u6570\u914D\u5408\u8FDB\u884C\u6309\u94AE\u6743\u9650\u6821\u9A8C(\u672A\u8FDB\u884C\u5C01\u88C5\u6307\u4EE4\u7684\u539F\u56E0\u662F\uFF0C\u6307\u4EE4\u65B9\u5F0F\u5BF9\u670D\u52A1\u7AEF\u6E32\u67D3\u4E0D\u53CB\u597D\uFF0C\u5EFA\u8BAE\u4F7F\u7528v-if\u5224\u65AD)\u3002</p><ul><li>\u901A\u8FC7\u5168\u5C40\u51FD\u6570$permission()\u6821\u9A8C\u6743\u9650</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$permission(&#39;edit&#39;)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ $t(&#39;\u7F16\u8F91&#39;) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5F15\u5165 permission()\u51FD\u6570\u6821\u9A8C</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>permission<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>permission(&#39;show&#39;)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ $t(&#39;\u67E5\u770B&#39;) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>permission<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> permission <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/permission&#39;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8D85\u7BA1\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u8D85\u7BA1\u6743\u9650" aria-hidden="true">#</a> \u8D85\u7BA1\u6743\u9650</h2><p>\u5F53\u521D\u59CB\u5316\u6743\u9650\u65F6\u62FF\u5230\u7684<code>rules</code>\u6570\u7EC4\u5305\u542B&#39;*&#39;\u65F6\uFF0C\u4EE3\u8868\u5177\u6709\u6240\u6709\u6743\u9650\uFF0C\u6743\u9650permission\u51FD\u6570\u4F1A\u5FC5\u5B9A\u8FD4\u56DE<code>true</code></p>`,9);function h(b,f){const t=p("RouterLink");return o(),c("div",null,[r,s("p",null,[k,d,v,i(t,{to:"/guide/route.html#%E8%B7%AF%E7%94%B1%E6%9D%83%E9%99%90"},{default:u(()=>[m]),_:1})]),g])}const w=e(l,[["render",h],["__file","permission.html.vue"]]);export{w as default};
