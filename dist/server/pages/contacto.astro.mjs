/* empty css                                     */
import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, j as renderScript, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_ax9D0Zyw.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Footer } from '../chunks/Footer_2aS_Gt-Q.mjs';
import { $ as $$Header } from '../chunks/Header_ozcRQeEm.mjs';
import 'clsx';
import '../chunks/_astro_actions_D1X1c1Db.mjs';
import { Resend } from 'resend';
import { d as defineAction } from '../chunks/server_C43ld3_1.mjs';
import { A as ActionError } from '../chunks/astro-designed-error-pages_B-JG_Df2.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const resend = new Resend("re_123456789");
const server = {
  enviarContacto: defineAction({
    accept: "form",
    handler: async (formData) => {
      const nombre = formData.get("nombre");
      const email = formData.get("email");
      const empresa = formData.get("empresa") || "No especificada";
      const telefono = formData.get("telefono") || "No especificado";
      const mensaje = formData.get("mensaje");
      if (!nombre || !email || !mensaje) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: "Por favor, completa todos los campos requeridos."
        });
      }
      try {
        const { data, error } = await resend.emails.send({
          from: "Franco Sanchez <franco.sanchez@gaiax.mx>",
          // Ajusta según tu dominio verificado
          to: ["francost15@gmail.com"],
          // Email donde recibirás los mensajes
          replyTo: email.toString(),
          subject: `Nuevo contacto desde la web - ${nombre}`,
          html: `
            <h1>Nuevo mensaje de contacto</h1>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Empresa:</strong> ${empresa}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Mensaje:</strong> ${mensaje}</p>
          `
        });
        if (error) {
          console.error("Error al enviar email:", error);
          throw new ActionError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Ha ocurrido un error al enviar tu mensaje. Por favor, intenta nuevamente más tarde."
          });
        }
        return {
          success: true,
          message: "¡Gracias por tu mensaje! Te contactaremos pronto.",
          id: data?.id
        };
      } catch (err) {
        console.error("Error en el servicio de email:", err);
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Ha ocurrido un error con nuestro servicio de mensajería. Por favor, intenta nuevamente más tarde."
        });
      }
    }
  })
};

const $$Astro = createAstro();
const $$ContactSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactSection;
  let formResult = { errors: void 0, success: false, message: void 0 };
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const result = await server.enviarContacto(formData);
      if (result.error) {
        formResult.errors = { global: { message: result.error.message } };
      } else if (result.data) {
        formResult.success = result.data.success;
        formResult.message = result.data.message;
      }
    } catch (error) {
      console.error("Error al procesar el formulario:", error);
      formResult.errors = { global: { message: "Error al procesar el formulario" } };
    }
  }
  const { errors, success, message } = formResult;
  return renderTemplate`${maybeRenderHead()}<section id="contacto" class="py-24 bg-gray-50" data-astro-cid-jjagjrbk> <div class="container mx-auto px-4" data-astro-cid-jjagjrbk> <div class="max-w-4xl mx-auto text-center mb-16" data-astro-cid-jjagjrbk> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-astro-cid-jjagjrbk>
Contáctanos
</h2> <div class="w-24 h-1 bg-primary mx-auto mb-8 rounded-full" data-astro-cid-jjagjrbk></div> <p class="text-xl text-gray-600 max-w-2xl mx-auto" data-astro-cid-jjagjrbk>
Estamos aquí para ayudarte a transformar la capacitación en tu empresa. 
        Escríbenos y un asesor especializado te contactará en breve.
</p> </div> <div class="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto" data-astro-cid-jjagjrbk> <!-- Información de contacto --> <div class="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm" data-astro-cid-jjagjrbk> <h3 class="text-2xl font-semibold text-gray-900 mb-6" data-astro-cid-jjagjrbk>Información de contacto</h3> <div class="space-y-6" data-astro-cid-jjagjrbk> <div class="flex items-start" data-astro-cid-jjagjrbk> <div class="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center" data-astro-cid-jjagjrbk> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-jjagjrbk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-jjagjrbk></path> </svg> </div> <div class="ml-4" data-astro-cid-jjagjrbk> <h4 class="text-base font-medium text-gray-900" data-astro-cid-jjagjrbk>Email</h4> <p class="mt-1 text-gray-600" data-astro-cid-jjagjrbk>contacto@gaiax.com</p> <a href="mailto:contacto@gaiax.com" class="mt-1 text-primary hover:text-primary-dark text-sm inline-flex items-center" data-astro-cid-jjagjrbk>
Enviar email
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-jjagjrbk> <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-jjagjrbk></path> </svg> </a> </div> </div> <div class="flex items-start" data-astro-cid-jjagjrbk> <div class="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center" data-astro-cid-jjagjrbk> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-jjagjrbk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-jjagjrbk></path> </svg> </div> <div class="ml-4" data-astro-cid-jjagjrbk> <h4 class="text-base font-medium text-gray-900" data-astro-cid-jjagjrbk>Teléfono</h4> <p class="mt-1 text-gray-600" data-astro-cid-jjagjrbk>+34 912 345 678</p> <a href="tel:+34912345678" class="mt-1 text-primary hover:text-primary-dark text-sm inline-flex items-center" data-astro-cid-jjagjrbk>
Llamar ahora
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-jjagjrbk> <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-jjagjrbk></path> </svg> </a> </div> </div> <div class="flex items-start" data-astro-cid-jjagjrbk> <div class="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center" data-astro-cid-jjagjrbk> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-jjagjrbk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-jjagjrbk></path> </svg> </div> <div class="ml-4" data-astro-cid-jjagjrbk> <h4 class="text-base font-medium text-gray-900" data-astro-cid-jjagjrbk>Horario de atención</h4> <p class="mt-1 text-gray-600" data-astro-cid-jjagjrbk>Lunes a Viernes: 9:00 - 18:00</p> <p class="text-gray-600" data-astro-cid-jjagjrbk>Sábados y Domingos: Cerrado</p> </div> </div> <div class="flex items-start" data-astro-cid-jjagjrbk> <div class="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center" data-astro-cid-jjagjrbk> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-jjagjrbk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-astro-cid-jjagjrbk></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-jjagjrbk></path> </svg> </div> <div class="ml-4" data-astro-cid-jjagjrbk> <h4 class="text-base font-medium text-gray-900" data-astro-cid-jjagjrbk>Ubicación</h4> <p class="mt-1 text-gray-600" data-astro-cid-jjagjrbk>
Calle Gran Vía 28<br data-astro-cid-jjagjrbk>
28013 Madrid, España
</p> </div> </div> </div> </div> <!-- Formulario de contacto --> <div class="md:col-span-3 bg-white p-8 rounded-2xl shadow-sm" data-astro-cid-jjagjrbk> <h3 class="text-2xl font-semibold text-gray-900 mb-6" data-astro-cid-jjagjrbk>Envíanos un mensaje</h3> <!-- Mensaje de éxito --> ${success && renderTemplate`<div class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg" data-astro-cid-jjagjrbk> <div class="flex" data-astro-cid-jjagjrbk> <div class="flex-shrink-0" data-astro-cid-jjagjrbk> <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-jjagjrbk> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-jjagjrbk></path> </svg> </div> <div class="ml-3" data-astro-cid-jjagjrbk> <p class="text-sm font-medium text-green-800" data-astro-cid-jjagjrbk> ${message || "\xA1Gracias por tu mensaje! Te contactaremos pronto."} </p> </div> </div> </div>`} <!-- Mensaje de error general --> ${errors?.global && renderTemplate`<div class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg" data-astro-cid-jjagjrbk> <div class="flex" data-astro-cid-jjagjrbk> <div class="flex-shrink-0" data-astro-cid-jjagjrbk> <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-jjagjrbk> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" data-astro-cid-jjagjrbk></path> </svg> </div> <div class="ml-3" data-astro-cid-jjagjrbk> <p class="text-sm font-medium text-red-800" data-astro-cid-jjagjrbk> ${errors.global?.message} </p> </div> </div> </div>`} <form id="contactForm" method="post" action="#contacto" class="space-y-6" data-astro-cid-jjagjrbk> <div class="grid md:grid-cols-2 gap-6" data-astro-cid-jjagjrbk> <div data-astro-cid-jjagjrbk> <label for="nombre" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-jjagjrbk>Nombre completo <span class="text-red-500" data-astro-cid-jjagjrbk>*</span></label> <input type="text" id="nombre" name="nombre"${addAttribute(`w-full px-4 py-3 border ${errors?.nombre ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-primary focus:border-primary transition-colors`, "class")} placeholder="Escribe tu nombre" required data-astro-cid-jjagjrbk> ${errors?.nombre && renderTemplate`<div class="text-red-500 text-sm mt-1" data-astro-cid-jjagjrbk>${errors.nombre?.message}</div>`} </div> <div data-astro-cid-jjagjrbk> <label for="empresa" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-jjagjrbk>Empresa</label> <input type="text" id="empresa" name="empresa" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition-colors" placeholder="Nombre de tu empresa" data-astro-cid-jjagjrbk> </div> </div> <div class="grid md:grid-cols-2 gap-6" data-astro-cid-jjagjrbk> <div data-astro-cid-jjagjrbk> <label for="email" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-jjagjrbk>Email <span class="text-red-500" data-astro-cid-jjagjrbk>*</span></label> <input type="email" id="email" name="email"${addAttribute(`w-full px-4 py-3 border ${errors?.email ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-primary focus:border-primary transition-colors`, "class")} placeholder="correo@ejemplo.com" required data-astro-cid-jjagjrbk> ${errors?.email && renderTemplate`<div class="text-red-500 text-sm mt-1" data-astro-cid-jjagjrbk>${errors.email?.message}</div>`} </div> <div data-astro-cid-jjagjrbk> <label for="telefono" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-jjagjrbk>Teléfono</label> <input type="tel" id="telefono" name="telefono" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition-colors" placeholder="+34 000 000 000" data-astro-cid-jjagjrbk> </div> </div> <div data-astro-cid-jjagjrbk> <label for="mensaje" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-jjagjrbk>Mensaje <span class="text-red-500" data-astro-cid-jjagjrbk>*</span></label> <textarea id="mensaje" name="mensaje" rows="4"${addAttribute(`w-full px-4 py-3 border ${errors?.mensaje ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-primary focus:border-primary transition-colors`, "class")} placeholder="Cuéntanos en qué podemos ayudarte..." required data-astro-cid-jjagjrbk></textarea> ${errors?.mensaje && renderTemplate`<div class="text-red-500 text-sm mt-1" data-astro-cid-jjagjrbk>${errors.mensaje?.message}</div>`} </div> <div class="flex items-center" data-astro-cid-jjagjrbk> <input type="checkbox" id="privacidad" name="privacidad" class="w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded" required data-astro-cid-jjagjrbk> <label for="privacidad" class="ml-2 block text-sm text-gray-600" data-astro-cid-jjagjrbk>
He leído y acepto la <a href="/terminos" class="text-primary hover:underline" data-astro-cid-jjagjrbk>política de privacidad</a> <span class="text-red-500" data-astro-cid-jjagjrbk>*</span> </label> </div> <div class="text-right" data-astro-cid-jjagjrbk> <button type="submit" id="submitBtn" class="bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-lg transition-colors duration-300 font-medium inline-flex items-center" data-astro-cid-jjagjrbk> <span data-astro-cid-jjagjrbk>Enviar mensaje</span> <svg class="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-jjagjrbk> <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" data-astro-cid-jjagjrbk></path> </svg> </button> </div> </form> </div> </div> </div> </section> ${renderScript($$result, "C:/Users/stfra/OneDrive/Documentos/gaiax-landing/src/components/ContactSection.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/stfra/OneDrive/Documentos/gaiax-landing/src/components/ContactSection.astro", void 0);

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto | Gaiax", "description": "Ponte en contacto con nosotros. Nuestro equipo est\xE1 listo para ayudarte con cualquier consulta sobre nuestra plataforma de capacitaci\xF3n." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="pt-20"> ${renderComponent($$result2, "ContactSection", $$ContactSection, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/stfra/OneDrive/Documentos/gaiax-landing/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/stfra/OneDrive/Documentos/gaiax-landing/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
