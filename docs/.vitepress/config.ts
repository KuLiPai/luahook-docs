import { defineConfig } from 'vitepress';

export default defineConfig({
  //lang: 'en-US',
  //title: 'LuaHook',
  //description: 'LuaHook Website',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],


  locales: {
    // 默认语言：简体中文
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
            ],
          },
          {
            text: '手册',
            items: [
              { text: 'Hook', link: '/manual/hook' },
              { text: 'lpparam', link: '/manual/lpparam' },
              { text: 'Field 字段', link: '/manual/field' },
              { text: 'find/import 类', link: '/manual/import' },
              { text: 'new/invoke 构造与函数', link: '/manual/invoke' },
              { text: 'Luaj++', link: '/luaj++' },
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
              { text: 'LuaHook团队', link: '/about/author-profile' },
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
            ],
          },
          {
            text: 'Manual',
            items: [
              { text: 'Hook', link: '/en/manual/hook' },
              { text: 'lpparam', link: '/en/manual/lpparam' },
              { text: 'Field', link: '/en/manual/field' },
              { text: 'find/import Class', link: '/en/manual/import' },
              { text: 'new/invoke Constructor & Function', link: '/en/manual/invoke' },
              { text: 'Luaj++', link: '/en/luaj++' },
            ],
          },
          {
            text: 'About',
            items: [],
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

});
