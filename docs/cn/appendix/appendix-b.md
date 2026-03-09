# 附录 B：配置文件详解

完整的 `config.yaml` 配置参考。

```yaml
# ========================================
# 模型配置
# ========================================
models:
  default: openai                    # 默认模型
  
  providers:
    openai:
      apiKey: "${OPENAI_API_KEY}"
      model: "gpt-4o"
      baseURL: "https://api.openai.com/v1"
      
    claude:
      apiKey: "${ANTHROPIC_API_KEY}"
      model: "claude-3-5-sonnet-20241022"
      
    deepseek:
      apiKey: "${DEEPSEEK_API_KEY}"
      model: "deepseek-chat"
      baseURL: "https://api.deepseek.com/v1"

# ========================================
# 渠道配置
# ========================================
channels:
  telegram:
    enabled: true
    token: "${TELEGRAM_BOT_TOKEN}"
    
  qqbot:
    enabled: false
    websocket: "ws://localhost:3001"
    
  discord:
    enabled: false
    token: "${DISCORD_BOT_TOKEN}"

# ========================================
# Agent 配置
# ========================================
agent:
  thinking: off                      # on | off | stream
  maxTokens: 4096

# ========================================
# 记忆配置
# ========================================
memory:
  enabled: true
  maxMessages: 50
  autoSave: true

# ========================================
# 定时任务
# ========================================
cron:
  enabled: true
  timezone: "Asia/Shanghai"

# ========================================
# 技能配置
# ========================================
skills:
  enabled:
    - weather
    - healthcheck
    
  weather:
    defaultLocation: "Beijing"

# ========================================
# 日志配置
# ========================================
logging:
  level: info                        # debug | info | warn | error
```

## 环境变量

创建 `.env` 文件：

```env
OPENAI_API_KEY=sk-xxx
ANTHROPIC_API_KEY=sk-ant-xxx
TELEGRAM_BOT_TOKEN=123456:ABC-xxx
DISCORD_BOT_TOKEN=xxx
```