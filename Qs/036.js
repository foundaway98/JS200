//전달 인자(argument)
//매개변수 : 함수 선언 시 작성되는 변수. 전달 인자 : 함수가 호출될 때 전달되는 값
//자바스크립트는 전달 인자의 개수와 매개변수의 개수가 달라도 에러를 발생시키지 않음. 그래서 더 많은 인자를 함수 호출 시 전달할 수 있다.
//자바스크립트에서는 매개변수 외에 함수에서만 사용 가능한 arguments 객체를 제공함.

function sum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i]; // arguments 객체는 배열처럼 인덱스를 통해 접근할 수 있지만, length 속성 외에는 배열의 어떠한 속성과 메소드를 가지고 있지 않다.
  }
  console.log(arguments instanceof Array); // arguments 객체가 배열이 아닌 것 확인.
  return total;
}

var sumOf1to3 = sum(1, 2, 3); // 1,2,3 -> arguments
console.log(sumOf1to3);

function testArg() {
  var newArr = Array.prototype.slice.call(arguments);
  console.log(newArr);
  console.log(newArr.indexOf("b"));
  console.log(arguments.indexOf("b")); // 배열이 아니기 때문에 오류 발생.
}
testArg("a", "b");
