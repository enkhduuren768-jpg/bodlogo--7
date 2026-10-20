// let  water = 0
// const capacity = 20
// const bucket = 4
// let count = 0
// while (water < capacity ){
//     water += bucket ;
//     count ++;
// } console.log(count);

// let battery = 35
// let minutes = 0
// while (battery < 100){
// battery += 5;
// minutes ++;
// } console.log(minutes);

// let battery = 100;
// let games = 0
// while( battery >= 15){
//     battery -= 15;
//     games ++;
// }console.log(games,battery);

// let temperature = 30
// let target = 22
// let minutes = 0
// while(temperature > target){
//     temperature -=2;
//     minutes ++;
// }console.log(minutes);

// let floor = 2
// let targetFloor = 7
// while( floor < targetFloor){
//     floor ++
//     console.log( floor)

// }

// let tickets = 17;
// let packs = 0;
// while( tickets >= 3){
//     tickets -= 3;
//     packs++
// } console.log(packs + " багц" + tickets + "тасалбар үлдэнэ");

// let items = 38
// const  boxCapacity = 6
// let boxes = 0
// while( items > 0){
// items -= boxCapacity;
// boxes++
// }console.log(boxes + " хайрцаг")

// let paper = 23
// const pagesPerDocument = 5
// let documents = 0
// while( paper >= pagesPerDocument ){
//     paper -= pagesPerDocument
//     documents++
// }console.log( documents+" баримт" + pagesPerDocument + "хуудас")

// let health = 50
// let damage = 12
// let hits = 0
// while(health >= 0){
//     health -= damage
//     hits ++
// } console.log(hits)

// let number = 23
// const divisor = 5
// let quotient = 0
// while(number >= divisor ){
//     number -= divisor;
//     quotient++
// }console.log("Ноогдвор"+quotient+"Үлдэгдэл"+number)

// let number = 160
// let count = 0
// while(number > 10){
//     number/=2
//     count++
// }console.log(count )

// let number = 234
// let sum = 0;
// while (number > 0) {
//   const digit = number % 10;
//   sum += digit;
//   number -= digit;
//   number /= 10;
// }console.log(sum)

// const number = 5724
// targetDigit = 7
// let found = false
// while(number > 0){
//     const digit = number % 10;
//       found = true;
//       break;
// number = ( number - digit)/10
// }
// console.log(found)

// const numbers = [4, 7, 3, 0, 9, 2];
// let sum = 0;
// let i = 0;

// while (numbers[i] !== 0) {
//   sum += numbers[i];
//   i++;
// }

// console.log(sum);

// const  numbers = [5, 8, 2, -1, 7]
// let i = 0
// while(numbers[i] > 0){
//     i++
// }console.log(i)

// const  prices = [3000, 5000, 4000, 2000]
// let money = 10000 
// let i = 0
// while(money >= prices[i]){
//     money -= prices[i];
//     i++;
// }console.log(prices + "бараа" + money + "төгрөг")


// let seats = [true, true, false, true, false]
// let index = 0;
//   let result = -1;
//   while (index < seats.length) {
//     if (seats[index] === false) {
//       result = index;
//       break;
//     }
//     index++;
//   }
//   console.log(result);

// let tasks = ["Имэйл шалгах", "Тайлан бичих", "Код шалгах"]
// while (tasks.length > 0) {
//     const task = tasks.shift();
//     console.log( "Дууссан: " + task);
//   }
//   console.log("Эцсийн массив:", tasks);


// const durations = [15, 20, 10, 25];
// let availableMinutes = 50;
// let index = 0;
// while ( availableMinutes >= durations[index]) {
//   availableMinutes -= durations[index];
//   index++;
// }
// console.log( index + " хичээл,", availableMinutes + " минут үлдэнэ");