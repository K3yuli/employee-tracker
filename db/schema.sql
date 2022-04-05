
-- delete table or drop
-- this will crop/delete the tables everytime schema.sql is run
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;


-- add new table to buisness organizer database
CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
-- to hold department name
    name VARCHAR(30) NOT NULL
);

-- add new table to buisness organizer database
CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
-- to hold reference to department role belongs to
    department_id INTEGER,
    INDEX dep_ind (department_id),
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
);

-- add new table to buisness organizer database
CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    lat_name VARCHAR(30) NOT NULL,
-- to hold referenfce to employee role
    role_id INT,
    INDEX role_id (role_id),
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id)
-- to hold reference to another employee that is the manager of the current employee
-- null if the employee has no manager
    manager_id INT
    INDEX manager_ind (manager_id),
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);