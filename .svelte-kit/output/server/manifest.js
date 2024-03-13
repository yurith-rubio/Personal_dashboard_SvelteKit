export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","photo1.jpg","photo10.jpg","photo11.jpg","photo12.jpg","photo13.jpg","photo14.jpg","photo15.jpg","photo16.jpg","photo17.jpg","photo18.jpg","photo19.jpg","photo2.jpg","photo20.jpg","photo21.jpg","photo22.jpg","photo23.jpg","photo24.jpg","photo25.jpg","photo26.jpg","photo27.jpg","photo28.jpg","photo29.jpg","photo3.jpg","photo30.jpg","photo31.jpg","photo32.jpg","photo33.jpg","photo34.jpg","photo35.jpg","photo36.jpg","photo37.jpg","photo38.jpg","photo39.jpg","photo4.jpg","photo40.jpg","photo41.jpg","photo42.jpg","photo43.jpg","photo44.jpg","photo45.jpg","photo46.jpg","photo47.jpg","photo48.jpg","photo49.jpg","photo5.jpg","photo50.jpg","photo6.jpg","photo7.jpg","photo8.jpg","photo9.jpg","svelte.svg","vite.svg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.CT1n7JYo.js","app":"_app/immutable/entry/app.D1lF1XqD.js","imports":["_app/immutable/entry/start.CT1n7JYo.js","_app/immutable/chunks/entry.BywQrYUL.js","_app/immutable/chunks/scheduler.DmxH0m09.js","_app/immutable/entry/app.D1lF1XqD.js","_app/immutable/chunks/scheduler.DmxH0m09.js","_app/immutable/chunks/index.CitA6YrJ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
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
})();
