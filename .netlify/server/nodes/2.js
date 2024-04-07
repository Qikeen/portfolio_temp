

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svx.js')).default;
export const imports = ["_app/immutable/nodes/2.DZk96Fz5.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.u_bLe8uI.js"];
export const stylesheets = ["_app/immutable/assets/2.DophcFvX.css"];
export const fonts = [];
