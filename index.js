const Database = require("better-sqlite3");
const db = new Database("Chinook_Sqlite.sqlite");

// db.pragma("journal_mode = WAL");

/**
 * READ ALL EMPLOYEES
 *
 * 1) List all employees from the Employee table in the database
 *    We want all columns of data listed on each employee
 * 2) Use the 'all' method to execute the prepared statement so it returns all matching rows received from the query
 */

const listAllDataInTable = (columns, tableName) => {
  if (typeof columns === "string" && columns === "*") {
    return db.prepare(`SELECT * FROM ${tableName}`).all();
  }

  if (Array.isArray(columns)) {
    return true;
  }
};

// const list = listAllDataInTable("*", "Employee");
// console.log("list all employees: ", list);

// const readStatement = db.prepare("SELECT * FROM Employee").all();
// console.log(readStatement);

/**
 * CREATE NEW EMPLOYEE
 *
 * 1) Create an insert statement and use placeholders ('?') to represent the values of the data that we want to create on the new employee
 * 2) Use the 'run' method to execute the prepared statement. This returns an info object.
 */

const createNewDataRow = (tableName) => {
  const insertStatement = db.prepare(
    `INSERT INTO ${tableName} (LastName, FirstName) VALUES (?, ?)`
  );

  return insertStatement.run("Nielsen", "Klaus");
};

const info = createNewDataRow("Employee");
console.log(info);

const list = listAllDataInTable("*", "Employee");
console.log("list new employee: ", list[list.length - 1]);

/**
 * UPDATE EMPLOYEE DATA
 *
 * 1) Find the employee whose data we want to change
 *    Look through the relevant table and find an employee that lives up to certain criteria
 *    (assume we don't know the employee's id)
 * 2) Once found, save their employee id in a variable for later use
 * 3) Now that we have the employee id, create a statement to update user data and run the statement
 */
// const findEmployeeStatement = db
//   .prepare(
//     "SELECT * FROM Employee WHERE FirstName='Klaus' AND LastName='Nielsen'"
//   )
//   .get();
// const foundEmployeeId = findEmployeeStatement["EmployeeId"];
// console.log(foundEmployeeId);

// const updateStatement = db.prepare(
//   "UPDATE Employee SET FirstName = 'Claudia' WHERE EmployeeId = ?"
// );
// const updatedEmployee = updateStatement.run(foundEmployeeId);
// console.log(updatedEmployee);

/**
 * DELETE EMPLOYEE
 *
 * 1) Find the employee whose data we want to change
 *    Look through the relevant table and find an employee that lives up to certain criteria
 *    (assume we don't know the employee's id)
 * 2) Once found, save their employee id in a variable for later use
 * 3) Now that we have the employee id, create a statement to delete user data and run the statement
 */

// const findEmployeeStatement = db
//   .prepare(
//     "SELECT * FROM Employee WHERE FirstName='Claudia' AND LastName='Nielsen'"
//   )
//   .get();
// const foundEmployeeId = findEmployeeStatement["EmployeeId"];
// console.log(foundEmployeeId);

// const deleteStatement = db.prepare("DELETE FROM Employee WHERE EmployeeId = ?");
// const deleteEmployee = deleteStatement.run(`${foundEmployeeId}`);
// console.log(deleteEmployee);
