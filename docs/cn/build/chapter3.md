# 第 3 章 提示词系统

工具是 Agent 可以执行的操作。

## 工具类型

| 类型 | 说明 |
|------|------|
| 内置工具 | 文件读写、命令执行等 |
| 技能工具 | 技能提供的专用工具 |
| 自定义工具 | 用户开发的工具 |

## 工具定义

工具通过 Markdown 文件定义：

```markdown
# weather_query

描述：查询指定城市的天气

参数：
- city (string): 城市名称
- unit (string, 可选): 温度单位，默认 celsius

返回：天气信息 JSON

示例：
{
  "city": "Beijing",
  "unit": "celsius"
}
```

## 工具实现

### Shell 脚本

```bash
#!/bin/bash
# scripts/weather.sh

CITY=$1
curl -s "wttr.in/${CITY}?format=j1"
```

### Node.js

```javascript
// scripts/weather.js
const city = process.argv[2];
const response = await fetch(`https://wttr.in/${city}?format=j1`);
console.log(await response.text());
```

## 安全考虑

- 所有工具执行在沙箱环境中
- 危险操作需要用户确认
- 敏感文件路径受限

## 下一步

- [第 4 章 工具系统](/cn/build/chapter4) - 开发自定义工具