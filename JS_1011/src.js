//1. 문제 
let arr = [10, 20, 30, 10, 20, 30, 40, 10];

// 1.1 다음 값의 평균을 구하세요
let average = 0;
let sum = 0;
for (num of arr) {
    sum = sum + num;
}
average = sum / arr.length;
// console.log(average);

//1.2 다음 값의 분산를 구하세요.
let result = arr.map(e => (e - average) ** 2);
// console.log(result);

//2. 연습문제
//다음 string의 평균 값을 구하세요
let str = '5, 4, 10, 2, 5';
let strAvg = str.split(',');
let strSum = 0;
for (num of strAvg) {
    strSum = strSum + parseInt(num);
}
let result2 = strSum / strAvg.length;
// console.log(result2);

