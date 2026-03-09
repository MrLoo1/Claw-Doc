# 第8章 生产环境部署

将 OpenClaw 部署到服务器长期运行。

## 部署方式

### Docker 部署（推荐）

```bash
# 拉取镜像
docker pull openclaw/openclaw:latest

# 运行容器
docker run -d \
  --name openclaw \
  -v ./config:/app/config \
  -v ./data:/app/data \
  -p 3000:3000 \
  openclaw/openclaw:latest
```

### PM2 部署

```bash
# 安装 PM2
npm install -g pm2

# 启动
pm2 start "openclaw start" --name openclaw

# 开机自启
pm2 startup
pm2 save
```

### Systemd 服务

创建 `/etc/systemd/system/openclaw.service`:

```ini
[Unit]
Description=OpenClaw AI Assistant
After=network.target

[Service]
Type=simple
User=openclaw
WorkingDirectory=/opt/openclaw
ExecStart=/usr/bin/openclaw start
Restart=always

[Install]
WantedBy=multi-user.target
```

启用服务：

```bash
systemctl enable openclaw
systemctl start openclaw
```

## 安全建议

1. **API Key 管理** - 使用环境变量，不要硬编码
2. **HTTPS** - 配置反向代理和 SSL 证书
3. **访问控制** - 限制可访问的 IP
4. **日志审计** - 定期检查日志

## 监控

```bash
# 查看状态
openclaw status

# 查看日志
openclaw logs --tail 100

# Docker 日志
docker logs -f openclaw
```

## 完成！

恭喜你完成了「领养 Claw」教程！

接下来可以：
- 阅读「构建 Claw」了解开发
- 查看[附录](/cn/appendix/appendix-a)获取更多参考