//스코프 : 유효 범위. 변수와 매개변수가 어디까지 유효한지를 나타냄.

//JavaScript : 전역과 함수 단위로 스코프를 생성한다.
//함수 안에서 선언된 변수는 함수 블록 안에서만 접근 가능.
//전역변수는 코드 어디서든 접근 가능.

var a = 10;
console.log(a);

function print() {
  var b = 20;
  if (true) {
    var c = 30; // c는 if문 안의 블록에서 선언되었지만, 함수 안에서 var 키워드로 선언한 변수는 모두 함수 스코프에 정의.
  }

  console.log(c);
}

print();
console.log(b); // b : 함수 내에서 선언한 변수. 함수 밖에서 접근할 수 없기 때문에 ReferenceError 발생.
