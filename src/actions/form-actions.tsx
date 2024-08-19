"use server";
import { revalidatePath } from "next/cache";
import db from "../app/db/prisma";
import { redirect } from "next/navigation";

export async function crearJugador(formData: FormData) {
    const id = formData.get("id");
    const nombre = formData.get("nombre")?.toString();
    const apellido = formData.get("apellido")?.toString();
    const dni = formData.get("dni")?.toString();
    const celular = formData.get("celular")?.toString();
    const fechaNacimiento = formData.get("fecha-nacimiento")?.toString();
    const celularEmergencia = formData.get("celularEmergencia")?.toString()
    const categoria = formData.get("categoria")?.toString();


    try {
      if (
        !nombre ||
        !apellido ||
        !celular ||
        !dni ||
        !celular ||
        !fechaNacimiento ||
        !celularEmergencia||
        !categoria
      ) {
        return;
      }

      const result = await db.jugadores.create({
        data: {
          nombre: nombre,
          apellido: apellido,
          dni: dni,
          celular: celular,
          fechaNacimiento: fechaNacimiento,
          celularEmergencia: celularEmergencia,
          categoria: {
            create: {
              categoria,
            },
          },
        },
      });
     

     
      console.log(result);
    } catch (error) {
      console.log(error);
    }
   
    redirect("/")
 
  }
