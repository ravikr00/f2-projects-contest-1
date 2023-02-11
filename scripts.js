/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  arr.map(printThroughMap); //each Element Store in "printThroughMap" Variable

  function printThroughMap(arrItem) {
    if(arrItem.marks > 50){
    console.log(arrItem)
    }
  }
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(printThroughforEach);//each element store in "printThroughforEach" variable

  function printThroughforEach(arrItem){
    if(arrItem.marks > 50){
      console.log(arrItem)
    }
  }
}

function addData() {
  //Write your code here, just console.log
 // New Arr store in "newObj" Variable
  let newObj = {id:4,name:"susan",age:"20",marks:45} 
  arr.push(newObj);
  console.log(arr);

}

function removeFailedStudent() {
    //Write your code here
    let filteredFailedStudent = arr.filter(function (value) {
      //callback function
      if (value.marks  > 50) {
        //filtering criteria
        return value;
      }
      
    });
    console.log(filteredFailedStudent);
    
  }
  


function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 5, name: "Omkar", age: "24", marks: 75 },
    { id: 6, name: "Manish", age: "22", marks: 79 },
    { id: 7, name: "Ruchika", age: "21", marks: 38 },

  ]
  let resultArray = arr.concat(arr2);
  console.log(resultArray)
}
