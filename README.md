# 🦞 Claw Doc

> OpenClaw 官方文档 - 从零开始，领养你的 AI 助理

[![Deploy](https://img.shields.io/github/actions/workflow/status/MrLoo1/Claw-Doc/deploy.yml?branch=main)](https://github.com/MrLoo1/Claw-Doc/actions)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)](https://mrloo1.github.io/Claw-Doc/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

---

## 📖 在线文档

访问在线文档：**https://mrloo1.github.io/Claw-Doc/**

## ✨ 特性

- 🦞 **智能对话** - 支持多种大模型，灵活切换
- 📱 **多渠道接入** - QQ、Telegram、Discord、微信等
- ⚡ **技能系统** - 模块化技能扩展，按需加载
- 🧠 **长期记忆** - 持久化记忆系统
- ⏰ **定时任务** - 支持定时提醒和周期性任务
- 🔧 **高度可定制** - 从配置到代码都可自定义

## 📦 文档结构

```
docs/
├── index.md              # 首页
├── cn/
│   ├── adopt/            # 领养 Claw（使用篇）
│   │   ├── chapter0.md   # 写在开头
│   │   ├── chapter1.md   # 快速开始
│   │   └── ...
│   ├── build/            # 构建 Claw（开发篇）
│   │   ├── chapter1.md   # 核心架构
│   │   └── ...
│   └── appendix/         # 附录
│       ├── appendix-a.md # 命令速查表
│       └── ...
└── .vitepress/
    ├── config.mts        # VitePress 配置
    └── theme/            # 自定义主题
```

## 🚀 本地开发

### 环境要求

- Node.js >= 18.x
- npm >= 9.x

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run docs:dev
```

访问 http://localhost:5173/Claw-Doc/

### 构建生产版本

```bash
npm run docs:build
```

### 本地预览构建结果

```bash
npm run docs:preview
```

## 📝 部署

本项目通过 GitHub Actions 自动部署到 GitHub Pages。

1. 推送代码到 `main` 分支
2. GitHub Actions 自动构建
3. 部署到 GitHub Pages

访问：**https://mrloo1.github.io/Claw-Doc/**

## 🛠️ 技术栈

- [VitePress 2.x](https://vitepress.dev/) - 基于 Vite 的静态站点生成器
- [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Markdown](https://www.markdownguide.org/) - 内容编写格式

## 📋 应用场景

| 领域 | 应用场景 |
|------|----------|
| 🌅 **个人效率** | 早间简报、邮件自动分类、智能日程管理 |
| 💻 **编程开发** | 代码生成与审查、自动化测试、文档生成 |
| 📢 **内容创作** | 社交媒体运营、写作辅助、多平台发布 |
| 🏢 **商务销售** | 客户支持、CRM 管理、销售线索跟进 |
| 🤖 **多智能体协作** | 团队项目管理、工作流编排、知识库共享 |
| 🔧 **更多场景** | 智能家居、金融数据分析、教育培训 |

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 👨‍💻 作者

- **MrLoo1** - [GitHub](https://github.com/MrLoo1)

## 🙏 致谢

- [OpenClaw](https://github.com/openclaw/openclaw) - AI 助理框架
- [hello-claw](https://github.com/datawhalechina/hello-claw) - 文档结构参考
- [VitePress](https://vitepress.dev/) - 文档引擎

---

_Made with 🦞 by OpenClaw | Copyright © 2025 MrLoo1_