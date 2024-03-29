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
                content: 'meadmin, meadmin template, admin, element-plus, vue, vite, vue3',
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
        [
            'script',{},`var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?dbd9fa158a9fb69a5bafc89644b288cd";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();`
        ],
        [
            'script',{},`var _hmt = _hmt || [];
            (function() {
             if(['http://www.meadmin.cn/meadmin-template-doc/','https://www.meadmin.cn/meadmin-template-doc/'].includes(window.location.href)){
                let myHref = document.createElement('a');
                myHref.href = 'https://beian.miit.gov.cn';
                myHref.innerHTML=' | 鲁ICP备16039932号-5';
                document.getElementsByClassName('footer')[0].appendChild(myHref)
             }
            })();`
        ]
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
                    },
                    {
                        text: '其他',
                        link: '/other/question.md',
                    }
                ]
            },
            {
                text: '组件',
                children: [
                    {
                        text: '核心组件',
                        link: '/components/core/meKeepAlive.md',
                    },
                    {
                        text: '扩展组件',
                        link: '/components/extends/meNumber.md',
                    },
                    {
                        text:'服务式组件',
                        link: '/components/service/meImageViewer.md',
                    }
                ]
            },
            {
                text: '社区',
                children:[
                    {
                        text: 'QQ群：752939100',
                        link: 'https://jq.qq.com/?_wv=1027&k=zSjWSant',
                    },
                ]
            },
            {
                text: '相关链接',
                children:[
                    {
                        text: '国内预览(完整版)',
                        link: 'https://meadmin-cn.gitee.io/meadmin-template/',
                    },
                    {
                        text: '国外预览(完整版)',
                        link: 'https://meadmin-cn.github.io/meadmin-template/',
                    },
                    {
                        text: 'Github',
                        link: 'https://github.com/meadmin-cn/meadmin-template',
                    },
                    {
                        text: 'Gitee',
                        link: 'https://gitee.com/meadmin-cn/meadmin-template',
                    },
                    {
                        text: '文档国内地址',
                        link: 'https://meadmin-cn.gitee.io/meadmin-template-doc/',
                    },
                    {
                        text: '文档国外地址',
                        link: 'https://meadmin-cn.github.io/meadmin-template-doc/',
                    },
                    {
                        text: '文档Github',
                        link: 'https://github.com/meadmin-cn/meadmin-template-doc',
                    },
                    {
                        text: '文档Gitee',
                        link: 'https://gitee.com/meadmin-cn/meadmin-template-doc',
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
                        '/guide/style.md',
                    ],
                },
                {
                    text: '深入',
                    children: [
                        '/more/components.md',
                        '/more/pinia.md',
                        '/more/apiAuto.md',
                        '/more/normalize.md',
                        '/more/vsTemplate.md',
                        '/more/setUp.md',
                        '/more/service.md',
                    ]
                },
                {
                    text: '其他',
                    children: [
                        '/other/question.md',
                    ]
                }
            ],
            '/components/': [
                {
                    text: '核心组件',
                    children: [
                        '/components/core/meKeepAlive.md',
                        '/components/core/meComponent.md',
                        '/components/core/icon.md',
                    ],
                },
                {
                    text: '扩展组件',
                    children: [
                        '/components/extends/meNumber.md',
                        '/components/extends/meWangEditor.md',
                        '/components/extends/meTable.md',
                        '/components/extends/meVxeTable.md',
                        '/components/extends/meDialog.md',
                        '/components/extends/meSearchForm.md',
                    ],
                },
                {
                    text: '服务式组件',
                    children: [
                        '/components/service/meImageViewer.md',
                    ],
                }
            ],
        },
    }),
    plugins: [
        searchPlugin({}),
    ],
})