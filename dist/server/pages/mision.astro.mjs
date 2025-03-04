/* empty css                                     */
import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CG8otkcW.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Footer } from '../chunks/Footer_CD4wwnX6.mjs';
import { $ as $$Header } from '../chunks/Header_BjgyzUG5.mjs';
export { renderers } from '../renderers.mjs';

const $$Mision = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nuestra Misi\xF3n | Gaiax", "description": "Conoce la misi\xF3n de Gaiax: Empoderar a las pymes desarrollando su capital humano mediante una plataforma de capacitaci\xF3n accesible y personalizada." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="pt-20"> <section class="py-24 bg-gray-50"> <div class="container"> <div class="max-w-4xl mx-auto text-center mb-16"> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
Nuestra <span class="text-primary">Misión</span> </h1> <div class="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div> </div> <div class="max-w-3xl mx-auto"> <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12"> <p class="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
"Empoderar a las pymes desarrollando su capital humano mediante una plataforma de capacitación en línea accesible y asequible, que transforme el aprendizaje tradicional en rutas formativas personalizadas y flexibles, impulsando el desarrollo social y económico."
</p> <div class="mt-12 space-y-8"> <div class="flex items-start"> <div class="bg-primary/10 p-3 rounded-full mr-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <div> <h3 class="text-xl font-semibold text-gray-900 mb-2">Capacitación Accesible</h3> <p class="text-gray-600">Creamos soluciones de formación que eliminan barreras de acceso para todas las pymes, sin importar su tamaño o recursos.</p> </div> </div> <div class="flex items-start"> <div class="bg-primary/10 p-3 rounded-full mr-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <div> <h3 class="text-xl font-semibold text-gray-900 mb-2">Rutas Personalizadas</h3> <p class="text-gray-600">Transformamos el aprendizaje tradicional en experiencias adaptadas a las necesidades específicas de cada empleado y empresa.</p> </div> </div> <div class="flex items-start"> <div class="bg-primary/10 p-3 rounded-full mr-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <div> <h3 class="text-xl font-semibold text-gray-900 mb-2">Impacto Social</h3> <p class="text-gray-600">Contribuimos al desarrollo económico y social facilitando el crecimiento del capital humano de las pymes.</p> </div> </div> </div> </div> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/stfra/OneDrive/Documentos/gaiax-landing/src/pages/mision.astro", void 0);

const $$file = "C:/Users/stfra/OneDrive/Documentos/gaiax-landing/src/pages/mision.astro";
const $$url = "/mision";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Mision,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
