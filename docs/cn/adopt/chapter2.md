# 第 2 章 移动端接入

OpenClaw 支持通过 iOS 和 Android 应用连接到 Gateway，让你在手机上也能使用 AI 助理。

## 架构概览

移动设备作为 **Node（节点）** 连接到 Gateway，而不是直接运行 Gateway：

```
iOS/Android App ⇄ WebSocket ⇄ Gateway ⇄ AI Model
                              (运行在服务器/电脑上)
```

**前置要求：**
- Gateway 已在另一台设备上运行（macOS、Linux 或 Windows WSL2）
- 移动设备能访问 Gateway 的 WebSocket 端口（默认 `18789`）

---

## iOS App

> ⚠️ iOS App 目前为内部预览版，尚未公开发布。

### 功能

- 连接到 Gateway（LAN 或 Tailnet）
- Canvas 渲染 + A2UI 支持
- 相机拍照/录屏
- 位置获取
- 语音唤醒 + 通话模式

### 连接步骤

**1. 启动 Gateway**

```bash
openclaw gateway --port 18789
```

**2. 在 iOS App 中配置连接**

打开 Settings，选择发现的 Gateway（或启用 Manual Host 手动输入地址）

**3. 批准配对请求**

```bash
# 查看待批准的设备
openclaw devices list

# 批准设备
openclaw devices approve <requestId>
```

**4. 验证连接**

```bash
openclaw nodes status
```

### 发现方式

| 方式 | 说明 |
|------|------|
| Bonjour (LAN) | Gateway 自动广播 `_openclaw-gw._tcp`，App 自动发现 |
| Tailnet | 通过 Tailscale 跨网络连接，使用 unicast DNS-SD |
| 手动输入 | 在 Settings 中启用 Manual Host，输入 host:port |

### Canvas + A2UI

iOS 节点渲染 WebView Canvas，可通过 `node.invoke` 控制：

```bash
# 导航到指定 URL
openclaw nodes invoke --node "iOS Node" --command canvas.navigate --params '{"url":"http://gateway-host:18789/__openclaw__/canvas/"}'

# 执行 JavaScript
openclaw nodes invoke --node "iOS Node" --command canvas.eval --params '{"javaScript":"document.title"}'

# 截图
openclaw nodes invoke --node "iOS Node" --command canvas.snapshot --params '{"maxWidth":900,"format":"jpeg"}'
```

### 语音功能

- **Voice Wake**：语音唤醒（需 App 在前台）
- **Talk Mode**：连续对话模式

::: warning 注意
iOS 可能会在后台暂停音频，语音功能在 App 非活跃时为尽力而为模式。
:::

---

## Android App

### 功能

- 连接到 Gateway（LAN/Tailnet/手动）
- Chat 会话 + 历史记录
- Canvas + Camera
- 语音输入/输出
- 设备命令（通知、联系人、日历等）

### 连接步骤

**1. 启动 Gateway**

```bash
openclaw gateway --port 18789 --verbose
```

确认日志显示 `listening on ws://0.0.0.0:18789`

**2. 在 Android App 中配置**

打开 **Connect** 标签页：
- 使用 **Setup Code** 快速配对
- 或使用 **Manual** 模式手动输入

**3. 批准配对**

```bash
openclaw devices list
openclaw devices approve <requestId>
```

**4. 验证连接**

```bash
openclaw nodes status
```

### 跨网络连接（Tailnet）

当 Android 和 Gateway 在不同网络时，使用 Tailscale：

1. 在 Gateway 主机上设置 DNS-SD zone（如 `openclaw.internal.`）
2. 配置 Tailscale split DNS
3. 或直接使用 MagicDNS 名称 / Tailnet IP

### Canvas + Camera

```bash
# Canvas 导航
openclaw nodes invoke --node "<Android Node>" --command canvas.navigate --params '{"url":"http://gateway-host:18789/__openclaw__/canvas/"}'

# 拍照
openclaw nodes camera snap --node "<Android Node>" --facing front

# 录像
openclaw nodes camera clip --node "<Android Node>" --duration 10s
```

### Android 专属命令

Android 节点支持丰富的设备命令：

| 命令 | 功能 |
|------|------|
| `device.status` | 设备状态 |
| `notifications.list` | 通知列表 |
| `photos.latest` | 最新照片 |
| `contacts.search` | 搜索联系人 |
| `calendar.events` | 日历事件 |
| `motion.activity` | 运动活动 |

```bash
# 示例：获取通知列表
openclaw nodes invoke --node "<Android Node>" --command notifications.list --params '{}'

# 示例：获取最新照片
openclaw nodes invoke --node "<Android Node>" --command photos.latest --params '{"limit":1}'
```

---

## macOS App

macOS 应用可作为 Node 连接到 Gateway：

### 功能

- 菜单栏控制面板
- 语音唤醒 + PTT
- Talk Mode 覆盖层
- WebChat + 调试工具
- 远程 Gateway 控制（SSH）

### Node 模式

macOS App 连接到 Gateway WebSocket 后，暴露本地命令：

```bash
# 在 Mac 节点上执行命令
openclaw nodes run --node "<Mac Node>" -- echo "Hello"

# 发送通知
openclaw nodes notify --node "<Mac Node>" --title "Ping" --body "Gateway ready"
```

---

## 远程 Node Host（无头节点）

可以在任何机器上运行无头节点，将命令执行转发到该机器：

### 启动 Node Host

```bash
# 前台运行
openclaw node run --host <gateway-host> --port 18789 --display-name "Build Node"

# 安装为服务
openclaw node install --host <gateway-host> --port 18789 --display-name "Build Node"
openclaw node restart
```

### 配置 Exec 转发

```bash
# 设置默认节点
openclaw config set tools.exec.host node
openclaw config set tools.exec.node "<node-id>"
```

---

## 常见问题

### `NODE_BACKGROUND_UNAVAILABLE`

**原因**：节点 App 不在前台

**解决**：将 App 切换到前台（Canvas/Camera/录屏需要前台运行）

### `A2UI_HOST_NOT_CONFIGURED`

**原因**：Gateway 未配置 Canvas Host URL

**解决**：检查 `canvasHost` 配置

### 配对提示未出现

**解决**：手动运行 `openclaw devices list` 查看并批准

### 重装后无法重连

**原因**：Keychain 配对 token 已清除

**解决**：重新配对节点

---

## 相关命令

| 命令 | 说明 |
|------|------|
| `openclaw devices list` | 列出待配对设备 |
| `openclaw devices approve <id>` | 批准设备 |
| `openclaw devices reject <id>` | 拒绝设备 |
| `openclaw nodes status` | 查看节点状态 |
| `openclaw nodes describe --node <id>` | 查看节点详情 |
| `openclaw nodes invoke` | 调用节点命令 |
| `openclaw nodes camera snap` | 拍照 |
| `openclaw nodes screen record` | 录屏 |

---

## 下一步

- [第 3 章 自动化任务入门](/cn/adopt/chapter3) - 开始自动化工作流
- [附录 A：命令速查表](/cn/appendix/appendix-a) - 所有命令参考