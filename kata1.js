
const students=[
    { personName:'kalpana', age:'13' },
    { personName:'aron', age:'20' },
    { personName:'alex', age:'22' },
    { personName:'eran', age:'23' },
    { personName:'malika', age:'13' },
    { personName:'anupama', age:'15' },
    { personName:'danushka', age:'11' },
    { personName:'madushanka', age:'16' },
    { personName:'Thushan', age:'18' },
    
    ]

const studentOlderThanEighteen = students.filter((student) =>{
return student.age > 18
 
}).map((value) => {

   return value.personName
})
console.log(studentOlderThanEighteen);
let ma = studentOlderThanEighteen
console.log( ma);