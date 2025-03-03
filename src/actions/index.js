import { ActionError, defineAction } from 'astro:actions';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  enviarContacto: defineAction({
    accept: 'form',
    handler: async ({ form }) => {
      // Obtener datos del formulario
      const nombre = form.get('nombre');
      const email = form.get('email');
      const empresa = form.get('empresa') || 'No especificada';
      const telefono = form.get('telefono') || 'No especificado';
      const mensaje = form.get('mensaje');
      
      // Validar que los campos requeridos estén presentes
      if (!nombre || !email || !mensaje) {
        throw new ActionError({
          code: 'CAMPOS_REQUERIDOS',
          message: 'Por favor, completa todos los campos requeridos.',
        });
      }
      
      try {
        // Enviar correo electrónico
        const { data, error } = await resend.emails.send({
          from: 'Franco Sanchez <franco.sanchez@gaiax.mx>', // Ajusta según tu dominio verificado
          to: ['francost15@gmail.com'], // Email donde recibirás los mensajes
          reply_to: email.toString(),
          subject: `Nuevo contacto desde la web - ${nombre}`,
          html: `
            <h1>Nuevo mensaje de contacto</h1>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Empresa:</strong> ${empresa}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Mensaje:</strong> ${mensaje}</p>
          `,
        });

        if (error) {
          console.error('Error al enviar email:', error);
          throw new ActionError({
            code: 'ERROR_ENVIO',
            message: 'Ha ocurrido un error al enviar tu mensaje. Por favor, intenta nuevamente más tarde.',
          });
        }

        return {
          success: true,
          message: '¡Gracias por tu mensaje! Te contactaremos pronto.',
          id: data?.id,
        };
      } catch (err) {
        console.error('Error en el servicio de email:', err);
        throw new ActionError({
          code: 'ERROR_SERVICIO',
          message: 'Ha ocurrido un error con nuestro servicio de mensajería. Por favor, intenta nuevamente más tarde.',
        });
      }
    },
  }),
}; 