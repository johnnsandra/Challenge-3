// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects

  var adding = true;
  var employeesList = []
  while (adding) {

    // Step 1 get first name
    var firstName = prompt('Enter First Name: ');
    // Step 2 get last name
    var lastName = prompt('Enter Last Name: ');

    // Step 3 get salary
    var salary = +prompt('Enter Salary: ');
    // Verify the salary is a number otherwise set to 0
    if (isNaN(salary)) {
      salary = 0;

    }
    // Add the current employee
    var employeeObj = { 'firstName': firstName, 'lastName': lastName, 'salary': salary }
    employeesList.push(employeeObj)
    // Ask if continue or cancel
    var cont = prompt("continue? Y/N")
    // Then either enter new or return current list
    if (cont === 'N') {
      adding = false;
    }
  }

  return employeesList

}


// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  // Get sum of all salaries
  var totalSalary = 0;
  for (var i = 0; i < employeesArray.length; i++) {

    // var currentEmpl = employeesArray[i];
    // var currentSalary = currentEmpl.salary;
    // take total salary and add current employee salary
    totalSalary = totalSalary + employeesArray[i].salary;

  }
  // Divide by the total number of employees
  var averageSalary = totalSalary / employeesArray.length;
  // Log the result
  console.log(`Average Salary = ${averageSalary}`)
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  // Generate random index
  var randomIndex = Math.floor(Math.random() * employeesArray.length)
  // Display employee of random index
  console.log(`The randomly selected winner is: ${employeesArray[randomIndex].firstName} ${employeesArray[randomIndex].lastName}`)

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
