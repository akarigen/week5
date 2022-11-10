//НЕДЕЛЯ 5
//Задание 1

function cube(num) {
    console.log(num* num * num)
}
cube(2)

//Задание 2 

function checkNumber(number) {
    if(number>0){
        console.log("+++")
    }
    else {
        console.log("---")
    }

}
checkNumber(-1)

//Задание 3

function returnCube(num1) {
    return (num1* num1 * num1);
}
let res = cube(3)

//Задание 4

function getString(number1) {
    return (String(number1));
}
let getn = getString(234)
console.log(typeof getn)