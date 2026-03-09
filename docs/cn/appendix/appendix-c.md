# 附录 C：常见问题

## 安装问题

### Q: npm install 报错？

尝试清除缓存：

```bash
npm cache clean --force
rm -rf node_modules
npm install
```

### Q: Node.js 版本太低？

使用 nvm 管理版本：

```bash
nvm install 18
nvm use 18
```

## 运行问题

### Q: 启动后无法访问？

检查端口是否被占用：

```bash
# Windows
netstat -ano | findstr :3000

# Linux/Mac
lsof -i :3000
```

### Q: API Key 无效？

确认环境变量是否设置：

```bash
echo $OPENAI_API_KEY
```

### Q: Telegram Bot 没反应？

1. 确认 Bot Token 正确
2. 确认已经启动 Bot（先给 Bot 发一条消息）
3. 检查日志是否有错误

## 渠道问题

### Q: QQ 接入失败？

1. 确认 NapCat 正常运行
2. 确认 WebSocket 端口正确
3. 检查 QQ 是否登录成功

### Q: Discord Bot 没权限？

1. 在 Developer Portal 开启 Message Content Intent
2. 确认 Bot 有发送消息的权限

## 性能问题

### Q: 响应很慢？

1. 检查网络连接
2. 尝试切换模型
3. 减少 maxMessages

### Q: 内存占用高？

减少记忆消息数量：

```yaml
memory:
  maxMessages: 30
```

## 其他问题

### Q: 如何备份数据？

备份整个工作区目录即可。

### Q: 如何更新？

```bash
npm update -g openclaw
```