 const numbers = [1, 2, 3, 4, 5];
 console.log(numbers);
 console.log(numbers.length);
 console.log(numbers[3]);

 const fourth = numbers[4];
 console.log(fourth);

//set or update element value by index 
 numbers[2] = 555;
 console.log(numbers);

 //adding array element using push 
 numbers.push(5,4,3);
 console.log(numbers);

 //removing element by pop
 numbers.pop();
 console.log(numbers);

 //remove an element from the front
 numbers.shift();
 console.log(numbers);

 //adding an element in the front
 numbers.unshift('add korlam');
 console.log(numbers);