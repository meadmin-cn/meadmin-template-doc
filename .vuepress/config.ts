import { defaultTheme, defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    base:'/meadmin-template-doc/',
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-cn',
            title: 'Meadmin-template',
            description: '基于vue3的中后台模板',
        },
    },
    head: [
        ['meta', { name: 'author', content: 'meadmin-cn' }],
        [
            'meta',
            {
                name: 'keywords',
                content: 'meadmin, meadmin template, element-plus, vue, vite, vue3',
            },
        ],
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
        [
            'meta',
            {
                name: 'viewport',
                content:
                    'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
            },
        ],
    ],
    theme: defaultTheme({
        logo: '/logo.svg',
        navbar: [
            // NavbarItem
            {
                text: '指南',
                children: [
                    {
                        text: '指南',
                        link: '/guide/index.md',
                    },
                    {
                        text: '深入',
                        link: '/more/components.md',
                    }]
            },
            {
                text: '组件',
                link: '/components/meKeepAlive.md',
            },
            {
                text: '社区',
                children:[
                    {
                        text: 'QQ群752939100',
                        link: 'https://jq.qq.com/?_wv=1027&k=zSjWSant',
                    },
                ]
            },
        ],
        repo: 'https://github.com/meadmin-cn/meadmin-template',
        docsRepo: 'https://github.com/meadmin-cn/meadmin-template-doc',
        contributorsText: '文档贡献者',
        // 侧边栏对象
        // 不同子路径下的页面会使用不同的侧边栏
        sidebar: {
            '/': [
                {
                    text: '指南',
                    children: [
                        '/guide/index.md',
                        '/guide/started.md',
                        '/guide/config.md',
                        '/guide/route.md',
                        '/guide/permission.md',
                        '/guide/icon.md',
                        '/guide/request.md',
                        '/guide/i18n.md',
                    ],
                },
                {
                    text: '深入',
                    children: [
                        '/more/components.md',
                        '/more/pinia.md',
                        '/more/apiAuto.md',
                        '/more/normalize.md',
                    ]
                }
            ],
            '/components/': [
                {
                    text: '组件',
                    children: [
                        '/components/meKeepAlive.md',
                        '/components/meComponent.md',
                        '/components/icon.md',

                    ],
                },
            ],
        },
    }),
    plugins: [
        // searchPlugin({
        //     locales: {
        //       '/': {
        //         placeholder: 'Search',
        //       },
        //       '/zh/': {
        //         placeholder: '搜索',
        //       },
        //     },
        //   }),
    ],
})