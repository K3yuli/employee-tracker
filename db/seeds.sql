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
('Pepe', 'Sylvia', 1, NULL),
('Jamie', 'Fraiser', 2, NULL),
('Rusty', 'Shackleford', 3, NULL),
('Luffy', 'Monkley', 4, NULL),
('Dyonysis', 'Win Lee', 5, NULL),
('Arthur', 'Vandelay', 6, NULL),
('Kore', 'Springger', 7, 6),
('Acheron', 'Riverton', 8, 6),
('Nami', 'Cathleen', 9, NULL),
('Regina', 'Phalange', 10, 9),
('Zoe', 'Alexandria', 11, 9);