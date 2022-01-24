-- delete table or drop
-- this will crop/delete the tables everytime schema.sql is run
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;



-- add new table to buisness organizer database
CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(30)
);

-- add new table to buisness organizer database
CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT
);

-- add new table to buisness organizer database
CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    lat_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT
);