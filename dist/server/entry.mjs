import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DB6LkV05.mjs';
import { manifest } from './manifest_D2u5f2aE.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/404.astro.mjs');
const _page3 = () => import('./pages/acerca-de.astro.mjs');
const _page4 = () => import('./pages/contacto.astro.mjs');
const _page5 = () => import('./pages/faq.astro.mjs');
const _page6 = () => import('./pages/gracias.astro.mjs');
const _page7 = () => import('./pages/mision.astro.mjs');
const _page8 = () => import('./pages/valores.astro.mjs');
const _page9 = () => import('./pages/vision.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/acerca-de.astro", _page3],
    ["src/pages/contacto.astro", _page4],
    ["src/pages/faq.astro", _page5],
    ["src/pages/gracias.astro", _page6],
    ["src/pages/mision.astro", _page7],
    ["src/pages/valores.astro", _page8],
    ["src/pages/vision.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///C:/Users/stfra/OneDrive/Documentos/gaiax-landing/dist/client/",
    "server": "file:///C:/Users/stfra/OneDrive/Documentos/gaiax-landing/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
