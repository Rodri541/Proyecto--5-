import sql from "mssql";

const dbSettings = {
  user: "admin2024",
  password: "sololetras123.",
  server: "localhost",
  database: "laCandelaDB",
  options: {
    encrypt: false,
    trustServerCertificate: true,
  }
};

export const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (e) {
    console.error(e);
  }
};