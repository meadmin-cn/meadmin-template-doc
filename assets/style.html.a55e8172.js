import{_ as t,r as i,o as c,c as o,a as n,b as a,e as s,d as l}from"./app.43081e59.js";const p={},r=n("h1",{id:"\u6837\u5F0F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6837\u5F0F","aria-hidden":"true"},"#"),s(" \u6837\u5F0F")],-1),d=s("\u672C\u7CFB\u7EDF\u6837\u5F0F\u91C7\u7528\u7684 "),u={href:"https://www.sass.hk/",target:"_blank",rel:"noopener noreferrer"},v=s("sass"),m=s("\uFF0C\u5EFA\u8BAE\u5168\u5C40\u6837\u5F0F\u548C\u53D8\u91CF\u653E\u5728 \u516C\u5171\u6837\u5F0F\u6587\u4EF6\u5939 \u4E2D\uFF0C\u7EC4\u4EF6\u6837\u5F0F\u5199\u5728\u5404\u81EA\u7EC4\u4EF6\u7684"),k=n("code",null,'<style lang="scss" scoped>',-1),b=s("\u6807\u7B7E\u4E2D\uFF0C\u8BF7\u63D0\u524D\u4E86\u89E3 "),h={href:"https://www.sass.hk/",target:"_blank",rel:"noopener noreferrer"},f=s("sass"),g=s(" \u548C "),_={href:"https://cn.vuejs.org/api/sfc-css-features.html",target:"_blank",rel:"noopener noreferrer"},x=s("vue css"),z=s("\u6587\u6863"),y=l(`<h2 id="\u516C\u5171\u6837\u5F0F\u6587\u4EF6\u5939" tabindex="-1"><a class="header-anchor" href="#\u516C\u5171\u6837\u5F0F\u6587\u4EF6\u5939" aria-hidden="true">#</a> \u516C\u5171\u6837\u5F0F\u6587\u4EF6\u5939</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 src  
|   \u251C\u2500\u2500 styles \u516C\u5171\u6837\u5F0F\u6587\u4EF6
\u2502   \u2502   \u251C\u2500\u2500 element-plus.scss element-plus\u8986\u76D6\u6837\u5F0F
\u2502   \u2502   \u251C\u2500\u2500 index.scss \u5168\u5C40\u6837\u5F0F
\u2502   \u2502   \u251C\u2500\u2500 transition.scss \u52A8\u753B\u6837\u5F0F
\u2502   \u2502   \u2514\u2500\u2500 variables.scss  sass\u53D8\u91CF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sass\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#sass\u53D8\u91CF" aria-hidden="true">#</a> sass\u53D8\u91CF</h2><p>sass \u53D8\u91CF\u4F4D\u4E8E <code>src/styles/variables.scss</code>\u6587\u4EF6\u4E2D\uFF0C\u5DF2\u7528<code>vite</code>\u7684<code>css.preprocessorOptions.scss.additionalData</code>\u914D\u7F6E\u9879\u81EA\u52A8\u5F15\u5165\uFF0C<code>vue</code>\u7684\u6A21\u677F\u4E2D\u53EF\u76F4\u63A5\u4F7F\u7528</p><h3 id="\u4F7F\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u793A\u4F8B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;style lang=&quot;scss&quot; scoped&gt;
.main {
  padding: $page-padding;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="size\u5207\u6362" tabindex="-1"><a class="header-anchor" href="#size\u5207\u6362" aria-hidden="true">#</a> size\u5207\u6362</h2><p>\u4E3A\u4E86\u5B9E\u73B0size \u7684\u5207\u6362\u529F\u80FD\uFF0C\u505A\u4E86\u4EE5\u4E0B\u66F4\u6539</p><ul><li>\u4FEE\u6539large\u3001small\u4E0B\u7684--el-font-size-base\uFF0C\u4EE3\u7801\u4F4D\u7F6E\u4F4D\u4E8E<code>src/styles/element-plus.scss</code></li></ul><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector">.me-large:root </span><span class="token punctuation">{</span>
  <span class="token comment">//\u8FD9\u91CC\u5F3A\u5236\u5C06font-size-base\u8BBE\u7F6E\u4E3Alarge</span>
  <span class="token property">--el-font-size-base</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--el-font-size-large<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.me-small:root </span><span class="token punctuation">{</span>
  <span class="token comment">//\u8FD9\u91CC\u5F3A\u5236\u5C06font-size-base\u8BBE\u7F6E\u4E3Asmall</span>
  <span class="token property">--el-font-size-base</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--el-font-size-small<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4E0D\u540Csize\u4E0B html\u57FA\u7840<code>font-size</code>\u4E0D\u540C,\u4EE3\u7801\u4F4D\u7F6E\u4F4D\u4E8E<code>src/styles/index.scss</code></li></ul><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector">.me-large </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--el-font-size-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.me-default </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--el-font-size-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.me-small </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--el-font-size-small<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5C06<code>font-size</code>\u7684\u503C\u7531<code>px</code>\u81EA\u52A8\u8F6C\u5316\u4E3A<code>rem</code>,\u5B9E\u73B0\u4EE3\u7801\u4F4D\u4E8E<code>vite.config.ts</code></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>postcss<span class="token operator">:</span> <span class="token punctuation">{</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
        autoprefixer<span class="token punctuation">,</span>
        <span class="token function">px2rem</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        rootValue<span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token comment">//\u6362\u7B97\u57FA\u6570\uFF0C\u5C06 px \u66FF\u6362\u4E3A 1/rootValue rem (\u5373\u8BBE\u8BA1\u56FE\u4E0B\u7684fontSize)</span>
        <span class="token comment">// unitPrecision: 5, //\u5141\u8BB8REM\u5355\u4F4D\u589E\u957F\u5230\u7684\u5341\u8FDB\u5236\u6570\u5B57\u3002</span>
        propWhiteList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;font-size&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//\u9ED8\u8BA4\u503C\u662F\u4E00\u4E2A\u7A7A\u6570\u7EC4\uFF0C\u8FD9\u610F\u5473\u7740\u7981\u7528\u767D\u540D\u5355\u5E76\u542F\u7528\u6240\u6709\u5C5E\u6027\u3002</span>
        <span class="token comment">// propBlackList: [&#39;font-size&#39;, &#39;border&#39;], //\u4E0D\u5E94\u4ECE px \u66F4\u6539\u4E3A rem \u7684\u5C5E\u6027</span>
        exclude<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(node_module)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">//\u9ED8\u8BA4false\uFF0C\u53EF\u4EE5\uFF08reg\uFF09\u5229\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u6392\u9664\u67D0\u4E9B\u6587\u4EF6\u5939\u7684\u65B9\u6CD5\uFF0C\u4F8B\u5982/(node_module)\\/\u5982\u679C\u60F3\u628A\u524D\u7AEFUI\u6846\u67B6\u5185\u7684px\u4E5F\u8F6C\u6362\u6210rem\uFF0C\u8BF7\u628A\u6B64\u5C5E\u6027\u8BBE\u4E3A\u9ED8\u8BA4\u503C</span>
        <span class="token comment">// selectorBlackList: [], //\u8981\u5FFD\u7565\u5E76\u4FDD\u7559\u4E3Apx\u7684\u9009\u62E9\u5668</span>
        <span class="token comment">// ignoreIdentifier: false,  //\uFF08boolean/string\uFF09\u5FFD\u7565\u5355\u4E2A\u5C5E\u6027\u7684\u65B9\u6CD5\uFF0C\u542F\u7528ignoreidentifier\u540E\uFF0Creplace\u5C06\u81EA\u52A8\u8BBE\u7F6E\u4E3Atrue\u3002</span>
        <span class="token comment">// replace: true, // \uFF08\u5E03\u5C14\u503C\uFF09\u66FF\u6362\u5305\u542BREM\u7684\u89C4\u5219\uFF0C\u800C\u4E0D\u662F\u6DFB\u52A0\u56DE\u9000\u3002</span>
        mediaQuery<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//\uFF08\u5E03\u5C14\u503C\uFF09\u5141\u8BB8\u5728\u5A92\u4F53\u67E5\u8BE2\u4E2D\u8F6C\u6362px\u3002</span>
        minPixelValue<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">//\u8BBE\u7F6E\u8981\u66FF\u6362\u7684\u6700\u5C0F\u50CF\u7D20\u503C(\u5305\u542B)\u3002 \u9ED8\u8BA4 0</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function V(w,B){const e=i("ExternalLinkIcon");return c(),o("div",null,[r,n("p",null,[d,n("a",u,[v,a(e)]),m,k,b,n("a",h,[f,a(e)]),g,n("a",_,[x,a(e)]),z]),y])}const L=t(p,[["render",V],["__file","style.html.vue"]]);export{L as default};