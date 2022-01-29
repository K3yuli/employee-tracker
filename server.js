// import express 
const express = require('express')
// mysql2
const mysql = require('mysql2');
// import connection
const db = require('./db/connection');


// add port designation and the app expression
const app = express();


// creat array of questions/selections
function promptUser(){
    return inquirer.prompt([
    {
        type: 'list',
        name: 'choices',
        message: 'What would you like to do?',
        choices: ['View all departments',
                   'View all roles', 
                   'View all employees', 
                   'Add a department', 
                   'Add a role', 
                   'Add an employee', 
                   'Update an employee role']
    }
])
// add code for answers

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