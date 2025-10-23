// Step 2: Defining variables and functions

// 1️⃣ Initialize the employees array
const employees = [
  { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
  { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
  { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
  // You can add more employee records below if you want:
  // { id: 4, name: 'Emma Brown', age: 32, department: 'HR', salary: 55000 },
];

// 2️⃣ Function to display all employees
function displayEmployees() {
  const totalEmployees = employees
    .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
    .join('');
  document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

// 3️⃣ Function to calculate total salaries
function calculateTotalSalaries() {
  const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
  alert(`Total Salaries: $${totalSalaries}`);
}

// 4️⃣ Function to display only HR employees
function displayHREmployees() {
  const hrEmployees = employees.filter(employee => employee.department === 'HR');
  const hrEmployeesDisplay = hrEmployees
    .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
    .join('');
  document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

// 5️⃣ Function to find an employee by their ID
function findEmployeeById(employeeId) {
  const foundEmployee = employees.find(employee => employee.id === employeeId);
  if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =
      `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
  } else {
    document.getElementById('employeesDetails').innerHTML = 'No employee has been found with this ID';
  }
}
