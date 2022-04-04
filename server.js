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

}



// view departments - show department names and department ids


// view all roles - show ob title, role id, the department that role belongs to, and the salary for that role


// view all employees - show employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to




// add a new department

// add a new role

// add a new employee



// update employee role

// BONUS - update employee managers

// BONUS - DELETE departments, roles and employees