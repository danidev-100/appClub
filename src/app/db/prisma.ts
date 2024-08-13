// import { PrismaClient } from '@prisma/client'
// import { PrismaLibSQL } from '@prisma/adapter-libsql'
// import { createClient } from '@libsql/client'

// const libsql = createClient({
//   url: `${process.env.TURSO_DATABASE_URL}`,
//   authToken: `${process.env.TURSO_AUTH_TOKEN}`,
// })

// const adapter = new PrismaLibSQL(libsql)
// const prisma = new PrismaClient({ adapter })

import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma
