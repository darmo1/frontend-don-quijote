import { z } from 'zod';

export const contactFormSchema = z.object({
  countryId: z.string().optional(), 
  cellPhone: z.union([z.number({
    required_error: 'Debe ingresar un número de celular válido',
    invalid_type_error: 'Debe ser un número',
  }).positive(), z.null()]).optional(),
  email: z.union([z.string().email('Email inválido'), z.null()]).optional()
}).superRefine(( { cellPhone ,  countryId, email}, ctx ) => {
  if( !cellPhone &&   !email ){
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path:['cellPhone'],
      message: 'Debe ingresar un valor, el email o el número de celular'
    });
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['email'],
      message: 'Debe ingresar un valor, el email o el número de celular'
    })
  }
  if ( cellPhone && !countryId ) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['countryId'],
      message: 'Debe seleccionar un país si ingresa un número de teléfono',
    });
  }
})

export type ContactFormSchema = z.infer<typeof contactFormSchema>