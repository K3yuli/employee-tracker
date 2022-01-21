-- delete table or drop
-- this will crop/delete the tables everytime schema.sql is run
DROP TABLE IF EXISTS department;



-- add new table to buisness organizer database
CREATE TABLE department (
    id INTEGER PRIMARY KEY,
    name VARCHAR(30)
);

-- -- add new table to buisness organizer database
-- CREATE TABLE role (
--     id INTEGER PRIMARY KEY,
--     title VARCHAR(30),
--     salary DECIMAL,
--     department_id INTEGER
-- );


-- -- add new table to buisness organizer database
-- CREATE TABLE employee (
--     id INTEGER PRIMARY KEY,
--     first_name VARCHAR(30),
--     lat_name VARCHAR(30),
--     role_id INTEGER,
--     manager_id INTEGER
-- );