# 第1章 快速开始

这章带你快速搭建一个 OpenClaw 环境，5 分钟上手！

---

## 📋 系统要求

| 项目 | 最低要求 | 推荐配置 |
|------|---------|---------|
| RAM | 8GB | 16GB |
| 存储空间 | 10GB | 20GB |
| Node.js | v18.x | v22+ (最新 LTS) |
| npm / pnpm | 最新版 | 最新版 |
| Git | 任意版本 | 最新版 |
| 操作系统 | Win 10 / macOS 12 / Ubuntu 20.04 | 最新稳定版 |

**其他要求：**
- API Key（来自 OpenAI、Anthropic、智谱、通义千问等）
- 稳定的网络连接

---

## 🚀 安装方法

### 方法一：npm 全局安装（推荐）

最快的方式，一条命令完成安装：

```bash
npm install -g openclaw@latest
```

验证安装：
```bash
openclaw --version
# 应显示版本号，如：2026.3.8
```

::: tip 安装失败？
如果提示 "command not found"，请确保 npm 全局 bin 目录在 PATH 中：
```bash
# 查看 npm 全局路径
npm config get prefix

# Windows 添加到 PATH
setx PATH "%PATH%;%APPDATA%\npm"
```
:::

### 方法二：使用安装向导（推荐新手）

运行向导完成配置：

```bash
openclaw onboard --install-daemon
```

`--install-daemon` 参数会设置后台服务：
- **macOS**: launchd
- **Linux**: systemd
- **Windows**: 计划任务

向导会引导你完成：
1. 配置 API Key
2. 设置工作目录
3. 配置第一个通道（QQ/Telegram/Discord）
4. 安装后台服务

### 方法三：从源码构建

适合开发者或需要自定义的用户：

```bash
# 克隆仓库
git clone https://github.com/openclaw/openclaw.git
cd openclaw

# 安装依赖
npm install

# 构建
npm run build

# 链接到全局
npm link
```

---

## ⚙️ 初始配置

### 1. 运行配置向导

```bash
openclaw init
```

这会创建 `~/.openclaw/openclaw.json` 配置文件。

### 2. 配置 API Key

编辑配置文件 `~/.openclaw/openclaw.json`：

```json
{
  "models": {
    "providers": {
      "openai": {
        "apiKey": "sk-your-api-key",
        "model": "gpt-4o"
      }
    }
  }
}
```

或使用环境变量（更安全）：
```bash
# Windows
setx OPENAI_API_KEY "sk-your-api-key"

# macOS/Linux
export OPENAI_API_KEY="sk-your-api-key"
```

::: tip 获取 API Key
- **OpenAI**: https://platform.openai.com/api-keys
- **Claude**: https://console.anthropic.com/
- **智谱 GLM**: https://open.bigmodel.cn/
- **通义千问**: https://dashscope.aliyun.com/
- **DeepSeek**: https://platform.deepseek.com/
:::

### 3. 配置通道（以 QQ 为例）

```bash
openclaw channels add --channel qqbot --token "AppID:AppSecret"
```

**获取 QQ Bot 凭据：**
1. 前往 [QQ 开放平台](https://q.qq.com/)
2. 创建机器人
3. 获取 AppID 和 AppSecret
4. 配置沙箱成员（添加你的 QQ 号）

---

## 🔧 验证安装

运行诊断工具检查配置：

```bash
openclaw doctor
```

预期输出：
```
✓ Gateway 可访问
✓ 配置有效
✓ 通道已配置
✓ Agent 已就绪
✓ Memory 系统正常
```

如有问题，运行修复：
```bash
openclaw doctor --fix
```

---

## 🏃 启动服务

### 前台运行（调试模式）
```bash
openclaw gateway
```

### 后台运行（推荐）
```bash
openclaw gateway start
```

### 查看状态
```bash
openclaw status
```

预期输出：
```
🦞 OpenClaw 2026.3.8
Gateway: local · ws://127.0.0.1:18789
Agents: 1 · Sessions: 1
Channels: QQ Bot ON · OK
```

---

## 💬 第一次对话

### Web 界面
打开浏览器访问 `http://localhost:18789`，使用 Web 界面与 Agent 对话。

### 命令行
```bash
openclaw chat
```

### 在配置的通道中
在 QQ/Telegram/Discord 中向机器人发送消息：
```
你好，OpenClaw！介绍一下你自己
```

---

## 📚 常用命令速查

| 命令 | 说明 |
|------|------|
| `openclaw --version` | 查看版本 |
| `openclaw status` | 查看运行状态 |
| `openclaw doctor` | 运行诊断检查 |
| `openclaw doctor --fix` | 自动修复问题 |
| `openclaw gateway start` | 启动 Gateway |
| `openclaw gateway stop` | 停止 Gateway |
| `openclaw gateway restart` | 重启 Gateway |
| `openclaw logs --follow` | 实时查看日志 |
| `openclaw channels list` | 列出已配置通道 |
| `openclaw channels status --probe` | 测试通道连接 |
| `openclaw agents list` | 列出 Agents |
| `openclaw update` | 更新到最新版本 |

---

## 🛠️ 故障排除

### 问题：Gateway 无法启动

**症状：** `openclaw gateway start` 失败

**解决：**
1. 检查端口 18789 是否被占用
2. 运行 `openclaw doctor --fix`
3. 检查配置文件语法：`openclaw config validate`

### 问题：无法接收消息

**症状：** 发送消息给机器人，没有回复

**解决：**
1. 检查通道状态：`openclaw channels status --probe`
2. 确认 API Key 有效
3. 检查网络连接
4. 查看日志：`openclaw logs --follow`

### 问题：QQ Bot 连接失败

**症状：** `QQ Bot disconnected`

**解决：**
1. 确认 AppID/AppSecret 正确
2. 检查 QQ 开放平台沙箱配置
3. 确认机器人已添加为好友
4. 重新生成 AppSecret 并重试

### 问题：模型调用失败

**症状：** 返回 "API Error" 或 "Rate Limit"

**解决：**
1. 检查 API Key 余额
2. 确认 API Key 有权限调用该模型
3. 尝试切换其他模型

---

## 🎯 下一步

- [第2章 命令行与配置](/cn/adopt/chapter2) - 深入了解配置选项
- [第3章 渠道接入](/cn/adopt/chapter3) - 连接到 QQ、Telegram、Discord
- [第4章 多 Agent 配置](/cn/adopt/chapter4) - 配置多个独立 Agent
- [附录 A：命令速查表](/cn/appendix/appendix-a) - 完整命令参考

---

## 🔗 相关资源

- **官方文档**: https://docs.openclaw.ai
- **GitHub**: https://github.com/openclaw/openclaw
- **社区 Discord**: https://discord.com/invite/clawd
- **Skills 市场**: https://clawhub.com
- **QQ 插件文档**: https://github.com/sliverp/qqbot

---

## 💡 提示

1. **配置文件位置:** `~/.openclaw/openclaw.json`
2. **敏感信息:** 可放在 `~/.openclaw/.env` 中
3. **项目级配置:** 在项目根目录创建 `openclaw.config.json`
4. **自动更新:** 定期运行 `openclaw update`
5. **备份配置:** 复制 `~/.openclaw/openclaw.json` 到安全位置

---

**🎉 恭喜！** 现在你已经拥有了一个本地运行的 AI 助理！
