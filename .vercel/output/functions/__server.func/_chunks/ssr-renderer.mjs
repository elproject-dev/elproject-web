import { a as HTTPError, s as toRequest } from "../_libs/h3+rou3+srvx.mjs";
//#region ../../node_modules/.pnpm/nitro@3.0.260603-beta_better-sqlite3@12.11.1_chokidar@5.0.0_dotenv@17.4.2_drizzle-orm@0_4923d0c6eec7cafbd99f51f2b6a24b93/node_modules/nitro/dist/runtime/vite.mjs
function fetchViteEnv(viteEnvName, input, init) {
	const viteEnv = (globalThis.__nitro_vite_envs__ || {})[viteEnvName];
	if (!viteEnv) throw HTTPError.status(404);
	return Promise.resolve(viteEnv.fetch(toRequest(input, init)));
}
//#endregion
//#region ../../node_modules/.pnpm/nitro@3.0.260603-beta_better-sqlite3@12.11.1_chokidar@5.0.0_dotenv@17.4.2_drizzle-orm@0_4923d0c6eec7cafbd99f51f2b6a24b93/node_modules/nitro/dist/runtime/internal/vite/ssr-renderer.mjs
/** @param {{ req: Request }} HTTPEvent */
function ssrRenderer({ req }) {
	return fetchViteEnv("ssr", req);
}
//#endregion
export { ssrRenderer as default };
