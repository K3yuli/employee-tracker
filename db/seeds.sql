INSERT INTO department (name)
VALUES
('Production'),
('Research and Development'),
('Purchasing'),
('Marketing'),
('Human Resource Management'),
('Accounting and Finance');

INSERT INTO role (title, salary, department_id)
VALUES
('Project Manager', 75000, 1),
('Research & Development Manager', 70000, 2),
('Purchasing Manager', 74000, 3),
('Chief Marketing Officer (CMO)', 250000, 4),
('Communications Manager', 83000, 4),
('Administrative', 100000, 5),
('Change Management', 92000, 5),
('People Management', 79000, 5),
('Chief Financial Officer', 400000, 6),
('Controller', 100000, 6),
('Accountant', 73000, 6);

INSERT INTO employee (first_name, lat_name, role_id, manager_id)
VALUES
('Arthur', 'Vandelay', 6, NULL),
('Rusty', 'Shackleford', 3, 3),
('Pepe', 'Sylvia', 1, 1),
('Regina', 'Phalange', 10, NULL),
('Jamie', 'Fraiser', 2, 2),
('Acheron', 'Riverton', 8, NULL),
('Kore', 'Springger', 7, NULL),
('Dyonysis', 'Win Lee', 5, 5),
('Zoe', 'Alexandria', 11, NULL),
('Luffy', 'Monkley', 4, NULL),
('Nami', 'Cathleen', 9, NULL);
