import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.CRbTqKAQ.js","_app/immutable/chunks/scheduler.DmxH0m09.js","_app/immutable/chunks/index.CitA6YrJ.js","_app/immutable/chunks/entry.BywQrYUL.js"];
export const stylesheets = ["_app/immutable/assets/2.pGK5xy_j.css"];
export const fonts = [];
