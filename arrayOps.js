let marks = [55,44,33,44,55,66,43];
// let max = marks[0];
// for(let i = 1; i< marks.length ; i++){
//     if(max < marks[i]){
//         max = marks[i];
//     }
    
// }
// console.log("max: ",max);

// let sum = 0;
// for( let mark of marks){
//     sum += mark;
// }
// console.log(sum);
// console.log(sum/marks.length);
let reMarks = [];
for( let i=marks.length - 1; i>= 0; i--){
    reMarks.push(marks[i]);
}
console.log(reMarks);