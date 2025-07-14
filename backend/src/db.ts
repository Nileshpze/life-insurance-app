import { Pool } from "pg";

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgres://postgres:password@db:5432/life_insurance",
});

export const initDB = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS submissions (
      id SERIAL PRIMARY KEY,
      age INT,
      income INT,
      dependents INT,
      risk VARCHAR(10),
      recommendation TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
};
