-- delete table or drop
-- this will crop/delete the tables everytime schema.sql is run
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;



-- add new table to buisness organizer database
CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
-- to hold department name
    name VARCHAR(30)
);

-- add new table to buisness organizer database
CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
-- to hold reference to department role belongs to
    department_id INT
);

-- add new table to buisness organizer database
CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    lat_name VARCHAR(30) NOT NULL,
-- to hold referenfce to employee role
    role_id INT,
-- to hold reference to another employee that is the manager of the current employee
-- null if the employee has no manager
    manager_id INT
);