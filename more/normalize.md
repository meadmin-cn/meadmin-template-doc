# 开发规范

## eslint

本项目配置有`eslint`规范，具体规则位于`.eslintrc.cjs`文件中，

 - 校验代码规范
```
    npm run eslint
```
 - 校验并修复
```
    npm run eslint:fix
```

## prettier

本项目配置有`prettier`代码格式化规则，具体配置位于`.prettierrc.cjs`中。

 - 校验代码格式规范
```
    npm run prettier
```
 - 校验并修复格式规范
```
    npm run prettier:fix
```

## git提交规范[conventionalcommits](https://www.conventionalcommits.org/en/v1.0.0/)
 - 本项目的git提交规范遵循[conventionalcommits](https://www.conventionalcommits.org/en/v1.0.0/)并进行了自定义配置，具体配置规则如下
```
"types": [
    {
    "type": "feat",
    "section": "新功能[feat]"
    },
    {
    "type": "fix",
    "section": "Bug 修复[fix]"
    },
    {
    "type": "chore",
    "section": "其他[chore]"
    },
    {
    "type": "docs",
    "section": "文档更改[docs]"
    },
    {
    "type": "style",
    "section": "样式更改[style]"
    },
    {
    "type": "refactor",
    "section": "重构[refactor]"
    },
    {
    "type": "perf",
    "section": "性能改进[perf]"
    },
    {
    "type": "test",
    "section": "测试添加/更正[test]"
    },
    {
    "type": "revert",
    "section": "还原提交[revert]"
    },
    {
    "type": "ignore",
    "section": "需要忽略[ignore]",
    "hidden": true
    },
    {
    "type": "ci",
    "section": "CI发版[ci]"
    }
]
```
- 如果使用`vscode`编辑器，建议安装[Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits)插件,此插件会自动生成对应格式提交日志

## husky自动化
1. 安装时不使用`npm install`直接使用`npm run i `,或者初始化后在当前目录下运行`npx husky install`
2. 或者在 package.json加入以下`scripts`再install ([husky对应文档](https://typicode.github.io/husky/#/?id=install))
   ```
   //npm/pnpm
   {
        "scripts": {
            "prepare": "husky install"
        }
    }
   ```
   ```
   //yarn
    {
    "private": true, // ← your package is private, you only need postinstall
    "scripts": {
        "postinstall": "husky install"
    }
    }
   ```
会自动生成生成`husky`对应的git hook`husky`会在git提交时进行以下操作:
- 自动运行`prettier --write`进行代码格式化
- 自动运行`eslint --cache --fix`进行`eslint`校验和修复,如果无法修复会报错并停止提交
- 自动校验提交`message`是否符合`conventionalcommits`规范，如果不符合会报错并停止提交
 ### husky 在linux/mac下不生效
 husky目前有一个bug, windows下创建的hooks 当在linux/macos下拉取后即使执行了`husky install`也不能成功调用，需要单独执行下`chmod ug+x .husky/*` 赋予脚本执行权限对应[issue](https://github.com/typicode/husky/issues/1177)