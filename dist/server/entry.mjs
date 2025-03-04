import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CFJ1BboW.mjs';
import { manifest } from './manifest_Dnz2X5xl.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/acerca-de.astro.mjs');
const _page3 = () => import('./pages/contacto.astro.mjs');
const _page4 = () => import('./pages/faq.astro.mjs');
const _page5 = () => import('./pages/gracias.astro.mjs');
const _page6 = () => import('./pages/mision.astro.mjs');
const _page7 = () => import('./pages/valores.astro.mjs');
const _page8 = () => import('./pages/vision.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/acerca-de.astro", _page2],
    ["src/pages/contacto.astro", _page3],
    ["src/pages/faq.astro", _page4],
    ["src/pages/gracias.astro", _page5],
    ["src/pages/mision.astro", _page6],
    ["src/pages/valores.astro", _page7],
    ["src/pages/vision.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
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
