

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DUidUDJk.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.u_bLe8uI.js","_app/immutable/chunks/entry.pvsRGTDs.js"];
export const stylesheets = [];
export const fonts = [];