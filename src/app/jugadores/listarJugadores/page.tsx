
import prisma from "@/app/db/prisma";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

async function listJugadores() {
  const jugadores = await prisma.jugadores.findMany({
    include: {
      categoria: true,
    },
  });
  return jugadores;
}



export default async function ListarJugadores() {

  const jugadores = await listJugadores();
  
  
  console.log(jugadores)

  return (
    <>
      <main className="">
        <h1 className="flex justify-center p-5 font-medium text-3xl">
          Listados de Jugadores
        </h1>

        <div className="flex flex-wrap  gap-4 m-4">
          {jugadores.map((jugador) => (
            <Card className="p-2" key={jugador.id}>
              <CardHeader>
                <CardTitle>
                  {jugador.nombre} {jugador.apellido}{" "}
                </CardTitle>
                <hr />
                <CardDescription className="text-yellow-600">
                  Categoria {jugador.categoria?.categoria}
                </CardDescription>
              </CardHeader>
              <CardContent className="">
                <p>Dni: {jugador.dni} </p>

                <hr />
                <p>
                  Fecha de nacimiento{" "}
                  <span className="font-sans">{jugador.fechaNacimiento}</span>
                </p>
                <hr />
                <p>
                  Celular: <span className="font-sans">{jugador.celular}</span>
                </p>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
