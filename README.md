# 🦞 Claw Doc

> OpenClaw 官方文档 - 从零开始，领养你的 AI 助理

[![Deploy](https://img.shields.io/github/actions/workflow/status/MrLoo1/Claw-Doc/deploy.yml?branch=main&style=flat-square)](https://github.com/MrLoo1/Claw-Doc/actions)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue?style=flat-square)](https://mrloo1.github.io/Claw-Doc/)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/MrLoo1/Claw-Doc?style=flat-square)](https://github.com/MrLoo1/Claw-Doc/commits/main)

---

## 📖 在线文档

**👉 访问在线文档：https://mrloo1.github.io/Claw-Doc/**

---

## ✨ 特性

| 特性 | 说明 |
|------|------|
| 🦞 **智能对话** | 支持多种大模型，灵活切换，打造个性化 AI 助理 |
| 📱 **多渠道接入** | QQ、Telegram、Discord、微信等，一个助理多个平台 |
| ⚡ **技能系统** | 模块化技能扩展，按需加载，无限可能 |
| 🧠 **长期记忆** | 持久化记忆系统，让助理记住重要的事情 |
| ⏰ **定时任务** | 支持定时提醒和周期性任务自动化 |
| 🔧 **高度可定制** | 从配置到代码，每个层面都可以自定义 |

---

## 📦 文档结构

```
Claw-Doc/
├── docs/
│   ├── index.md              # 首页
│   ├── cn/
│   │   ├── adopt/            # 领养 Claw（使用篇）- 8 章
│   │   │   ├── chapter0.md   # 写在开头
│   │   │   ├── chapter1.md   # 快速开始
│   │   │   ├── chapter2.md   # 命令行与配置
│   │   │   ├── chapter3.md   # 渠道接入
│   │   │   ├── chapter4.md   # 技能系统
│   │   │   ├── chapter5.md   # 记忆与上下文
│   │   │   ├── chapter6.md   # 定时任务
│   │   │   ├── chapter7.md   # 多模型配置
│   │   │   └── chapter8.md   # 生产环境部署
│   │   ├── build/            # 构建 Claw（开发篇）- 6 章
│   │   │   ├── index.md      # 写在开头
│   │   │   ├── chapter1.md   # 核心架构
│   │   │   ├── chapter2.md   # 提示词系统
│   │   │   ├── chapter3.md   # 工具系统
│   │   │   ├── chapter4.md   # 渠道开发
│   │   │   ├── chapter5.md   # 技能开发
│   │   │   └── chapter6.md   # 安全加固
│   │   └── appendix/         # 附录
│   │       ├── appendix-a.md # 命令速查表
│   │       ├── appendix-b.md # 配置文件详解
│   │       ├── appendix-c.md # 常见问题
│   │       └── use-cases.md  # 应用场景大全
│   └── .vitepress/
│       ├── config.mts        # VitePress 配置
│       └── theme/            # 自定义主题
├── scripts/                  # JavaScript 脚本
│   ├── back-to-top.js        # 返回顶部
│   └── reading-progress.js   # 阅读进度条
├── .github/workflows/
│   └── deploy.yml            # GitHub Actions 部署配置
├── package.json              # 项目依赖
└── README.md                 # 项目说明
```

---

## 🚀 快速开始

### 环境要求

| 依赖 | 版本要求 |
|------|----------|
| Node.js | >= 18.x |
| npm | >= 9.x |

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run docs:dev
```

然后访问 http://localhost:5173/Claw-Doc/

### 构建生产版本

```bash
npm run docs:build
```

### 本地预览构建结果

```bash
npm run docs:preview
```

---

## 📝 部署流程

本项目通过 **GitHub Actions** 自动部署到 **GitHub Pages**。

```
┌─────────────────┐
│  推送代码到 main  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  GitHub Actions  │
│   自动触发构建    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   npm install   │
│   npm run build │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  部署到 GitHub   │
│     Pages       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   网站自动更新    │
└─────────────────┘
```

**访问地址：** https://mrloo1.github.io/Claw-Doc/

---

## 🛠️ 技术栈

| 技术 | 说明 | 链接 |
|------|------|------|
| **VitePress 2.x** | 基于 Vite 的静态站点生成器 | [官网](https://vitepress.dev/) |
| **Vue 3** | 渐进式 JavaScript 框架 | [官网](https://vuejs.org/) |
| **Markdown** | 内容编写格式 | [指南](https://www.markdownguide.org/) |
| **GitHub Actions** | CI/CD 自动化部署 | [文档](https://docs.github.com/actions) |
| **GitHub Pages** | 静态网站托管 | [文档](https://pages.github.com/) |

---

## 📋 应用场景

| 领域 | 应用场景 |
|------|----------|
| 🌅 **个人效率** | 早间简报、邮件自动分类、智能日程管理 |
| 💻 **编程开发** | 代码生成与审查、自动化测试、文档生成 |
| 📢 **内容创作** | 社交媒体运营、写作辅助、多平台发布 |
| 🏢 **商务销售** | 客户支持、CRM 管理、销售线索跟进、会议预约 |
| 🤖 **多智能体协作** | 团队项目管理、工作流编排、知识库共享与检索 |
| 🔧 **更多场景** | 智能家居控制、金融数据分析、教育培训辅助 |

> 📝 更多场景正在编写中，敬请期待！

---

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

### 贡献流程

1. **Fork** 本仓库
2. 创建特性分支：`git checkout -b feature/AmazingFeature`
3. 提交更改：`git commit -m 'Add some AmazingFeature'`
4. 推送到分支：`git push origin feature/AmazingFeature`
5. 开启 **Pull Request**

### 开发规范

- 遵循 Markdown 语法规范
- 保持文档结构清晰
- 提交信息使用语义化格式

---

## 📄 许可证

本项目采用 **MIT License** 开源许可证 - 详见 [LICENSE](LICENSE) 文件

---

## 👨‍💻 作者

| 角色 | GitHub |
|------|--------|
| **Author** | [@MrLoo1](https://github.com/MrLoo1) |

---

## 🙏 致谢

感谢以下开源项目：

| 项目 | 说明 |
|------|------|
| [OpenClaw](https://github.com/openclaw/openclaw) | AI 助理框架 |
| [hello-claw](https://github.com/datawhalechina/hello-claw) | 文档结构参考 |
| [VitePress](https://vitepress.dev/) | 文档引擎 |

---

## 📬 联系方式

- 📧 问题反馈：[GitHub Issues](https://github.com/MrLoo1/Claw-Doc/issues)
- 💬 社区讨论：[GitHub Discussions](https://github.com/MrLoo1/Claw-Doc/discussions)

---

<p align="center">
  Made with 🦞 by OpenClaw
</p>
<p align="center">
  Copyright © 2025 MrLoo1
</p>