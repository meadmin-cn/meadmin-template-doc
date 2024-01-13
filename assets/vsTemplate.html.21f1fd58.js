import{_ as e,o as t,c as i,d as n}from"./app.43081e59.js";const s={},d=n(`<h1 id="\u914D\u7F6Evscode\u6A21\u677F\u7247\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Evscode\u6A21\u677F\u7247\u6BB5" aria-hidden="true">#</a> \u914D\u7F6Evscode\u6A21\u677F\u7247\u6BB5</h1><h2 id="vue\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#vue\u6A21\u677F" aria-hidden="true">#</a> vue\u6A21\u677F</h2><ul><li>\u70B9\u51FBvscode \u5DE6\u4E0B\u89D2\u8BBE\u7F6E\u56FE\u6807</li><li>\u9009\u4E2D\u914D\u7F6E\u7528\u6237\u4EE3\u7801\u7247\u6BB5</li><li>\u9009\u4E2D\u65B0\u5EFA\u5168\u5C40\u4EE3\u7801\u7247\u6BB5</li><li>\u8F93\u5165\u540D\u79F0<code>v3</code></li><li>\u7C98\u8D34\u5165\u4EE5\u4E0B\u4EE3\u7801</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
	// Place your snippets for vue here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and \${1:label}, \${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	&quot;Print to console&quot;: {
		&quot;prefix&quot;: &quot;&lt;v3&quot;,
		&quot;body&quot;: [
			&quot;&lt;template&gt;&quot;,
                &quot;&lt;div class=\\&quot;\${TM_FILENAME_BASE/([A-Z])/-\${1:/downcase}/g}\\&quot;&gt;&quot;,
				&quot;\${1}&quot;,
				&quot;&lt;/div&gt;&quot;,
                &quot;&lt;/template&gt;&quot;,
                &quot;&quot;,
                &quot;&lt;script setup lang=\\&quot;ts\\&quot; name=\\&quot;\${TM_FILENAME_BASE/(.*)/\${1:/pascalcase}/}\\&quot;&gt;&quot;,
				&quot;&quot;,
                &quot;&lt;/script&gt;&quot;,
                &quot;&lt;style lang=\\&quot;scss\\&quot; scoped&gt;&quot;,
                &quot;.\${TM_FILENAME_BASE/([A-Z])/-\${1:/downcase}/g}{&quot;,
				&quot;&quot;,
				&quot;}&quot;,
                &quot;&lt;/style&gt;&quot;
		],
		&quot;description&quot;: &quot;A vue file template&quot;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u65B0\u5EFA<code>.vue</code>\u6587\u4EF6\u540E \u8F93\u5165<code>&lt;v3</code>\u4F1A\u51FA\u73B0\u5BF9\u5E94\u6A21\u677F\u9009\u9879\uFF0C\u9009\u4E2D\u540E\u4F1A\u81EA\u52A8\u751F\u6210vue\u6587\u4EF6\u6A21\u677F</li></ul><h2 id="pinia-\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#pinia-\u6A21\u677F" aria-hidden="true">#</a> pinia \u6A21\u677F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
   // Place your \u5168\u5C40 snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and 
   // description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope 
   // is left empty or omitted, the snippet gets applied to all languages. The prefix is what is 
   // used to trigger the snippet and the body will be expanded and inserted. Possible variables are: 
   // $1, $2 for tab stops, $0 for the final cursor position, and \${1:label}, \${2:another} for placeholders. 
   // Placeholders with the same ids are connected.
   // Example:
   &quot;Print to console&quot;: {
   	&quot;scope&quot;: &quot;typescript&quot;,
   	&quot;prefix&quot;: &quot;&lt;s&quot;,
   	&quot;body&quot;: [
   		&quot;const use\${TM_FILENAME_BASE/(.*)/\${1:/pascalcase}/}Store =  defineStore(&#39;global&#39;, {&quot;,
   		&quot;  state:()=&gt;({&quot;,
   		&quot;    $0&quot;,
   		&quot;  }),&quot;,
   		&quot;});&quot;,
   		&quot;&quot;,
   		&quot;if (i<wbr>mport.meta.hot) {&quot;,
   		&quot;  i<wbr>mport.meta.hot.accept(acceptHMRUpdate(use\${TM_FILENAME_BASE/(.*)/\${1:/pascalcase}/}Store, i<wbr>mport.meta.hot))&quot;,
   		&quot;}&quot;,
   		&quot;&quot;,
   		&quot;export default use\${TM_FILENAME_BASE/(.*)/\${1:/pascalcase}/}Store&quot;,
   		&quot;&quot;
   	],
   	&quot;description&quot;: &quot;vue pinia store&quot;
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l=[d];function a(o,u){return t(),i("div",null,l)}const c=e(s,[["render",a],["__file","vsTemplate.html.vue"]]);export{c as default};
