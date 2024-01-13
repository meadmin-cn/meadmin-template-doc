import{_ as p,r as o,o as i,c,a as s,b as t,e as n,d as e}from"./app.43081e59.js";const l={},u=s("h1",{id:"\u7EC4\u4EF6\u81EA\u52A8\u6309\u9700\u5F15\u5165",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u7EC4\u4EF6\u81EA\u52A8\u6309\u9700\u5F15\u5165","aria-hidden":"true"},"#"),n(" \u7EC4\u4EF6\u81EA\u52A8\u6309\u9700\u5F15\u5165")],-1),r=n("\u7EC4\u4EF6\u81EA\u52A8\u5F15\u5165\u529F\u80FD\u57FA\u4E8E"),d={href:"https://github.com/yuntian001/vite-plugin-autogeneration-import-file",target:"_blank",rel:"noopener noreferrer"},k=n("vite-plugin-autogeneration-import-file"),v=n("\u3001"),m={href:"https://github.com/antfu/unplugin-vue-components",target:"_blank",rel:"noopener noreferrer"},b=n("unplugin-vue-components"),g=n("\u63D2\u4EF6\u5B9E\u73B0\uFF0C\u76F8\u5173\u914D\u7F6E\u8BF4\u660E\u8BF7\u53C2\u8003\u5BF9\u5E94\u6587\u6863"),h=e(`<h2 id="elment-plus\u7EC4\u4EF6\u81EA\u52A8\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#elment-plus\u7EC4\u4EF6\u81EA\u52A8\u5F15\u5165" aria-hidden="true">#</a> elment-plus\u7EC4\u4EF6\u81EA\u52A8\u5F15\u5165</h2><p>\u76F4\u63A5\u5728vue\u6587\u4EF6\u4E2D\u4F7F\u7528elment-plus\u7EC4\u4EF6\uFF0C\u7F16\u8BD1\u65F6\u4F1A\u81EA\u52A8\u6309\u9700\u5F15\u5165\u3002 \u4F7F\u7528\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;template&gt;
  &lt;el-dropdown class=&quot;me-size-select&quot; trigger=&quot;click&quot; max-height=&quot;500px&quot;&gt;
    &lt;div class=&quot;flex-center pointer&quot;&gt;
      &lt;me-icon-size class=&quot;icon&quot;&gt;&lt;/me-icon-size&gt;
    &lt;/div&gt;
    &lt;template #dropdown&gt;
      &lt;el-dropdown-menu&gt;
        &lt;el-dropdown-item
          v-for=&quot;item in SizeEnum&quot;
          :key=&quot;item&quot;
          :disabled=&quot;themeConfig.size === item&quot;
          @click=&quot;themeConfig.size = item&quot;
          &gt;{{ $t(item) }}&lt;/el-dropdown-item
        &gt;
      &lt;/el-dropdown-menu&gt;
    &lt;/template&gt;
  &lt;/el-dropdown&gt;
&lt;/template&gt;
&lt;script setup lang=&quot;ts&quot; name=&quot;meSize&quot;&gt;
import { SizeEnum } from &#39;@/enums/configEnum&#39;;
import { useSettingStore } from &#39;@/store&#39;;
const { themeConfig } = useSettingStore();
&lt;/script&gt;
&lt;style lang=&quot;scss&quot; scoped&gt;
.me-size-select {
  .flex-center {
    padding: 0 10px;

    .icon {
      font-size: 1.2em;
    }
  }
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u516C\u5171\u7EC4\u4EF6\u81EA\u52A8\u6309\u9700\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#\u516C\u5171\u7EC4\u4EF6\u81EA\u52A8\u6309\u9700\u5F15\u5165" aria-hidden="true">#</a> \u516C\u5171\u7EC4\u4EF6\u81EA\u52A8\u6309\u9700\u5F15\u5165</h2><ul><li>\u5728<code>@/components</code>\u6587\u4EF6\u5939\u4E0B\u7B26\u5408<code>[&#39;*.vue&#39;, &#39;**/index.{vue,ts}&#39;]</code> <code>glob</code>\u89C4\u5219\u7684\u6587\u4EF6\u4F1A\u88AB\u81EA\u52A8\u8BC6\u522B\u4E3A\u516C\u5171\u7EC4\u4EF6\uFF0C\u5728\u4F7F\u7528\u65F6\u53EF\u76F4\u63A5\u4F7F\u7528\uFF0C\u7F16\u8BD1\u65F6\u4F1A\u81EA\u52A8\u5F15\u5165\uFF0C\u7EC4\u4EF6\u540D\u89C4\u5219\u4E3A\u76F8\u5BF9\u4E8E<code>@/components</code>\u5E76\u53BB\u9664\u7ED3\u5C3E\u7684(index\u3001Index)\u7684\u5927\u9A7C\u5CF0\u540D\u79F0\uFF0C\u6700\u7EC8\u540D\u79F0\u53EF\u53BB\u7C7B\u578B\u58F0\u660E\u6587\u4EF6\u4E2D\u786E\u8BA4\u3002</li><li>\u516C\u5171\u7EC4\u4EF6\u4F1A\u81EA\u52A8\u521B\u5EFA\u7C7B\u578B\u58F0\u660E\uFF0C\u7C7B\u578B\u58F0\u660E\u6587\u4EF6\u4F4D\u4E8E<code>types/components.d.ts</code>\u3002</li></ul><p>\u4F7F\u7528\u793A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;template&gt;
  &lt;div class=&quot;header&quot;&gt;
    &lt;me-dark-switch v-if=&quot;themeConfig.showDark&quot;&gt;&lt;/me-dark-switch&gt;
    &lt;me-size-select v-if=&quot;themeConfig.showSize&quot;&gt;&lt;/me-size-select&gt;
    &lt;me-locale-select v-if=&quot;localeConfig.localeList.length &gt; 1&quot;&gt;&lt;/me-locale-select&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script setup lang=&quot;ts&quot; name=&quot;Header&quot;&gt;
import { localeConfig } from &#39;@/config&#39;;
import { useSettingStore } from &#39;@/store&#39;;
const { themeConfig } = useSettingStore();
&lt;/script&gt;
&lt;style lang=&quot;scss&quot; scoped&gt;
.header {
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 12px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u81EA\u5B9A\u4E49\u5F15\u5165\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5F15\u5165\u89C4\u5219" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u5F15\u5165\u89C4\u5219</h2>`,8),f=n("\u81EA\u52A8\u5F15\u5165\u89C4\u5219\u53EF\u5728"),_=s("code",null,"plugins/autoImport.ts",-1),y=n("\u4E2D\u53EF\u81EA\u884C\u914D\u7F6E\u66F4\u6539\uFF0C\u8BE6\u7EC6\u8BF4\u660E\u8BF7\u53C2\u8003"),q={href:"https://github.com/yuntian001/vite-plugin-autogeneration-import-file/blob/main/README-zh-cn.md",target:"_blank",rel:"noopener noreferrer"},x=n("vite-plugin-autogeneration-import-file\u6587\u6863"),w=n(" \u6838\u5FC3\u4EE3\u7801\u5982\u4E0B"),R=e(`<h3 id="\u89C4\u5219\u6838\u5FC3\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u89C4\u5219\u6838\u5FC3\u4EE3\u7801" aria-hidden="true">#</a> \u89C4\u5219\u6838\u5FC3\u4EE3\u7801</h3><p><code>plugins/autoImport.ts</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> dirname<span class="token punctuation">,</span> resolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fs <span class="token keyword">from</span> <span class="token string">&#39;fs&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-autogeneration-import-file&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> fileURLToPath <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;url&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> autoImport<span class="token punctuation">,</span> resolver<span class="token operator">:</span> resolverFn <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">createPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> __filename <span class="token operator">=</span> <span class="token function">fileURLToPath</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> __dirname <span class="token operator">=</span> <span class="token function">dirname</span><span class="token punctuation">(</span>__filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">pathResolve</span><span class="token punctuation">(</span>dir<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../&#39;</span><span class="token punctuation">,</span> dir<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token function">autoImport</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token comment">// \u81EA\u52A8\u751F\u6210</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// svg icon type</span>
      <span class="token class-name">pattern</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;*.svg&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      dir<span class="token operator">:</span> <span class="token function">pathResolve</span><span class="token punctuation">(</span><span class="token string">&#39;src/icons/svg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      toFile<span class="token operator">:</span> <span class="token function">pathResolve</span><span class="token punctuation">(</span><span class="token string">&#39;types/meIconComments.d.ts&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&#39;MeIcon_{{name}}&#39;</span><span class="token punctuation">,</span>
      template<span class="token operator">:</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token function">pathResolve</span><span class="token punctuation">(</span><span class="token string">&#39;./template/meIconComments.d.ts&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      codeTemplates<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> key<span class="token operator">:</span> <span class="token string">&#39;//code&#39;</span><span class="token punctuation">,</span> template<span class="token operator">:</span> <span class="token string">&#39;{{name}}: Icon;\\n    &#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// pinia module</span>
      pattern<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;**/*.{ts,js}&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;*.{ts,js}&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      dir<span class="token operator">:</span> <span class="token function">pathResolve</span><span class="token punctuation">(</span><span class="token string">&#39;src/store/modules&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      toFile<span class="token operator">:</span> <span class="token function">pathResolve</span><span class="token punctuation">(</span><span class="token string">&#39;src/store/module.ts&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&#39;use_{{name}}_store&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// auto import directives</span>
      pattern<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;*.ts&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;**/index.ts&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      dir<span class="token operator">:</span> <span class="token function">pathResolve</span><span class="token punctuation">(</span><span class="token string">&#39;src/directives&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      toFile<span class="token operator">:</span> <span class="token function">pathResolve</span><span class="token punctuation">(</span><span class="token string">&#39;types/directives.d.ts&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      template<span class="token operator">:</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token function">pathResolve</span><span class="token punctuation">(</span><span class="token string">&#39;./template/directives.d.ts&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      codeTemplates<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          key<span class="token operator">:</span> <span class="token string">&#39;//code&#39;</span><span class="token punctuation">,</span>
          template<span class="token operator">:</span> <span class="token string">&#39;{{name}}: typeof import(&quot;{{path}}&quot;)[&quot;default&quot;];\\n    &#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&#39;V_{{name}}&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// auto import components</span>
      pattern<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;*.{vue,ts}&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;**/index.{vue,ts}&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">//\u5177\u4F53\u6587\u4EF6\u89C4\u5219\uFF0C\u5F53\u524D\u89C4\u5219\u4E3A dir\u6587\u4EF6\u5939\u4E0B\u7684.vue\u6216.ts \u6216\u8005dir\u5B50\u6587\u4EF6\u5939\u4E0B\u7684index.vue\u6216index.ts\u6587\u4EF6</span>
      dir<span class="token operator">:</span> <span class="token function">pathResolve</span><span class="token punctuation">(</span><span class="token string">&#39;src/components&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">//\u626B\u63CF\u7684\u6587\u4EF6\u5939</span>
      toFile<span class="token operator">:</span> <span class="token function">pathResolve</span><span class="token punctuation">(</span><span class="token string">&#39;types/components.d.ts&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">//\u751F\u6210\u7684type\u6587\u4EF6\u4F4D\u7F6E</span>
      template<span class="token operator">:</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token function">pathResolve</span><span class="token punctuation">(</span><span class="token string">&#39;./template/components.d.ts&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">//\u751F\u6210\u6587\u4EF6\u6A21\u677F</span>
      codeTemplates<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">//\u751F\u6210\u4EE3\u7801\u66FF\u6362\u6A21\u677F</span>
        <span class="token punctuation">{</span>
          key<span class="token operator">:</span> <span class="token string">&#39;//code&#39;</span><span class="token punctuation">,</span>
          template<span class="token operator">:</span> <span class="token string">&#39;{{name}}: typeof import(&quot;{{path}}&quot;)[&quot;default&quot;];\\n    &#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          key<span class="token operator">:</span> <span class="token string">&#39;//typeCode&#39;</span><span class="token punctuation">,</span>
          template<span class="token operator">:</span> <span class="token string">&#39;type {{name}}Instance = InstanceType&lt;typeof import(&quot;{{path}}&quot;)[&quot;default&quot;]&gt;;\\n  &#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&#39;_{{name}}&#39;</span><span class="token punctuation">,</span><span class="token comment">//\u7EC4\u4EF6\u540D\u79F0\u547D\u540D\u6A21\u677F</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> resolver <span class="token operator">=</span> resolverFn<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u81EA\u52A8\u5F15\u5165\u6838\u5FC3\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u5F15\u5165\u6838\u5FC3\u4EE3\u7801" aria-hidden="true">#</a> \u81EA\u52A8\u5F15\u5165\u6838\u5FC3\u4EE3\u7801</h3><p><code>plugins/autoComponents.ts</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ElementPlusResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> resolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./autoImport&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token comment">// \u7EC4\u4EF6\u81EA\u52A8\u6CE8\u518C\u6838\u5FC3\u4EE3\u7801</span>
  <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    include<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    dts<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">//resolver\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u6570\u7EC4\u53C2\u6570\u4EE3\u8868\u7EC4\u4EF6\u81EA\u52A8\u5F15\u5165\u7684\u89C4\u5219index,\u7B2C\u4E8C\u4E2A\u6570\u7EC4\u53C2\u6570\u4EE3\u8868\u6307\u4EE4\u81EA\u52A8\u5F15\u5165\u7684\u89C4\u5219index</span>
    resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">{</span> importStyle<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">resolver</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function S(C,z){const a=o("ExternalLinkIcon");return i(),c("div",null,[u,s("p",null,[r,s("a",d,[k,t(a)]),v,s("a",m,[b,t(a)]),g]),h,s("p",null,[f,_,y,s("a",q,[x,t(a)]),w]),R])}const E=p(l,[["render",S],["__file","components.html.vue"]]);export{E as default};
