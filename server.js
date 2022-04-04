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
})
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
            type: 'input'
        }
    ])
}
// add code for answers
.then (function ({ task }) {
    switch (task) {
        case "View all departments":
            viewDepartments();
            break;
            case "View all roles":
                viewRoles();
                break;
                case "View all Employees":
                viewEmployees();
    }
})

    



// view departments - show department names and department ids


// view all roles - show ob title, role id, the department that role belongs to, and the salary for that role


// view all employees - show employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to




// add a new department

// add a new role

// add a new employee



// update employee role

// BONUS - update employee managers

// BONUS - DELETE departments, roles and employees