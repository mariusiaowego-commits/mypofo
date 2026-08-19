# yoyoba · 作品集 2026

9 个我真写过、真跑过的小项目。一页图，微信手机上看。

2026-08 按各仓近况改过文案和截图：有的每天打开（dizical / mole-vibe / moni / creditsbar），有的已经收成稳态物件。

## 文件

- `public/portfolio-kami.html` — 源文件（米黄纸 kami 风格 / 衬线字体 / 单列竖排）
- `public/portfolio-2026-kami-v11.jpg` — 长图（微信发图）
- `public/portfolio-2026-kami.pdf` — PDF 版（打印 / 邮件）
- `public/screenshots/` — 9 张项目图
- `src/worker.js` — Cloudflare Worker，`/` 重写到 `portfolio-kami.html`

## 设计要点

- **风格**：kami 印刷感（米黄纸 #f5f4ed + 墨蓝 #1B365D + 衬线字体）
- **布局**：单列竖排，每张卡片占满宽
- **字号**：标题 56pt / 卡片 32pt / 正文 19pt（手机友好）
- **响应式**：所有尺寸用 `clamp(min, vw, max)`，iPhone / iPad / 桌面自适应
- **典故串**：dizical（笛卡尔）/ sonquiz（g/q 镜像）/ mofang（给女儿） / moni（monitor）/ mole-vibe（摸了）/ chronocare（给父母）/ creditsbar（菜单栏余额）

## 本地预览

```bash
npm run dev
```

## 部署

```bash
npx wrangler login
npm run deploy
```

## 重新出图

必须从 `public/` 打开，相对路径 `screenshots/` 才能加载：

```bash
cd public
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-sandbox --hide-scrollbars \
  --window-size=1080,10000 \
  --virtual-time-budget=8000 \
  --screenshot=portfolio-2026-kami-v11.png \
  "file://$PWD/portfolio-kami.html"
```

## License

MIT
