//변수 선언
//기존 JS : var => ES6 let, const
//변수 유효 범위를 블록 범위로 지정 가능.

if (true) {
  var functionScopeValue = "global";
  let blockScopeValue = "local";
}

let value = "global value";
if (true) {
  console.log(value);
  let value = "inside value";
}
/*
let으로 선언한 변수는 호이스팅에서 봤던 것 처럼 블록 단위로 일어난다. 하지만 var과 다르게 undefined 값이 할당되지 않음.
블록 시작부터 선언이 이루어진 라인까지 일시적으로 접근을 막음
10~14라인의 코드를 예시로 들면, if문 안의 console.log(value)문 아래에 let 으로 value를 정의함.
그러므로 let~ 위쪽의 console.log 안에 있는 value 변수는 호이스팅 되었고, 실제 let으로 선언한 value를 설정하기 전까지는 접근할 수 없음.

*/

console.log(functionScopeValue);
console.log(blockScopeValue);
