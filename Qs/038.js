// ES6에서 새로 추가된 "나머지 매개변수" : 매개변수를 정의할 때 정해지지 않은 매개변수들을 정의할 수 있게 한다.
// arguments 객체와 유사.
//But arguments 객체는 함수에 전달되는 모든 전달인자를 포함. 나머지 매개변수는 정해지지 않은 나머지를 의미
//나머지 매개변수는 매개변수를 작성하는 곳에서 작성, 다른 매개변수와 차이를 두기 위해 ...연산자와 함께 작성.
//가장 큰 차이 : arguments 객체는 배열이 아님. 나머지 매개변수는 배열.

/*
ex)
function(parameter, ...restParameter){
    arguments 객체는 나머지 매개변수와 다르게 함수의 body에서만 사용함.
}
 */

function sum(...args) {
  var total = 0;
  for (var i = 0; i < args.length; i++) {
    total += args[i];
  }
  console.log(args.indexOf(1)); // 나머지 매개변수는 배열이기 때문에 arguments와 달리 indexOf 등의 메소드 활용 가능.
  return total;
}

console.log("sum : " + sum(1, 2, 3));

function sum2(a, b, ...others) {
  var total = a + b;

  for (var i = 0; i < others.length; i++) {
    total += others[i];
  }
  return total;
}

console.log("sum2 : " + sum2(1, 2));
console.log("sum2 : " + sum2(1, 2, 3, 4)); // 3,4는 나머지 매개변수로 전달.
