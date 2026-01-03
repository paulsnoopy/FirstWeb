// String, Number, Boolean, Array, Object
let Name = 'paul'
let age = 14
let height = 1.65
let isThai = true
const idcard = '1234'

console.log('My name is', Name)

// if-else condition
let number1 = 5
let number2 = 5
if (number1 != number2) {
    console.log('this is if')
} else if (number1 == number2) {
    console.log('this is else if')
}else {
    console.log('this is else')
}

/*
&& และ
|| หรือ
!  ไม่
*/

/*
while
for
*/

let counter = 0
while (counter < 10) {
    console.log('Hello World')
    counter = counter + 1
}

for (let counter = 0 ; counter < 10 ; counter++) {
    console.log('Hello World')
}

/*
Array
*/

let ages = [30,35,40] // Array 3 times
console.log('age',ages[0])

// 1. แทนที่
ages = [45,50]
console.log('age list', ages)

// 2. ต่อ array
ages.push(55)
console.log('age list', ages)

ages.pop()
console.log('age list', ages)

let ages2 = [30,35,40,45,50]
if (ages2.includes(40)) {
    console.log('you have 40 in list')
}

// เรียงตัวเลข
let ages3 = [35,14,20]
console.log('new age', ages3)
ages3.sort()
console.log('new age', ages3)

let names_list = ['mike','test','ii']
names_list.push('mm')
console.log('name list',names_list.length)

for (let index = 0 ; index < names_list.length ; index++) {
    console.log('name list', names_list[index])
}

/*
object
*/

let student = [{
    age: 30,
    name: 'mike',
    grade: 'A'
},{
    age: 35,
    name: 'jj',
    grade: 'B'
}]

student.push({
    name: 'test',
    age: 40,
    grade: 'C'
})

for (let index = 0 ; index < student.length ; index++) {
    console.log('Student number:', (index + 1))
    console.log('name:', student[index].name)
    console.log('age:', student[index].age)
    console.log('grade:', student[index].grade)
}

// function
let score1 = 50
let score2 = 80
//ประกาศfunction
function calculation_grade(score) {
    if (score >= 80) {
        grade = 'A'
    } else if (score >= 70) {
        grade = 'B'
    } else if (score >= 60) {
        grade = 'C'
    } else if (score >= 50) {
        grade = 'D'
    } else {
        grade = 'F'
    }
    return grade
}
// ใช้ function
let grade1 = calculation_grade(score1)
let grade2 = calculation_grade(score2)
console.log('grade', grade1 ,grade2)