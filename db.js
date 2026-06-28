const { Pool } = require('pg');

// Neon provides DATABASE_URL. Fall back to the common Postgres aliases that
// the Vercel/Neon integration also exposes.
const connectionString =
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL ||
  process.env.POSTGRES_PRISMA_URL;

if (!connectionString) {
  console.error('[db] No se encontró DATABASE_URL / POSTGRES_URL en el entorno');
}

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

// Small helper so callers can run parameterised queries.
const query = (text, params) => pool.query(text, params);

module.exports = { pool, query };
