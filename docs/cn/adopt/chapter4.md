# 第4章 技能系统

技能 (Skills) 是 OpenClaw 的核心扩展机制。

## 什么是技能？

技能是一组预定义的能力模块，包括：
- 🛠️ **工具** - 可执行的操作
- 📝 **提示词** - 专门的知识和指令
- ⚙️ **配置** - 可自定义的参数

## 内置技能

| 技能 | 功能 |
|------|------|
| `weather` | 天气查询 |
| `healthcheck` | 系统健康检查 |
| `video-frames` | 视频帧提取 |
| `qqbot-cron` | QQ 定时提醒 |
| `qqbot-media` | QQ 多媒体支持 |

## 启用技能

在 `config.yaml` 中：

```yaml
skills:
  enabled:
    - weather
    - healthcheck
```

## 技能配置

部分技能支持自定义配置：

```yaml
skills:
  weather:
    defaultLocation: "Beijing"
    units: "metric"
  
  healthcheck:
    checkInterval: 3600  # 每小时检查一次
```

## 使用技能

启用后，直接对话即可使用：

```
北京今天天气怎么样？
```

```
帮我检查一下系统状态
```

技能会自动被触发。

## 安装社区技能

```bash
# 从 npm 安装
openclaw skill install @openclaw/skill-calendar

# 从 Git 仓库安装
openclaw skill install github:user/repo
```

## 开发自定义技能

详见 [第5章 技能开发](/cn/build/chapter5)。

## 下一步

- [第5章 记忆与上下文](/cn/adopt/chapter5) - 让助理记住重要信息
- [第5章 技能开发](/cn/build/chapter5) - 开发自己的技能