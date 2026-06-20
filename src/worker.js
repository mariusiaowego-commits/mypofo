// mypofo Worker — 接管 / 路由到 portfolio-kami.html，其他路径走 Assets
// 对应原 vercel.json 的 rewrite: { "source": "/", "destination": "/portfolio-kami.html" }
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 根路径重写到 portfolio-kami.html
    if (url.pathname === "/") {
      url.pathname = "/portfolio-kami.html";
      return env.ASSETS.fetch(new Request(url, request));
    }

    // 其他路径（/screenshots/*、/portfolio-2026-kami-v10.png、.pdf 等）由 Assets 直出
    return env.ASSETS.fetch(request);
  },
};
