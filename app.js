//1. Write an ES6 function that takes an array of numbers and returns an array with each number incremented by 3 using the map method.
// const numbers = [1, 2, 3, 4, 5];
// const incNum = (num)=>num+3;
// const incrementNumbers = numbers.map(incNum);
// const incrementNumbers= numbers.map(incNum=num=>num+3)
// console.log(incrementNumbers);

//2. Write an ES6 function that takes an array of strings and returns an array with all the strings capitalised using the map method.
const myArray = ['apple', 'banana', 'cherry'];
const capString = (arr) => arr.toUpperCase();
const capitalisedStr = myArray.map(capString);
// console.log(capitalisedStr);

//3. Write an ES6 function that takes an array of objects representing people and returns an array of their ages using the map method.
// const people = [{name:'Ankit', age:25}, {name:'Vinit', age:24}, {name:'Shashi', age:29}];
// const getAges = (people)=>people.age
// const ages = people.map(getAges);
// console.log(ages);

//4. Write an ES6 function that takes an array of objects representing products and returns an array with the product names in all lower case letters using the map method.
const products = [{ name: 'Lip Balm', stock: 100 }, { name: 'PERFUME', stock: 400 }, { name: 'Socks', stock: 200 }];
// const prodName = products => products.name.toLowerCase();
// const getProductNamesInLower = products.map(prodName);
// console.log(getProductNamesInLower);

// const getProductNamesInLower = products.map(prodName = arr=> arr.name.toLowerCase());
// console.log(getProductNamesInLower);

const getProductNamesInLowerCase = arr => arr.map(getNum = obj => obj.name.toLowerCase());
// console.log(getProductNamesInLowerCase(products));

//5. Write an ES6 function that takes an array of objects representing cities and returns an array of their names using the map method.
const cities = [{ name: 'New York', population: 8538000 }, { name: 'Los Angeles', population: 3976000 }, { name: 'Bangalore', population: 13608000 }];

const getCityNames = cityArr => cityArr.map(getCity = cityObj => cityObj.name)
// console.log(getCityNames(cities));

//6. Write an ES6 function that takes an array of strings and returns an array with only the strings that have a length greater than 5.
const fruits = ['apple', 'banana', 'cherry', 'watemelon', 'pineapple'];
const filterLongStrings = longStr => longStr.filter(wordLength = word => word.length > 5)
// console.log(filterLongStrings(fruits));

// 7. Write an ES6 function that takes an array of numbers and returns an array with only the numbers that are divisible by 3 and also by 5.

// const numbers = [1, 2, 30, 4, 15];
// const divisibleBy3and5 = numb=>numb.filter(incNumb=param=>param%3==0&&param%5==0)
// console.log(divisibleBy3and5(numbers));
// const isDivisibleBy3and5 = divisibilty =>divisibilty.filter(divBy3and5 = numb=>numb%3==0 && numb%5==0 )
// console.log(isDivisibleBy3and5(numbers));

//8. Write an ES6 function that takes an array of objects with the properties name and age, and returns an array with only the objects that have an age greater than 30.
// const people = [{name:'Rahul', age:25}, {
//   name:'Raj', age:35}, {name:'Vijay', age:45}];
// const filterByAge = obj => obj.filter(ageGreaterThan30 = param=>param.age>30)
// console.log(filterByAge(people));

//9. Write an ES6 function that takes an array of objects with the properties name and score, and returns an array with only the objects that have a score greater than 80.

const students = [{ name: 'Aditya', score: 85 }, { name: 'Bob', score: 75 }, { name: 'Charlie', score: 90 }];
const filterByScore = obj => obj.filter(studScore = largeScore => largeScore.score > 80)
// console.log(filterByScore(students));

// 10. Write an ES6 function that takes an array of objects with the properties name, age and city, and returns an array with only the objects that have a city property of "Indore" and age greater than 70.

const people = [
  { name: 'Ridhima', age: 75, city: 'Indore' },
  { name: 'Akshay', age: 60, city: 'Delhi' },
  { name: 'Udit', age: 80, city: 'Indore' },
  { name: 'Venki', age: 80, city: 'Bangalore' }
];
const filterByCityAndAge = objPeople => objPeople.filter(cityAndAge = objVar => objVar.city == 'Indore' && objVar.age > 70);
//   const filteredPeople = filterByCityAndAge(people);
// console.log(filteredPeople); 

//11. Write an ES6 function that takes an array of objects containing book information (title, author, genre) and returns an array with only the books of "Science Fiction".
const books = [{ title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: " Science Fiction" }, { title: "To  Kill a Mockingbired", author: "Harper Lee", genre: "Fiction" }, {
  title: "1984", author: "George Orwell", genre: "Science Fiction"
}, { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" }];
const filterByGenre = (books, name) => books.filter((objFic) => objFic.genre.includes(name));

// const filteredBooks = filterByGenre(books, "Science Fiction");
// console.log(filteredBooks);

// 12. Write an ES6 function that takes an array of objects containing employee information (name, age, salary) and returns an array with only the employees who earn a salary above 22000 and age is above 25.

const employees = [
  { name: "Abhay", age: 25, salary: 20000 }, {
    name: "Joice", age: 30, salary: 35000
  }, { name: "Reena", age: 35, salary: 15000 }, { name: "Jeena", age: 40, salary: 50000 }
];
const filterBySalary = (arr, objSal, objAge) => arr.filter(objFunction => objFunction.salary > objSal && objFunction.age > objAge);

// const filteredEmployees = filterBySalary(employees, 22000, 25);
// console.log(filteredEmployees);