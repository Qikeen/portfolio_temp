

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Ch1ydQ7a.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.u_bLe8uI.js"];
export const stylesheets = [];
export const fonts = [];
