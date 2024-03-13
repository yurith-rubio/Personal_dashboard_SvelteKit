

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Czffsy7o.js","_app/immutable/chunks/scheduler.DmxH0m09.js","_app/immutable/chunks/index.CitA6YrJ.js"];
export const stylesheets = ["_app/immutable/assets/0.C0SjrMMg.css"];
export const fonts = [];
