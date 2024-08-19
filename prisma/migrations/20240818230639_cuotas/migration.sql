-- CreateTable
CREATE TABLE "cuotas" (
    "id" SERIAL NOT NULL,
    "mes" TEXT NOT NULL,
    "monto" TEXT NOT NULL,
    "fechaPago" TEXT NOT NULL,
    "jugadorId" INTEGER NOT NULL,
    "comprobantePago" INTEGER NOT NULL,

    CONSTRAINT "cuotas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cuotas_jugadorId_key" ON "cuotas"("jugadorId");

-- AddForeignKey
ALTER TABLE "cuotas" ADD CONSTRAINT "cuotas_jugadorId_fkey" FOREIGN KEY ("jugadorId") REFERENCES "jugadores"("id") ON DELETE CASCADE ON UPDATE CASCADE;
