import { e as createComponent, f as createAstro, h as addAttribute, k as renderHead, l as renderSlot, r as renderTemplate, m as maybeRenderHead, j as renderScript } from './astro/server_CG8otkcW.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                             */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Tu plataforma de Crecimiento | Gaiax",
    description = "Transforma la capacitaci\xF3n tradicional en rutas de aprendizaje adaptativas, dise\xF1adas para las necesidades \xFAnicas de cada empleado.",
    image = "/og-image.jpg",
    canonicalURL = Astro2.url.href,
    type = "website"
  } = Astro2.props;
  const currentUrl = Astro2.url.href;
  const siteName = "Gaiax";
  return renderTemplate`<html lang="es" class="scroll-smooth" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- SEO Básico --><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonicalURL, "href")}><meta name="robots" content="index, follow"><meta name="author" content="Gaiax"><meta name="theme-color" content="#a92eff"><!-- Open Graph / Facebook --><meta property="og:type"${addAttribute(type, "content")}><meta property="og:url"${addAttribute(currentUrl, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><meta property="og:site_name"${addAttribute(siteName, "content")}><meta property="og:locale" content="es_ES"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(currentUrl, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Fuentes --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"><!-- Precargar recursos críticos --><link rel="preload" href="/logo.svg" as="image">${renderHead()}</head> <body class="min-h-screen bg-white text-gray-900 font-sans" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/stfra/OneDrive/Documentos/gaiax-landing/src/layouts/Layout.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-white pt-20 pb-10" data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <div class="grid grid-cols-1 md:grid-cols-3 gap-12" data-astro-cid-sz7xmlte> <!-- Columna 1: Logo e información de la compañía --> <div class="space-y-6" data-astro-cid-sz7xmlte> <div class="flex items-center space-x-2" data-astro-cid-sz7xmlte> <a href="/" data-astro-cid-sz7xmlte> <img src="/logo-invertido.svg" alt="Gaiax" class="h-20" loading="lazy" data-astro-cid-sz7xmlte> </a> </div> <p class="text-gray-400 max-w-xs" data-astro-cid-sz7xmlte>
Transformamos la capacitación en pymes con soluciones accesibles, personalizadas y medibles que impulsan el crecimiento.
</p> <!-- <div class="flex space-x-4">
          <a href="#" class="text-gray-400 hover:text-primary transition-colors duration-300">
            <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path></svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-primary transition-colors duration-300">
            <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path></svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-primary transition-colors duration-300">
            <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-primary transition-colors duration-300">
            <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"></path></svg>
          </a>
        </div> --> </div> <!-- Columna 2: Productos --> <div data-astro-cid-sz7xmlte> <h3 class="text-xl font-semibold mb-6 text-gray-200" data-astro-cid-sz7xmlte>Producto</h3> <ul class="space-y-4" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte> <a href="#features" class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center" data-astro-cid-sz7xmlte> <svg class="w-5 h-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" data-astro-cid-sz7xmlte></path></svg>
Características
</a> </li> <li data-astro-cid-sz7xmlte> <a href="#benefits" class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center" data-astro-cid-sz7xmlte> <svg class="w-5 h-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" data-astro-cid-sz7xmlte></path></svg>
Beneficios
</a> </li> <li data-astro-cid-sz7xmlte> <a href="/faq" class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center" data-astro-cid-sz7xmlte> <svg class="w-5 h-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" data-astro-cid-sz7xmlte></path></svg>
FAQ
</a> </li> <li data-astro-cid-sz7xmlte> <a href="#pricing" class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center" data-astro-cid-sz7xmlte> <svg class="w-5 h-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" data-astro-cid-sz7xmlte></path></svg>
Precios
</a> </li> </ul> </div> <!-- Columna 3: Compañía --> <div data-astro-cid-sz7xmlte> <h3 class="text-xl font-semibold mb-6 text-gray-200" data-astro-cid-sz7xmlte>Compañía</h3> <ul class="space-y-4" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte> <a href="/acerca-de" class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center" data-astro-cid-sz7xmlte> <svg class="w-5 h-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" data-astro-cid-sz7xmlte></path></svg>
Acerca de
</a> </li> <li data-astro-cid-sz7xmlte> <a href="/mision" class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center" data-astro-cid-sz7xmlte> <svg class="w-5 h-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" data-astro-cid-sz7xmlte></path></svg>
Misión
</a> </li> <li data-astro-cid-sz7xmlte> <a href="/vision" class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center" data-astro-cid-sz7xmlte> <svg class="w-5 h-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" data-astro-cid-sz7xmlte></path></svg>
Visión
</a> </li> <li data-astro-cid-sz7xmlte> <a href="/valores" class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center" data-astro-cid-sz7xmlte> <svg class="w-5 h-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" data-astro-cid-sz7xmlte></path></svg>
Valores
</a> </li> <li data-astro-cid-sz7xmlte> <a href="/terminos" class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center" data-astro-cid-sz7xmlte> <svg class="w-5 h-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" data-astro-cid-sz7xmlte></path></svg>
Términos
</a> </li> </ul> </div> </div> <div class="border-t border-gray-800 mt-16 pt-8 flex flex-wrap justify-between items-center" data-astro-cid-sz7xmlte> <p class="text-gray-500" data-astro-cid-sz7xmlte>
© ${(/* @__PURE__ */ new Date()).getFullYear()} Gaiax. Todos los derechos reservados.
</p> <button id="scrollToTop" class="bg-gray-800 hover:bg-gray-700 transition-colors duration-300 p-3 rounded-full text-white" data-astro-cid-sz7xmlte> <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" data-astro-cid-sz7xmlte></path></svg> </button> </div> </div> </footer> ${renderScript($$result, "C:/Users/stfra/OneDrive/Documentos/gaiax-landing/src/components/Footer.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/stfra/OneDrive/Documentos/gaiax-landing/src/components/Footer.astro", void 0);

export { $$Layout as $, $$Footer as a };
