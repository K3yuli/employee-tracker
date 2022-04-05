// import express 
const express = require('express')
// mysql2
const mysql = require('mysql2');
// import connection
const db = require('./db/connection');

const inquirer = require('inquirer');

// add port designation and the app expression
const app = express();


// creat array of questions/selections
afterConnection = () => {
    console.log(`+++++++++++++++++++++++++++++++++++++++++++++++`);
    console.log(`++                                         ++++`);
    console.log(`++                                         ++++`);
    console.log(`++++++++++     Employee Tracker      ++++++++++`);
    console.log(`++                                         ++++`);
    console.log(`++                                         ++++`);
    console.log(`+++++++++++++++++++++++++++++++++++++++++++++++`);
}
const promptUser = () => {
        inquirer.prompt([
    {
        type: 'list',
        name: 'choices',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles', 
            'View all employees', 
            'Add a department', 
            'Add a role', 
            'Add an employee', 
            'Update an employee role',
            'Update an employee manager',
            'View employees by department',
            'Remove department',
            'Remove role',
            'Remove Employee',
            'View department budgets',
            'End']
                   
    },
    
])

.then((answers) => {
    const { choices } = answers;

    if(choices === "View all departments") {
        showDepartments();
    }
    if(choices === "View all roles") {
        showRoles();
    }
    if(choices === "View all employees") {
        showEmployees();
    }
    if(choices === "Add a department") {
        addDepartment();
    }
    if(choices === "Add a role") {
        addRole();
    }
    if(choices === "Add an employee") {
        addEmployee();
    }
    if(choices === "Update an employee role") {
        updateEmployee();
    }
    if(choices === "Update an employee manager") {
        updateEmployee();
    }
    if(choices === "View employees by department") {
        employeeDepartment();
    }
    if(choices === "Remove department") {
        removeDepartment();
    }
    if(choices === "Remove role") {
        removeRole();
    }
    if(choices === "Remove employee") {
        removeEmployee();
    }
    if(choices === "View department budgets") {
        viewBudget();
    }
    if(choices === "End") {
        connection.end()
    }
})
;}

// show all departments
showDepartments = () => {
    console.log('Showing all departments...\n');
    const swl = `SELECT department.id AS id, department.name AS department FROM department`;

    connection.promise().query(sql, (err, rows) => {
        if(err) throw err;
        console.log(rows);
        promptUser();
    })
}

// show roles
showEmployees = () => {
    console.log('Showing all employees...\n');
    const sql = `SELECT employee.id,
    employee.first_name,
    employee.last_name,
    role.title,
    department.name AS department,
    role.salary,
    CONCAT (manager.first_name), " ", manager.last_name) AS manager FROM employee
    LEFT JOIN role ON employee.role_id = role_id
    LEFT JOIN department ON role.department)id = department_id
    LEFT JOIN employee manager ON employee.manager_id = manager_id`;

connection.promise().query(sql, (err, rows) => {
    if(err) throw err;
    console.table(rows);
    promptUser();
});
};

// add department
addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'addDept',
            message: "What department would you like added?",
            validate: addDept => {
                if(addDept) {
                    return true;
                } else {
                    console.log("Please enter a department");
                    return false;
                }
            }
        }
    ])
    .then (answer => {
        const sql = `INSERT INTO department (name)
                    VALUES (?)`;
        connection.query(sql, answer.addDept, (err, result) => {
            if(err) throw err;
            console.log('Added ' + answer.addDept + ' to departments.');
            showDepartments();
        })
    })
}

// add role
addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'role',
            message: "What role do you want to add?",
            validate: addRole => {
                if(addRole) {
                    return true;
                } else {
                    console.log('Please enter a role');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'salary',
            message: "What is the salary of this role?",
            validate: addSalary => {
                if(isNaN(addSalary)) {
                    return true;
                } else {
                    console.log('Enter Salary')
                    return false;
                }
            }
        }
    ])
    .then(answer => {
        const params = [answer.role, answer.salary];

        // 
        const roleSql = `SELECT name, id FROM department`;

        connection.promise().query(roleSql, (err, data) => {
            if(err) throw err;

            const dept = data.map(({ name, id }) => {
                inquirer.prompt([
                    {
                        type: 'list',
                        name: 'dept',
                        message: "What department if this role in?",
                        choices: dept
                    }
                ])
                .then(deptChoice => {
                    const dept = deptChoice.dept;
                    params.push(dept);

                    const sql = `INSERT INTO role (title, salary, department_id)
                                VALUES (?, ?, ?)`;
                    connection.query(sql, params, (err, result) => {
                        if(err) throw err;
                        console.log('Added' + answer.role + ' to roles');
                        showROles();
                    });
                })
            })
        })
    })
}

// add employee
addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: "Enter Employee's first name:",
            validate: addFirst => {
                if(addFirst) {
                    return true;
                } else {
                    console.log('Enter first name!');
                    return false;
                }
            }
        }
    ])
    ,then(answer => {
        const params = [answer.firstName, answer.lastName]
        // get roles from roles table
        const roleSql = `SELECT role.id, role.title FROM role`;
        connection.promise().query(roleSql, (err, data) => {
            if(err) throw err;
            const roles = data.map(({ id, title }) => ({ name: title, value: id }));
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'role',
                    message: "Enter employee's role:",
                    choices: roles
                }
            ])
            .then(roleChoice => {
                const role = roleChoice.role;
                params.push(role);
                const managerSql = `SELECT * FROM employee`;
                connection.promise().query(managerSql, (err, data) => {
                    if(err) throw err;
                    const managers = data.map(({ id, first_name, last_name }) => ({ name: first_name + " " + last_name, value: id}));
                    inquirer.prompt([
                        {
                            type: 'list',
                            name: 'manager',
                            message: "Enter employee's manager",
                            choices: managers
                        }
                    ])
                    .then(managerChoice => {
                        const manager = managerChoice.manager;
                        params.push(manager);
                        const sql = `INSERT INTO employee (first_name, role_id, manager_id)
                                    VALUES (?, ?, ?, ?)`;
                        connection.query(sql, params, (err, result) => {
                            if(err) throw err;
                            console.log('Employee has been added')
                        showEmployees();
                        });
                    })
                })
            })
        })
    })
};

// update an employee
updateEmployee = () => {
    // get employee from employee table
    const employeeSql = `SELECT * FROM employee`;
    connection.promise().query(employeeSql, (err, data) => {
        if(err) throw err;
    const employees = data.map(({ id, first_name, last_name }) => ({ name: first_name + " " + last_name, value: id}));
    inquirer.prompt([
        {
            type: 'list',
            name: 'name',
            message: "Which employee would you like to update?",
            choices: employees
        }
    ])
    .then(empChoice => {
        const employee = empChoice.name;
        const params = [];
        params.push(employee);
        const roleSql = `SELECT * FROM role`;
        connection.promise().query(roleSql, (err, data) => {
            if(err) throw err;
            const roles = data.map(({ id, title }) => ({ name: title, value: id }));
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'role',
                    message: "What is the employee's new role?",
                    choices: roles
                }
            ])
            .then(roleChoice => {
                const role = roleChoice.role;
                params.push(role);
                let employee = params[0]
                params[0] = role
                params[1] = employee

                // console.log(params)
                const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
                connection.query(sql, params, (err, result) => {
                    if(err) throw err;
                    console.log('Employee has been updated');
                    showEmployees();
                });
            })
        })
    })
})

};

// function to update employee
updateManager = () => {
    // get employees from employee table
    const employeeSql = `SELECT * FROM employee`;
    connection.promise().query(employeeSql, (err, data) => {
        const employees = data.map(({ id, first_name, last_name }) => ({ name: first_name + " " + last_name, value: id }));
        inquirer.prompt([
            {
                type: 'list',
                name: 'name',
                message: "Which employee would you like to update?",
                choices: employees
            }
        ])
        .then(empChoice => {
            const employee = empChoice.name;
            const params = [];
            params.push(employee);
            const managerSql = `SELECT * FROM employee`;
            connection.promise().query(managerSql, (err, data) => {
                if(err) throw err;

                const managers = data.map(({ id, first_name, last_name }) => ({ name: first_name + " "+ last_name, value: id }));
                inquirer.prompt([
                    {
                        type: 'list',
                        name: 'manager',
                        message: "Who is he employee's manager?",
                        choices: managers
                    }
                ])
                .then(managerChoice => {
                    const manager = managerChoice.manager;
                    params.push(manager);

                    let employee = params[0]
                    params[0] = manager
                    params[1] = employee
                    // console.log params
                    const sql = `UPDATE employee SET manager_id = ? WHERE id = ?`;
                    connection.query(sql, params, (err, result) => {
                        if(err) throw err;
                        console.log("Employee has been updated");
                        showEmployees();
                    });
                })
            })
        })
    })
};

// view employee by department
employeeDepartment = () => {
    console.log('Showing employee by departments...\n');
    const sql = `SELECT employee.first_name,
                        employee.lat_name,
                        department.name AS department
                FROM employee
                LEFT JOIN role ON employee.role_id = role_id
                LEFT JOIN department ON role.department_id = department_id`;

    connection.promise().query(sql, (err, rows) => {
        if(err) throw err;
        console.table(rows);
        promptUser();
    });
}

// delete department
deleteDepartment = () => {
    deleteDepartment = () => {
        const deptSql = `SELECT * FROM department`;
        connection.promise().query(deptSql, (err, data) => {
            if(err) throw err;
            const dept = data.map(({ name, id }) => ({ name: name, value: id }));
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'dept',
                    message: "What department do you want to delete?",
                    choices: dept
                }
            ])
            .then(deptChoice => {
                const dept = deptChoice.dept;
                const sql = `DELETE FROM department WHERE id = ?`;
                connection.query(sql, dept, (err, result) => {
                    if(err) throw err;
                    console.log("Successfully deleted");

                    showDepartments();
                })
            })
        })
    };

    // delete role
    deleteRole = () => {
        const roleSql = `SELECT * FROM role`;
        connection.promise().query(roleSql, (err, data) => {
            if(err) throw err;
            const role = data.map(({ title, id }) => ({ name: title, value: id }));

            inquirer.prompt([
                {
                    type: 'list',
                    name: 'role',
                    message: "What role do you want to delete?",
                    choices: role
                }
            ])
            .then(roleChoice => {
                const role = roleChoice.role;
                const sql = `DELETE FROM role WHERE id = ?`;

                connection.query(sql, role, (err, result) => {
                    if(err) throw err;
                    console.log("Successfully deleted");

                    showRoles();
                })
            })
        })
    }

    // delete employees
    deleteEmployee = () => {
        // get employees from employee table
        const employeeSql = `SELECT * FROM employee`;
        connection.promise().query(employeeSql, (err, data) => {
            if(err) throw err;

            const employees = data.map(({ id, first_name, last_name }) => ({ name: first_name + " "+ last_name, value: id }));

            inquirer.prompt([
                {
                    type: 'list',
                    name: 'name',
                    message: "Which employee would you like to delete?",
                    choices: employees
                }
            ])

            .then(empChoice => {
                const employee = empChoice.name;
                const sql = `DELETE FROM employee WHERE id = ?`;

                connection.query(sql, employee, (err, result) => {
                    if(err) throw err;
                    console.log("successfully Deleted");

                    showEmployees();
                })
            })
        })
    };

};
// view department budget
viewBudget = () => {
    console.log('Showing budget by department...\n');
    const sql = `SELECT department_id AS id,
                        department.name AS department,
                        SUM(salary) AS budget
                FROM role
                JOIN department ON role.department_id = department.id GROUP BY department_id`;
    connection.promise().query(sql, (err, rows) => {
        if(err) throw err;
        console.table(rows);

        promptUser();
    })
};
