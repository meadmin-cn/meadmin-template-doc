import{_ as s,r as a,o as l,c as d,a as e,b as c,e as n,d as r}from"./app.43081e59.js";const t={},v=e("h1",{id:"\u5FEB\u901F\u4E0A\u624B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5FEB\u901F\u4E0A\u624B","aria-hidden":"true"},"#"),n(" \u5FEB\u901F\u4E0A\u624B")],-1),u=e("h2",{id:"\u4F9D\u8D56\u73AF\u5883",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4F9D\u8D56\u73AF\u5883","aria-hidden":"true"},"#"),n(" \u4F9D\u8D56\u73AF\u5883")],-1),o={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},m=n("nodejs v20+"),b=r(`<h2 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> \u5FEB\u901F\u5F00\u59CB</h2><ul><li>clone \u4EE3\u7801<div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u5982\u679C\u60F3\u4F7F\u7528\u57FA\u7840\u6A21\u677F\uFF0C\u8BF7\u5207\u6362\u4E3Atemplate\u5206\u652F</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token function">git</span> clone https://github.com/meadmin-cn/meadmin-template.git 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>\u5B89\u88C5\u4F9D\u8D56<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  <span class="token builtin class-name">cd</span> meadmin-template
  <span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li>\u672C\u5730\u8FD0\u884C<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  <span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>\u6253\u5305<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  <span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="\u76EE\u5F55\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u8BF4\u660E" aria-hidden="true">#</a> \u76EE\u5F55\u8BF4\u660E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.
\u251C\u2500\u2500 dist \u6253\u5305\u6587\u4EF6\u5939
\u251C\u2500\u2500 mock mock\u6587\u4EF6\u5939
\u251C\u2500\u2500 plugins vite\u63D2\u4EF6
\u251C\u2500\u2500 public \u516C\u5171\u9759\u6001\u8D44\u6E90\u76EE\u5F55
\u251C\u2500\u2500 src  \u4E3B\u76EE\u5F55
\u2502   \u251C\u2500\u2500 api \u63A5\u53E3\u6587\u4EF6
\u2502   \u251C\u2500\u2500 assets \u8D44\u6E90\u6587\u4EF6
\u2502   \u2502   \u2514\u2500\u2500 images \u9879\u76EE\u5B58\u653E\u56FE\u7247\u7684\u6587\u4EF6\u5939
\u2502   \u251C\u2500\u2500 components \u516C\u5171\u7EC4\u4EF6\uFF08\u91CC\u9762\u7684\u7EC4\u4EF6\u4F1A\u81EA\u52A8\u5F15\u5165\uFF09
\u2502   \u251C\u2500\u2500 config \u914D\u7F6E\u6587\u4EF6\u5939
\u2502   \u2502   \u251C\u2500\u2500 index.ts \u914D\u7F6E\u5165\u53E3\u6587\u4EF6
\u2502   \u2502   \u251C\u2500\u2500 locale.ts \u56FD\u9645\u5316\u914D\u7F6E
\u2502   \u2502   \u251C\u2500\u2500 login.ts  \u767B\u5F55\u914D\u7F6E
\u2502   \u2502   \u2514\u2500\u2500 theme.ts  \u4E3B\u9898\u914D\u7F6E
\u2502   \u251C\u2500\u2500 directives \u6307\u4EE4\uFF08\u91CC\u9762\u7684\u6307\u4EE4\u4F1A\u81EA\u52A8\u5F15\u5165\uFF09
\u2502   \u251C\u2500\u2500 dict  \u5B57\u5178
\u2502   \u251C\u2500\u2500 event \u4E8B\u4EF6
|   \u251C\u2500\u2500 hooks \u516C\u5171hooks
\u2502   \u251C\u2500\u2500 icons \u56FE\u6807
\u2502   \u2502   \u251C\u2500\u2500 svg  svg\u56FE\u6807\u6587\u4EF6\u5939\uFF08\u653E\u5165\u6B64\u6587\u4EF6\u5939\u7684svg\u4F1A\u88AB\u81EA\u52A8\u6CE8\u518C\u56FE\u6807\u7EC4\u4EF6\uFF09
\u2502   \u2502   \u2514\u2500\u2500 index.ts \u56FE\u6807\u81EA\u52A8\u6CE8\u518C\u5165\u53E3\u6587\u4EF6
\u2502   \u251C\u2500\u2500 layout \u5E03\u5C40\u6587\u4EF6
\u2502   \u251C\u2500\u2500 locales  \u56FD\u9645\u5316
\u2502   \u2502   \u2514\u2500\u2500 lang \u5168\u5C40\u8BED\u8A00\u5305
\u2502   \u251C\u2500\u2500 router  \u8DEF\u7531\u914D\u7F6E
\u2502   \u2502   \u251C\u2500\u2500 guard \u8DEF\u7531\u5168\u5C40\u5B88\u536B
\u2502   \u2502   \u2514\u2500\u2500 routes \u52A8\u6001\u8DEF\u7531\u5B58\u653E\u76EE\u5F55
|   \u251C\u2500\u2500 styles \u6837\u5F0F\u6587\u4EF6 
\u2502   \u251C\u2500\u2500 store  pinia\u6587\u4EF6\u5939
\u2502   \u251C\u2500\u2500 utils  \u5DE5\u5177\u7C7B
\u2502   \u251C\u2500\u2500 views  \u9875\u9762
\u2502   \u2514\u2500\u2500 main.ts \u5165\u53E3\u6587\u4EF6
\u251C\u2500\u2500 template\u81EA\u52A8\u751F\u6210\u6A21\u677F
\u251C\u2500\u2500 types  \u7C7B\u578B\u6587\u4EF6
\u2514\u2500\u2500 vite.config.ts vite\u914D\u7F6E\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function h(p,g){const i=a("ExternalLinkIcon");return l(),d("div",null,[v,u,e("ul",null,[e("li",null,[e("a",o,[m,c(i)])])]),b])}const f=s(t,[["render",h],["__file","started.html.vue"]]);export{f as default};
