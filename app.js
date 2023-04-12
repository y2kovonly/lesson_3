//классы операторов
//1)унарные - +, -б
//2)бинарные - **, /, %
//3)тернарные -

var num = 2
if (num > 10){
    console.log('больше 10')
}else{
    console.log('меньше 10')
}

console.log(num > 10 ? "больше 10" : 'меньше 10')

var age = prompt('age')
console.log(age >= 18 && age <= 50 ? 'Вы приняты' : 'отказано')

// var age2 = 70
// var str = age2 < 18 ? 'ребенок'
//     :(age2 > 18 && age2 < 60)
//         ?'Рабочий' :'Пенсионер'
// console.log(str)

//7)symbol
//8)bigint = 89n
console.log(typeof bigint)

//truthy and falsy - выражение
//falsy -> 0, -0, 0nn '',"",
var el = '0'
console.log(el ? 'true':)
