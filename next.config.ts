import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Turbopackを無効化 */
  experimental: {
    turbo: undefined,
  },

  // .jp / .jps(複数形) → .com へ恒久リダイレクト（308）
  async redirects() {
    return [
      // mothervegetable.jp（apex）→ www.mothervegetable.com
      {
        source: "/:path*",
        has: [{ type: "host", value: "mothervegetable.jp" }],
        destination: "https://www.mothervegetable.com/:path*",
        permanent: true,
      },
      // www.mothervegetable.jp → www.mothervegetable.com
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.mothervegetable.jp" }],
        destination: "https://www.mothervegetable.com/:path*",
        permanent: true,
      },
      // mothervegetables.jp（複数形）→ www.mothervegetable.com
      {
        source: "/:path*",
        has: [{ type: "host", value: "mothervegetables.jp" }],
        destination: "https://www.mothervegetable.com/:path*",
        permanent: true,
      },
      // www.mothervegetables.jp → www.mothervegetable.com
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.mothervegetables.jp" }],
        destination: "https://www.mothervegetable.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
