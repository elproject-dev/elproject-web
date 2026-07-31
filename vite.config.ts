// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/",
    server: {
      allowedHosts: [
        "directed-zigzagged-haunt.ngrok-free.dev",
        ".ngrok-free.dev"
      ],
    },
  },
  tanstackStart: {
    server: { entry: "server" },
    ssr: false,
  },
  nitro: {
    preset: "github-pages",
    // @ts-expect-error - 'prerender' is not in Lovable's nitro types but is valid for Nitro itself.
    prerender: {
      routes: ["/", "/showcase", "/live-demo"],
      crawlLinks: true,
    },
  },
});
