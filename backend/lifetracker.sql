-- Letting the user know that we will be deleting the whole database
\echo 'Delete and recreate the database?'
\prompt 'Return for yes or conctrol-C to cancel >' answer

DROP DATABSE    lifetracker;
CREATE DATABASE lifetracker;
-- Hooks up to a certain databas
\connect lifetracker;

-- executes sql from file and creates table with schema
-- all sqls end in ";"
-- Can have multiple \i statements
\i lifetracker-schema.sql