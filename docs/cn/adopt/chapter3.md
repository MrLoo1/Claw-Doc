# 第 3 章 自动化任务入门

OpenClaw 支持多种消息渠道，让你的助理可以在不同平台上服务。

## 支持的渠道

| 渠道 | 状态 | 说明 |
|------|------|------|
| Telegram | ✅ 稳定 | Bot API |
| QQ | ✅ 稳定 | NapCat / LLOneBot |
| Discord | ✅ 稳定 | Bot Token |
| 微信 | ⚠️ 实验 | ComWechat |
| Slack | 🚧 开发中 | - |

## Telegram 接入

### 1. 创建 Bot

1. 在 Telegram 搜索 `@BotFather`
2. 发送 `/newbot`
3. 按提示设置名称
4. 获得类似 `123456:ABC-xxx` 的 Token

### 2. 配置

```yaml
channels:
  telegram:
    enabled: true
    token: "${TELEGRAM_BOT_TOKEN}"
```

### 3. 启动

```bash
openclaw start
```

现在你可以在 Telegram 里和你的 Bot 对话了！

## QQ 接入

### 1. 安装 NapCat

NapCat 是一个 QQ 协议实现：

```bash
# 参考 https://napneko.github.io/ 安装
```

### 2. 配置 NapCat

确保 NapCat 开启了 WebSocket 服务，默认端口 3001。

### 3. 配置 OpenClaw

```yaml
channels:
  qqbot:
    enabled: true
    websocket: "ws://localhost:3001"
```

### 4. 启动

先启动 NapCat 并登录 QQ，然后启动 OpenClaw。

## Discord 接入

### 1. 创建应用

1. 访问 [Discord Developer Portal](https://discord.com/developers/applications)
2. 创建新应用
3. 添加 Bot，获取 Token
4. 开启 Message Content Intent

### 2. 邀请 Bot

在 OAuth2 > URL Generator 中：
- 勾选 `bot` 和 `applications.commands`
- 勾选需要的权限（Send Messages, Read Messages 等）
- 复制链接并在浏览器中邀请 Bot

### 3. 配置

```yaml
channels:
  discord:
    enabled: true
    token: "${DISCORD_BOT_TOKEN}"
```

## 多渠道同时运行

```yaml
channels:
  telegram:
    enabled: true
    token: "${TELEGRAM_BOT_TOKEN}"
  discord:
    enabled: true
    token: "${DISCORD_BOT_TOKEN}"
  qqbot:
    enabled: true
    websocket: "ws://localhost:3001"
```

一个 OpenClaw 实例可以同时连接多个渠道！

## 下一步

- [第4章 技能系统](/cn/adopt/chapter4) - 扩展助理能力
- [附录 B：配置文件详解](/cn/appendix/appendix-b) - 完整配置参考