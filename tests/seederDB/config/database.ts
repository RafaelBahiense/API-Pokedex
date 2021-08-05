import { getConnectionManager, Connection } from "typeorm";

const {
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE,
  DB_PORT,
  DB_DIALECT,
  DATABASE_URL,
} = process.env;

export default async function connect(): Promise<Connection> {
  const connectionManager = getConnectionManager();
  const connection = connectionManager.create({
    name: "default",
    type: "postgres",
    url:
      DATABASE_URL ||
      `${DB_DIALECT}://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
    entities: ["src/entities/*.ts"],
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      }
    }
  });
  try {
    await connection.connect();
  } catch (e) {
    console.log(e);
  }
  return connection;
}
