// Creates the NOA Bank schema in the connected Neon Postgres database.
// Run with: npm run db:setup
const { pool } = require('../db');

const SCHEMA = `
CREATE TABLE IF NOT EXISTS users (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  email       TEXT UNIQUE NOT NULL,
  password    TEXT NOT NULL,
  role        TEXT NOT NULL DEFAULT 'client',
  status      TEXT NOT NULL DEFAULT 'active',
  last_login  TIMESTAMPTZ,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS accounts (
  id              SERIAL PRIMARY KEY,
  user_id         INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  account_number  TEXT UNIQUE NOT NULL,
  type            TEXT NOT NULL,
  balance         NUMERIC(14,2) NOT NULL DEFAULT 0,
  status          TEXT NOT NULL DEFAULT 'active',
  currency        TEXT NOT NULL DEFAULT 'USD',
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS transactions (
  id            SERIAL PRIMARY KEY,
  type          TEXT NOT NULL,
  amount        NUMERIC(14,2) NOT NULL,
  from_account  INTEGER REFERENCES accounts(id) ON DELETE SET NULL,
  to_account    INTEGER REFERENCES accounts(id) ON DELETE SET NULL,
  status        TEXT NOT NULL DEFAULT 'pending',
  description   TEXT,
  reference     TEXT UNIQUE,
  risk          TEXT NOT NULL DEFAULT 'low',
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_accounts_user ON accounts(user_id);
CREATE INDEX IF NOT EXISTS idx_tx_from ON transactions(from_account);
CREATE INDEX IF NOT EXISTS idx_tx_to ON transactions(to_account);
`;

async function main() {
  try {
    await pool.query(SCHEMA);
    console.log('[setup-db] Esquema creado correctamente');
    process.exit(0);
  } catch (err) {
    console.error('[setup-db] Error al crear el esquema:', err.message);
    process.exit(1);
  }
}

main();
