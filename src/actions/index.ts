// import { ActionError, defineAction } from 'astro:actions';




// export const server = {
//   enviarContacto: defineAction({
//     accept: 'form',
//     handler: async (formData: FormData) => {
//       // Obtener datos del formulario
//       const nombre = formData.get('nombre');
//       const email = formData.get('email');
//       const empresa = formData.get('empresa') || 'No especificada';
//       const telefono = formData.get('telefono') || 'No especificado';
//       const mensaje = formData.get('mensaje');
      
//       // Validar que los campos requeridos estén presentes
//       if (!nombre || !email || !mensaje) {
//         throw new ActionError({
//           code: 'BAD_REQUEST',
//           message: 'Por favor, completa todos los campos requeridos.',
//         });
//       }
      
//       try {
//         // Simular un resultado exitoso
//         const data = { id: 'simulated-id' };
//         const error = null;

//         if (error) {
//           console.error('Error al enviar email:', error);
//           throw new ActionError({
//             code: 'INTERNAL_SERVER_ERROR',
//             message: 'Ha ocurrido un error al enviar tu mensaje. Por favor, intenta nuevamente más tarde.',
//           });
//         }

//         return {
//           success: true,
//           message: '¡Gracias por tu mensaje! Te contactaremos pronto.',
//           id: data?.id,
//         };
//       } catch (err) {
//         console.error('Error en el servicio de email:', err);
//         throw new ActionError({
//           code: 'INTERNAL_SERVER_ERROR',
//           message: 'Ha ocurrido un error con nuestro servicio de mensajería. Por favor, intenta nuevamente más tarde.',
//         });
//       }
//     },
//   }),
// }; 