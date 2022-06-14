const employees = [{
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

//Each are stored in a global array named `employees`

let employeesArray = [];

//Loop over the `employees` array and do the following:

//* use each employee object as the input to the function described below.
// * `console.log` the results of each iteration.
function calculatedEmployeeBonuses(employeesObject) {
  for (let i = 0; i < employeesObject.length; i++) {
    console.log('We only want to repeat once', employeesObject[i]);
  }
  return employees= { 
    name: employeesObject[i].name, 
    //bonusPercentage: 

  }


}
calculatedEmployeeBonuses(employees);


// Write a declared function that takes in one **Employee** object 
//(as an argument to the function), and returns a new **object** 
//with the following properties:






// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// console.log( employees );