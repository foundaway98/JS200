//스코프 : Lexical Scope(정적 스코프) / Dynamic Scope
//자바스크립트 : 정적 스코프

var a = "global";
function print1() {
  console.log(a);
}

function print2() {
  var a = "local";
  print1();
}

print1();
print2();
/*
print2 : global 출력.
print2 내부에서 print1 함수 호출.
print1 함수 블록이 실행될 때, a라는 변수를 전역 변수 a로 설정할지, print2 내부에 정의된 a로 설정할지 => 렉시컬 스코프와 다이나믹 스코프의 차이.
JS : 렉시컬 스코프. 코드를 작성하는 시점에 확정. 이미 print1이 작성될 때는 전역 a를 참조하고 있기 때문에 global 출력.
*/
