//splice (start, count, add, add)


//we use splice to remove elemenst from inside the array
let names = ['amira', 'khaled', 'ahmed', 'saad'];
names.splice(1, 2);
console.log(names);

let namess = ['amira', 'khaled', 'ahmed', 'saad'];
namess.splice(2,2, 'mona', 'hoda');
console.log(namess);

let namesss = ['amira', 'khaled', 'ahmed', 'saad'];
namesss.splice(0,0, 'mona', 'hoda');
console.log(namesss);

// let namessss = ['amira', 'khaled', 'ahmed', 'saad'];
// namessss.splice(1, 0, )

//slice (start, end)
//slice it takes a piece/element from the array, but it doesn't affect the original array

let students = ['amira', 'khaled', 'ahmed', 'saad'];
students.slice(0, 2);
console.log(students);
console.log(students.slice(0, 2));
//if you want the slice to start from right to left, use neative values
let objects = ['amira', 'khaled', 'ahmed', 'saad'];
objects.slice(-3, -1);
console.log(objects);
