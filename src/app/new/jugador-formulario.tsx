"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { crearJugador } from "@/actions/form-actions";
import { toast } from "react-toastify";

function JugadoresFormulario() {
  const alerta = () => {
    toast.success("jugador creado", {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  return (
    <>
      <form action={crearJugador}>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Crear Jugador</CardTitle>
            <CardDescription>Ingresar datos de jugadores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="nombre">Nombre</Label>
                <Input
                  name="nombre"
                  id="nombre"
                  placeholder="Nombre del jugador"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="apellido">Apellido</Label>
                <Input
                  name="apellido"
                  id="apellido"
                  placeholder="Apellido del jugador"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="dni">Dni</Label>
                <Input name="dni" id="dni" placeholder="Dni del jugador" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="celular">Celular</Label>
                <Input
                  name="celular"
                  id="celular"
                  placeholder="Celular del jugador"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="celularEmergencia">Celular de Emergencia</Label>
                <Input
                  name="celularEmergencia"
                  id="celularEmergencia"
                  placeholder="Celular de emergencia del jugador"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="fecha-nacimiento">Fecha Nacimiento</Label>
                <Input
                  name="fecha-nacimiento"
                  id="fecha-nacimiento"
                  placeholder="Fecha de nacimiento 05/03/1977"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="categoria">Categoria</Label>
                <Select name="categoria">
                  <SelectTrigger id="categoria">
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="C 7">C 7</SelectItem>
                    <SelectItem value="C 9">C 9</SelectItem>
                    <SelectItem value="C 11">C 11</SelectItem>
                    <SelectItem value="C 13">C 13</SelectItem>
                    <SelectItem value="C 15">C 15</SelectItem>
                    <SelectItem value="C 17">C 17</SelectItem>
                    <SelectItem value="C 20">C 20</SelectItem>
                    <SelectItem value="Primera">Primera</SelectItem>
                    <SelectItem value="Senior">Senior</SelectItem>
                    <SelectItem value="Veterano">Veterano</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancelar</Button>
            <Button onClick={alerta} type="submit">
              Cargar
            </Button>
          </CardFooter>
        </Card>
      </form>
    </>
  );
}

export default JugadoresFormulario;
