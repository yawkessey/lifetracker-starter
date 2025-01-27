CREATE TABLE users (
    id              SERIAL PRIMARY KEY,
    username        TEXT NOT NULL,
    password        TEXT NOT NULL, 
    firstName       TEXT NOT NULL,
    lastName        TEXT NOT NULL, 
    email           TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1), 
    created_at      TIMESTAMP NOT NULL DEFAULT NOW(), 
    updated_at      TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE nutrition (
    id              SERIAL PRIMARY KEY, 
    name            TEXT NOT NULL, 
    category        TEXT NOT NULL, 
    calories        TEXT NOT NULL,
    image_url       TEXT NOT NULL, 
    user_id         INTEGER NOT NULL, 
    created_at      TIMESTAMP NOT NULL DEFAULT NOW(), 
    username        TEXT NOT NULL, 
    FOREIGN KEY     (username) REFERENCES users(username)
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Check datatype of the columns 
-- \d+ "name of table"