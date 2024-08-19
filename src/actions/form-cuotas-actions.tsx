"use server";

import db from "@/app/db/prisma";
import Jugadores from "@/app/jugadores/page";

export async function crearPagoDeCuotas(formData: FormData) {
  const jugadorId = formData.get("jugadorId")?.toString();
  const mes = formData.get("mes")?.toString();
  const monto = formData.get("monto")?.toString();
  const fechaPago = formData.get("fechaPago")?.toString();
  const comprobantePago = formData.get("comprobantePago")?.toString();
  
  
  try {
    if (!mes || !monto || !fechaPago || !comprobantePago || !jugadorId) {
      return
    }
    
    const result = await db.cuotas.create({
      data: {
        mes: mes,
        monto: monto,
        fechaPago: fechaPago,
        comprobantePago: comprobantePago,
        jugador:{
         connect:{id:parseInt(jugadorId)} 
        }
        
      },
    });
    console.log(result);
    
  } catch (error) {
    console.log(error);
    
  }
}
