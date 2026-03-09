# 第7章 多模型配置

OpenClaw 支持多种 AI 模型，可以根据需求灵活切换。

## 支持的模型

| 提供商 | 模型 | 特点 |
|--------|------|------|
| OpenAI | GPT-4o, GPT-4, GPT-3.5 | 综合能力强 |
| Anthropic | Claude 3.5 Sonnet, Claude 3 Opus | 长文本、推理 |
| Google | Gemini Pro | 多模态 |
| 国内 | 通义千问, 智谱, DeepSeek | 中文优化、便宜 |
| 本地 | Ollama, LM Studio | 隐私、免费 |

## 配置方法

```yaml
models:
  default: openai
  
  providers:
    openai:
      apiKey: "${OPENAI_API_KEY}"
      model: "gpt-4o"
      
    claude:
      apiKey: "${ANTHROPIC_API_KEY}"
      model: "claude-3-5-sonnet-20241022"
      
    deepseek:
      apiKey: "${DEEPSEEK_API_KEY}"
      model: "deepseek-chat"
      baseURL: "https://api.deepseek.com/v1"
      
    ollama:
      baseURL: "http://localhost:11434"
      model: "llama3"
```

## 切换模型

### 命令行

```bash
openclaw config set models.default claude
```

### 对话切换

```
切换到 Claude
```

```
用 DeepSeek 回答这个问题
```

## 成本优化

针对不同任务使用不同模型：

```yaml
models:
  default: deepseek        # 日常对话用便宜的
  reasoning: claude        # 复杂推理用强的
  code: openai             # 写代码用 GPT
```

## 下一步

- [第8章 生产环境部署](/cn/adopt/chapter8) - 部署到服务器