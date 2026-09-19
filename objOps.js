let student = {
    name : "Korim",
    id : 102,
    marks:{
        bangla: 75,
        english: 82,
        math: 90,
    },
};

let totalMarks = 0;
let totalSubject = 0;

for(const subject in student.marks){
    totalMarks += student.marks[subject];
    totalSubject ++;
}

console.log(totalMarks,totalSubject);

let avg = (totalMarks/ totalSubject).toFixed(2);

if( avg >= 80 ){
    console.log("Passed with distinction. got", avg,"%");
}else{
    console.log("Mission fail try again!");
}