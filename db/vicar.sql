DROP DATABASE IF EXISTS vicar;
CREATE DATABASE vicar;

\c vicar;

CREATE TABLE customers (
  ID SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE,
  firstname VARCHAR,
  lastname VARCHAR,
  email VARCHAR,
  tier VARCHAR,
  password_digest VARCHAR,
  imgurl VARCHAR DEFAULT 'https://static.wixstatic.com/media/e973bc_1e2d331031734b5088b7a27f8f9639d0~mv2.png/v1/fill/w_416,h_160,al_c,usm_0.66_1.00_0.01/e973bc_1e2d331031734b5088b7a27f8f9639d0~mv2.png',
  public_id VARCHAR DEFAULT 'default.png',
  date_acct_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- CREATE TABLE valets (
--   ID SERIAL PRIMARY KEY,
--   is_customer BOOLEAN,
--   username VARCHAR UNIQUE,
--   imgurl VARCHAR DEFAULT 'v1527033547/default.png',
--   firstname VARCHAR,
--   tier VARCHAR,
--   lastname VARCHAR,
--   email VARCHAR,
--   public_id VARCHAR DEFAULT 'default.png',
--   date_acct_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   password_digest VARCHAR
-- );

CREATE TABLE vehicles (
  ID SERIAL PRIMARY KEY,
  car_owner_id INTEGER REFERENCES customers(ID) ON DELETE CASCADE,
  car_year INTEGER,
  car_make VARCHAR,
  car_model VARCHAR
);

