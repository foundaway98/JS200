//호이스팅

//자바스크립트에서는 함수를 선언하기 전에 호출이 가능.

hello();
function hello() {
  console.log("hello");
}

hello2(); // TypeError 발생
var hello2 = function () {
  console.log("hi");
};
/*
실제로는 hello2에 해당하는 함수는 호이스팅이 이루어졌고, hello2에는 undefined가 할당됨.
undefined는 호출할 수 없기 때문에 TypeError 발생.
만약 호이스팅이 이루어지지 않았다면 ReferenceError로 hello2가 선언되지 않았다는 에러 발생해야함.

호이스팅은 자바스크립트의 코드를 해석하고 실행하는 방식 때문에 나타남.
자바스크립트 : 코드 해석 단계 / 실행 단계
해석 단계 : 선언 문장을 초기화하면서 스코프 형성
실행 단계 : 값 할당 혹은 계산

ex) hello2()
hello2 변술를 선언하는 문장이 먼저 초기화를 하여, 스코프에 hello2라는 이름에 undefined라는 값을 할당
실행 단계에서 hello2()를 호출
*/
