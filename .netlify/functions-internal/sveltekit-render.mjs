import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","style.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.Cf6sm3R5.js","app":"_app/immutable/entry/app.DNHLwxML.js","imports":["_app/immutable/entry/start.Cf6sm3R5.js","_app/immutable/chunks/entry.CuEn2Lr-.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.DNHLwxML.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.u_bLe8uI.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
