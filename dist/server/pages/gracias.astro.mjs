/* empty css                                     */
import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CG8otkcW.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Footer } from '../chunks/Footer_CD4wwnX6.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Gracias = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\xA1Gracias por contactarnos! | Gaiax", "description": "Gracias por tu mensaje. Nos pondremos en contacto contigo a la brevedad.", "data-astro-cid-27lbuprk": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-27lbuprk> <section class="min-h-screen flex flex-col items-center justify-center py-20 relative overflow-hidden" data-astro-cid-27lbuprk> <!-- Elementos decorativos de fondo --> <div class="absolute inset-0 overflow-hidden opacity-10 z-0" data-astro-cid-27lbuprk> <div class="absolute top-0 -left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-float" data-astro-cid-27lbuprk></div> <div class="absolute bottom-0 right-0 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-float-delayed" data-astro-cid-27lbuprk></div> </div> <div class="container relative z-10" data-astro-cid-27lbuprk> <!-- Logo --> <div class="flex justify-center mb-16" data-astro-cid-27lbuprk> <a href="/" class="inline-block" data-astro-cid-27lbuprk> <img src="logo.svg" alt="Gaiax Logo" class="w-auto h-40" data-astro-cid-27lbuprk> </a> </div> <div class="max-w-3xl mx-auto text-center" data-astro-cid-27lbuprk> <h1 class="text-5xl md:text-5xl font-bold mb-6" data-astro-cid-27lbuprk> <span class="text-primary" data-astro-cid-27lbuprk>¡Gracias</span> por contactarnos!
</h1> <p class="text-xl text-gray-700 mb-12" data-astro-cid-27lbuprk>
En breve nos pondremos en contacto contigo.
</p> <div class="mt-8" data-astro-cid-27lbuprk> <a href="/" class="btn btn-primary text-lg py-4 px-8 hover-lift inline-flex items-center" data-astro-cid-27lbuprk> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-27lbuprk> <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" data-astro-cid-27lbuprk></path> <polyline points="9 22 9 12 15 12 15 22" data-astro-cid-27lbuprk></polyline> </svg>
Volver al inicio
</a> </div> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-27lbuprk": true })} ` })} `;
}, "C:/Users/stfra/OneDrive/Documentos/gaiax-landing/src/pages/gracias.astro", void 0);

const $$file = "C:/Users/stfra/OneDrive/Documentos/gaiax-landing/src/pages/gracias.astro";
const $$url = "/gracias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gracias,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
