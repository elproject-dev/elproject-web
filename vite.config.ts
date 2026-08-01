// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default async (env: any) => {
  const configFn = defineConfig({
    vite: {
      base: "/",
      server: {
        allowedHosts: [
          "directed-zigzagged-haunt.ngrok-free.dev",
          ".ngrok-free.dev"
        ],
      },
      resolve: {
        tsconfigPaths: true,
      },
    },
    tanstackStart: {
      server: { entry: "server" },
    },
    nitro: {
      preset: "vercel",
    },
  });

  const config = await configFn(env);
  
  // Filter out the vite-tsconfig-paths plugin since Vite supports it natively now
  if (config.plugins) {
    config.plugins = config.plugins.filter(
      (p: any) => p && p.name !== "vite-tsconfig-paths"
    );
  }

  return config;
};
