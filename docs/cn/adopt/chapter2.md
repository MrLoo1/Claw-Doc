# 第 2 章 移动端接入

OpenClaw 提供了完整的命令行工具和灵活的配置系统。

## CLI 命令

### 基础命令

```bash
# 查看版本
openclaw --version

# 查看帮助
openclaw --help

# 初始化工作区
openclaw init

# 启动服务
openclaw start

# 停止服务
openclaw stop

# 查看状态
openclaw status
```

### 配置命令

```bash
# 查看当前配置
openclaw config

# 设置配置项
openclaw config set models.default claude

# 查看特定配置
openclaw config get models.providers.openai.apiKey
```

### 渠道命令

```bash
# 列出所有渠道
openclaw channel list

# 启用渠道
openclaw channel enable telegram

# 禁用渠道
openclaw channel disable qqbot
```

### 会话命令

```bash
# 开始对话
openclaw chat

# 查看会话列表
openclaw sessions

# 清除会话历史
openclaw clear
```

## 配置文件

### config.yaml

主配置文件，位于工作区根目录：

```yaml
# 模型配置
models:
  default: openai
  providers:
    openai:
      apiKey: "${OPENAI_API_KEY}"  # 支持环境变量
      model: "gpt-4o"
      baseURL: "https://api.openai.com/v1"  # 可选
    claude:
      apiKey: "${ANTHROPIC_API_KEY}"
      model: "claude-3-5-sonnet-20241022"
    ollama:
      baseURL: "http://localhost:11434"
      model: "llama3"

# 渠道配置
channels:
  telegram:
    enabled: true
    token: "${TELEGRAM_BOT_TOKEN}"
  qqbot:
    enabled: false
    websocket: "ws://localhost:3001"

# Agent 配置
agent:
  thinking: off  # on | off | stream
  maxTokens: 4096

# 记忆配置
memory:
  enabled: true
  maxMessages: 50

# 定时任务
cron:
  enabled: true
  timezone: "Asia/Shanghai"

# 日志
logging:
  level: info  # debug | info | warn | error
```

### 环境变量

创建 `.env` 文件：

```env
OPENAI_API_KEY=sk-xxx
ANTHROPIC_API_KEY=sk-ant-xxx
TELEGRAM_BOT_TOKEN=123456:ABC-xxx
```

::: warning 安全提示
永远不要把 API Key 直接写在 config.yaml 里，使用环境变量！
:::

## 下一步

- [第 3 章 自动化任务入门](/cn/adopt/chapter3) - 开始自动化工作流
- [附录 A：命令速查表](/cn/appendix/appendix-a) - 所有命令参考