# 第1章 快速开始

这章带你快速搭建一个 OpenClaw 环境。

## 环境要求

| 依赖 | 版本要求 |
|------|----------|
| Node.js | ≥ 18.x |
| npm / pnpm | 最新版 |
| Git | 任意版本 |

## 安装步骤

### 1. 安装 Node.js

前往 [Node.js 官网](https://nodejs.org/) 下载 LTS 版本。

验证安装：

```bash
node -v
# v18.x.x 或更高

npm -v
# 9.x.x 或更高
```

### 2. 全局安装 OpenClaw

```bash
npm install -g openclaw
```

### 3. 初始化工作区

```bash
# 创建工作目录
mkdir my-claw
cd my-claw

# 初始化
openclaw init
```

这会创建以下结构：

```
my-claw/
├── config.yaml        # 主配置文件
├── MEMORY.md          # 长期记忆
├── AGENTS.md          # Agent 定义
├── SOUL.md            # 核心行为准则
├── USER.md            # 用户信息
└── memory/            # 每日笔记
```

### 4. 配置 API Key

编辑 `config.yaml`，添加你的模型 API Key：

```yaml
models:
  default: openai
  providers:
    openai:
      apiKey: "sk-your-api-key"
      model: "gpt-4o"
```

::: tip 获取 API Key
- OpenAI: https://platform.openai.com/api-keys
- Claude: https://console.anthropic.com/
- 国内模型（推荐）: 智谱、通义千问、DeepSeek 等
:::

### 5. 启动服务

```bash
openclaw start
```

看到类似输出说明启动成功：

```
🦞 OpenClaw is running!
  Local:   http://localhost:3000
  Status:  Ready
```

## 第一次对话

打开浏览器访问 `http://localhost:3000`，或者在命令行：

```bash
openclaw chat
```

试着问它：

```
你好！介绍一下你自己
```

## 下一步

- [第2章 命令行与配置](/cn/adopt/chapter2) - 深入了解配置选项
- [第3章 渠道接入](/cn/adopt/chapter3) - 连接到 QQ、Telegram