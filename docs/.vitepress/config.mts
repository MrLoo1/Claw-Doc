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
              text: '📖 领养 Claw（使用篇）',
              items: [
                { text: '写在开头', link: '/cn/adopt/chapter0' },
                { text: '第 1 章 快速上手', link: '/cn/adopt/chapter1' },
                { text: '第 2 章 移动端接入', link: '/cn/adopt/chapter2' },
                { text: '第 3 章 自动化任务入门', link: '/cn/adopt/chapter3' },
                { text: '第 4 章 Skills 技能系统', link: '/cn/adopt/chapter4' },
                { text: '第 5 章 外部服务集成', link: '/cn/adopt/chapter5' },
                { text: '第 6 章 生产环境部署', link: '/cn/adopt/chapter6' },
                { text: '第 7 章 多模型与成本优化', link: '/cn/adopt/chapter7' },
                { text: '第 8 章 个人助理系统', link: '/cn/adopt/chapter8' },
                { text: '第 9 章 内容创作工具链', link: '/cn/adopt/chapter9' },
                { text: '第 10 章 开发者效率提升', link: '/cn/adopt/chapter10' },
                { text: '第 11 章 故障排查与优化', link: '/cn/adopt/chapter11' },
              ]
            }
          ],
          '/cn/appendix/': [
            {
              text: '📎 附录',
              items: [
                { text: '附录 A：命令速查表', link: '/cn/appendix/appendix-a' },
                { text: '附录 B：配置文件详解', link: '/cn/appendix/appendix-b' },
                { text: '附录 C：常见问题', link: '/cn/appendix/appendix-c' },
                { text: '附录 D：学习资源汇总', link: '/cn/appendix/appendix-d' },
                { text: '应用场景大全', link: '/cn/appendix/use-cases' },
              ]
            }
          ],
          '/cn/build/': [
            {
              text: '🛠️ 构建 Claw（开发篇）',
              items: [
                { text: '写在开头', link: '/cn/build/' },
                { text: '第 1 章 核心定位与设计理念', link: '/cn/build/chapter1' },
                { text: '第 2 章 整体架构解析', link: '/cn/build/chapter2' },
                { text: '第 3 章 提示词系统', link: '/cn/build/chapter3' },
                { text: '第 4 章 工具系统', link: '/cn/build/chapter4' },
                { text: '第 5 章 消息循环与事件驱动', link: '/cn/build/chapter5' },
                { text: '第 6 章 多渠道接入', link: '/cn/build/chapter6' },
                { text: '---', link: '' },
                { text: '📌 已有案例分析', type: 'separator' },
                { text: '第 7 章 轻量化方案', link: '/cn/build/chapter7' },
                { text: '第 8 章 安全加固方案', link: '/cn/build/chapter8' },
                { text: '第 9 章 硬件方案', link: '/cn/build/chapter9' },
                { text: '第 10 章 案例对比总结', link: '/cn/build/chapter10' },
                { text: '---', link: '' },
                { text: '🔧 定制你的 Claw', type: 'separator' },
                { text: '第 11 章 定制路径概览', link: '/cn/build/chapter11' },
                { text: '第 12 章 配置文件级定制', link: '/cn/build/chapter12' },
                { text: '第 13 章 Skill 编写', link: '/cn/build/chapter13' },
                { text: '第 14 章 渠道接入', link: '/cn/build/chapter14' },
                { text: '第 15 章 完整定制案例', link: '/cn/build/chapter15' },
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