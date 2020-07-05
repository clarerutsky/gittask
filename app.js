
var sports =  ["vollayball","Tennis","Hockey","Swimming", "Football","Racing"];
console.log(sports);
var delete1 = sports.splice(5);
console.log(delete1," ");
console.log(sports);

//another way to remove item
 delete delete1[5];
console.log(sports," ");
//another way to remove item
delete1= sports.shift();
console.log(delete1," ");

console.log(sports[ 2]);

// Practicing different datatypes
var  content = 10;
console.log(content);
var  content = 10.890;
console.log(content);
var  content = 'A';
console.log(content);
var  content = "this is just demos";
console.log(content);
console.log(typeof(content));

//OBject and Deletion
var student_detail = {
  "NAME": "Mike", "Age": 25, "Major": "Chemistry","code": 2323
};
 student_detail.mark =" 70%";
console.log("Student details are:", student_detail);
//Deleing items in OBJECT
 delete  student_detail.code;
 console.log("Student details are:", student_detail);

// Adding item
 var num = [2,1,4,6,7,9.0,20];
 console.log(num," ");
 num[2]= 50;
 console.log(num," ");
 num.splice(7,0,400);
 console.log(num," ");
