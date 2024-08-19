import {z} from 'zod'
const validations =z.object({
    nombre: z.string().min(1).max(100),
    apellido: z.string().min(1).max(100),
    dni: z.string().min(8).max(8),
    celular: z.string(),
    fechaNacimiento: z.date()
})