import { defineConfig } from 'vitepress'

const baseConfig = '/Claw-Doc/'

export default defineConfig({
  base: baseConfig,
  ignoreDeadLinks: [
    /^http:\/\/localhost/,
  ],
  markdown: {
    math: true
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "Claw Doc",
      description: "OpenClaw 官方文档 - 你的 AI 助理使用与开发指南",
      themeConfig: {
        logo: '🦞',
        outline: {
          level: [2, 3],
          label: '目录'
        },
        nav: [
          { text: '领养 Claw', link: '/cn/adopt/chapter0' },
          { text: '构建 Claw', link: '/cn/build/' },
          { text: 'GitHub', link: 'https://github.com/MrLoo1/Claw-Doc' },
        ],
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        },
        sidebar: {
          '/cn/adopt/': [
            {
              text: '领养 Claw（使用篇）',
              items: [
                { text: '第0章 写在开头', link: '/cn/adopt/chapter0' },
                { text: '第1章 快速开始', link: '/cn/adopt/chapter1' },
                { text: '第2章 命令行与配置', link: '/cn/adopt/chapter2' },
                { text: '第3章 渠道接入', link: '/cn/adopt/chapter3' },
                { text: '第4章 技能系统', link: '/cn/adopt/chapter4' },
                { text: '第5章 记忆与上下文', link: '/cn/adopt/chapter5' },
                { text: '第6章 定时任务', link: '/cn/adopt/chapter6' },
                { text: '第7章 多模型配置', link: '/cn/adopt/chapter7' },
                { text: '第8章 生产环境部署', link: '/cn/adopt/chapter8' },
              ]
            }
          ],
          '/cn/appendix/': [
            {
              text: '领养 Claw（使用篇）',
              items: [
                { text: '第0章 写在开头', link: '/cn/adopt/chapter0' },
                { text: '第1章 快速开始', link: '/cn/adopt/chapter1' },
                { text: '第2章 命令行与配置', link: '/cn/adopt/chapter2' },
              ]
            },
            {
              text: '构建 Claw（开发篇）',
              items: [
                { text: '写在开头', link: '/cn/build/' },
                { text: '第1章 核心架构', link: '/cn/build/chapter1' },
              ]
            },
            {
              text: '附录',
              items: [
                { text: '附录 A：命令速查表', link: '/cn/appendix/appendix-a' },
                { text: '附录 B：配置文件详解', link: '/cn/appendix/appendix-b' },
                { text: '附录 C：常见问题', link: '/cn/appendix/appendix-c' },
              ]
            }
          ],
          '/cn/build/': [
            {
              text: '构建 Claw（开发篇）',
              items: [
                { text: '写在开头', link: '/cn/build/' },
                { text: '第1章 核心架构', link: '/cn/build/chapter1' },
                { text: '第2章 提示词系统', link: '/cn/build/chapter2' },
                { text: '第3章 工具系统', link: '/cn/build/chapter3' },
                { text: '第4章 渠道开发', link: '/cn/build/chapter4' },
                { text: '第5章 技能开发', link: '/cn/build/chapter5' },
                { text: '第6章 安全加固', link: '/cn/build/chapter6' },
              ]
            }
          ]
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/MrLoo1/Claw-Doc' }
        ],
        editLink: {
          pattern: 'https://github.com/MrLoo1/Claw-Doc/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页'
        },
        footer: {
          message: 'Made with 🦞 by OpenClaw',
          copyright: 'Copyright © 2025 MrLoo1'
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        lastUpdated: {
          text: '最后更新于',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'short'
          }
        }
      }
    }
  }
})