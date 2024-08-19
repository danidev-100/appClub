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
import { toast } from "react-toastify";
import { crearPagoDeCuotas } from "@/actions/form-cuotas-actions";


function CuotasFormulario() {
  const alerta = () => {
    toast.success("cuota creada", {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  return (
    <>
      <div>
        <h1>Cuotas</h1>

        <form action= {crearPagoDeCuotas} className="flex justify-center items-start">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Registro de cuotas</CardTitle>
              <CardDescription>Ingrese la cuota a pagar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="mes">Mes</Label>
                  <Select name="mes">
                    <SelectTrigger id="mes">
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="Marzo">Marzo</SelectItem>
                      <SelectItem value="Abril">Abril</SelectItem>
                      <SelectItem value="Mayo">Mayo</SelectItem>
                      <SelectItem value="Junio">Junio</SelectItem>
                      <SelectItem value="Julio">Julio</SelectItem>
                      <SelectItem value="Agosto">Agosto</SelectItem>
                      <SelectItem value="Setiempbre">Setiempbre</SelectItem>
                      <SelectItem value="Octubre">Octubre</SelectItem>
                      <SelectItem value="Noviembre">Noviembre</SelectItem>
                      <SelectItem value="Diciembre">Diciembre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="monto">Valor</Label>
                  <Input
                    name="monto"
                    id="monto"
                    placeholder="valor de la cuota"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="fechaPago">Fech de pago</Label>
                  <Input
                    name="fechaPago"
                    id="fechaPago"
                    placeholder="Fecha de pago"
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="comprobantePago">
                    Numero de comprobante
                  </Label>
                  <Input
                    name="comprobantePago"
                    id="comprobantePago"
                    placeholder="Numero de comprobante"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="jugadorId">
                    Numero de jugador
                  </Label>
                  <Input
                    name="jugadorId"
                    id="jugadorId"
                    placeholder="Numero jugador"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancelar</Button>
              <Button onClick={alerta} type="submit">Cargar</Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
}
export default CuotasFormulario