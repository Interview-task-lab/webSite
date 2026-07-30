import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

let dbInstance: PrismaClient;

if (typeof window === "undefined") {
  // Server-only runtime loading
  const { PrismaBetterSqlite3 } = require("@prisma/adapter-better-sqlite3");
  
  const url = process.env.DATABASE_URL || "file:./dev.db";
  const adapter = new PrismaBetterSqlite3({ url });
  dbInstance = new PrismaClient({ adapter });
} else {
  dbInstance = {} as PrismaClient;
}

export const db = globalForPrisma.prisma ?? dbInstance;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
