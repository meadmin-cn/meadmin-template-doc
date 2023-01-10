## 配置vscode模板片段

- 点击vscode 左下角设置图标
- 选中配置用户代码片段
- 选中新建全局代码片段
- 输入名称`v3`
- 粘贴入以下代码
```
{
	// Place your snippets for vue here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	"Print to console": {
		"prefix": "<v3",
		"body": [
			"<template>",
                "<div class=\"${TM_FILENAME_BASE/([A-Z])/-${1:/downcase}/g}\">",
				"${1}",
				"</div>",
                "</template>",
                "",
                "<script setup lang=\"ts\" name=\"${TM_FILENAME_BASE/(.*)/${1:/pascalcase}/}\">",
				"",
                "</script>",
                "<style lang=\"scss\" scoped>",
                ".${TM_FILENAME_BASE/([A-Z])/-${1:/downcase}/g}{",
				"",
				"}",
                "</style>"
		],
		"description": "A vue file template"
	}
}
```
 - 新建`.vue`文件后 输入`<v3`会出现对应模板选项，选中后会自动生成vue文件模板