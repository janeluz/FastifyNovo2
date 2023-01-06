CREATE TABLE IF NOT EXISTS
  users(
    id uuid PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL,
    avatar VARCHAR(255) Null,
    departament VARCHAR(80) NOT NULL,
    "created_at" TIMESTAMP NOT NULL,
    "updated_at" TIMESTAMP
  );

