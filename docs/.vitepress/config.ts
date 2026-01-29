import { defineConfig } from 'vitepress';

export default defineConfig({
  //lang: 'en-US',
  //title: 'LuaHook',
  //description: 'LuaHook Website',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],


  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',
      title: 'LuaHook',
      description: 'LuaHook 官网',
      themeConfig: {
        logo: '/logo.png',
        nav: [
          { text: '下载', link: 'https://github.com/KuLiPai/LuaHook/releases/latest' }
        ],
        sidebar: [
          {
            items: [
              { text: '快速开始', link: '/quickstart' },
            ],
          },
          {
            text: '入门',
            items: [
              { text: '简介', link: '/introduction' },
              { text: '安装与激活', link: '/activate' },
              { text: '第一个脚本', link: '/firstscript' },
              { text: '打包', link: '/packaged' }
            ],
          },
          {
            text: '手册',
            items: [
              {
                text: 'Java Hook',
                items: [
                  { text: 'hook', link: '/manual/hook' },
                  { text: 'lpparam', link: '/manual/lpparam' },
                  { text: 'field 字段', link: '/manual/field' },
                  { text: 'find/import 类', link: '/manual/import' },
                  { text: 'new/invoke 构造与函数', link: '/manual/invoke' },
                ]
              },
              {
                text: 'Native Hook',
                items: [

                  { text: '内存管理', link: '/manual/native/memory_alloc' },
                  { text: '内存读写', link: '/manual/native/memory_io' },
                  { text: '字符串操作', link: '/manual/native/memory_string' },
                  { text: '指针操作', link: '/manual/native/pointer' },
                  { text: '模块与符号', link: '/manual/native/module' },
                  { text: 'Hook 接口', link: '/manual/native/hook' },
                  { text: '兼容性说明', link: '/manual/native/legacy' },
                ]
              },
              {
                text: '其他',
                items: [
                  { text: 'json', link: '/manual/json' },
                  { text: 'task', link: '/manual/task' },
                  { text: 'file', link: '/manual/file' },
                  { text: 'http', link: '/manual/http' },
                  { text: 'Luaj++', link: '/luaj++' },
                ],
              },
            ],
          },
          {
            text: '例子',
            items: [
              { text: '监听音量按键', link: '/example/monitor-volume-buttons' },
              { text: '注入SO文件', link: '/example/inject-so-file' },
              { text: '编写脚本设置页面', link: '/example/write-setting' },
            ],
          },
          {
            text: '关于',
            items: [
              { text: '关于', link: '/about/about' },
              { text: '常见问题', link: '/about/problem' },
              // { text: '源码导读', link: '/about/development' },
              { text: '致谢', link: '/about/thanks' },
              { text: 'Q&A', link: '/about/qna' },
              { text: '联系方式', link: '/about/contact' },
            ],
          },
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/kulipai/luahook' },
          { icon: 'telegram', link: 'https://t.me/luaXposed' },
        ],
        footer: {
          message: 'Made with ❤️',
          copyright: 'Copyright © 2025-present <a href="https://github.com/KuLiPai">KuLiPai</a>'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'LuaHook',
      description: 'LuaHook Website',
      themeConfig: {
        logo: '/logo.png',
        nav: [
          { text: 'Download', link: 'https://github.com/KuLiPai/LuaHook/releases/latest' }
        ],
        sidebar: [
          {
            items: [
              { text: 'Quick Start', link: '/en/quickstart' },
            ],
          },
          {
            text: 'Getting Started',
            items: [
              { text: 'Introduction', link: '/en/introduction' },
              { text: 'Installation & Activation', link: '/en/activate' },
              { text: 'Your First Script', link: '/en/firstscript' },
              { text: 'Packaging', link: '/en/packaged' }
            ],
          },
          {
            text: 'Manual',
            items: [
              {
                text: 'Java Hook',
                items: [
                  { text: 'hook', link: '/en/manual/hook' },
                  { text: 'lpparam', link: '/en/manual/lpparam' },
                  { text: 'field', link: '/en/manual/field' },
                  { text: 'find/import Class', link: '/en/manual/import' },
                  { text: 'new/invoke', link: '/en/manual/invoke' },
                ]
              },
              {
                text: 'Native Hook',
                items: [
                  { text: 'Memory Management', link: '/en/manual/native/memory_alloc' },
                  { text: 'Memory I/O', link: '/en/manual/native/memory_io' },
                  { text: 'String Operations', link: '/en/manual/native/memory_string' },
                  { text: 'Pointer Operations', link: '/en/manual/native/pointer' },
                  { text: 'Modules & Symbols', link: '/en/manual/native/module' },
                  { text: 'Hook Interface', link: '/en/manual/native/hook' },
                  { text: 'Compatibility', link: '/en/manual/native/legacy' },
                ]
              },
              {
                text: 'Others',
                items: [
                  { text: 'json', link: '/en/manual/json' },
                  { text: 'task', link: '/en/manual/task' },
                  { text: 'file', link: '/en/manual/file' },
                  { text: 'http', link: '/en/manual/http' },
                  { text: 'Luaj++', link: '/en/luaj++' },
                ],
              },
            ],
          },
          {
            text: 'Examples',
            items: [
              { text: 'Monitor Volume Buttons', link: '/en/example/monitor-volume-buttons' },
              { text: 'Inject SO File', link: '/en/example/inject-so-file' },
              { text: 'Write Settings Page', link: '/en/example/write-setting' },
            ],
          },
          {
            text: 'About',
            items: [
              { text: 'About', link: '/en/about/about' },
              { text: 'FAQ', link: '/en/about/problem' },
              { text: 'Thanks', link: '/en/about/thanks' },
              { text: 'Q&A', link: '/en/about/qna' },
              { text: 'Contact', link: '/en/about/contact' },
            ],
          },
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/kulipai/luahook' },
          { icon: 'telegram', link: 'https://t.me/luaXposed' },
        ],
        footer: {
          message: 'Made with ❤️',
          copyright: 'Copyright © 2025-present <a href="https://github.com/KuLiPai">KuLiPai</a>'
        }
      }
    }
  },

  rewrites: {
    'zh/:path*': ':path*'
  }

});
