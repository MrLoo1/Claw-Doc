# 第 5 章 消息循环与事件驱动

开发自定义技能扩展 OpenClaw 的能力。

## 技能结构

```
skills/
└── my-skill/
    ├── SKILL.md          # 技能描述
    ├── tools/            # 工具定义
    │   └── my-tool.md
    ├── prompts/          # 提示词模板
    └── config.json       # 配置项
```

## SKILL.md

```markdown
# My Skill

描述：技能说明

触发：当用户提到 xxx 时

## 功能
- 功能1
- 功能2
```

## 工具定义

`tools/my-tool.md`:

```markdown
# my_tool

描述：工具功能说明

参数：
- param1 (string): 参数说明
- param2 (number): 参数说明

返回：返回值说明
```

## 配置项

`config.json`:

```json
{
  "name": "my-skill",
  "version": "1.0.0",
  "config": {
    "apiKey": {
      "type": "string",
      "required": true
    }
  }
}
```

## 发布技能

```bash
# 发布到 npm
npm publish

# 或提交到 ClawHub
```

## 下一步

- [第6章 安全加固](/cn/build/chapter6) - 安全最佳实践