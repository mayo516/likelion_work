//3.연습문제
//다음 array의 각 자리수의 합을 구하세요.
//몰라서 해답 봄 

let a = [11, 22, 33, 111, 2];
let s = [11, 22, 33, 111, 2].join('');
console.log(s);
let sum = 0;
for (var variable in s) {
    console.log(parseInt(s[variable], 10));
    sum += parseInt(s[variable], 10);
}
console.log(sum);