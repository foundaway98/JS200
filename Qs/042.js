////기존 JS : var => ES6 let, const
//const,let : 블록 단위로 스코프 정의 가능
//const : 선언 시 값을 할당해야 하고, 이후에 재할당 할 수 없음.

const CONST_USER = { name: "jay", age: 30 };
console.log(CONST_USER.name, CONST_USER.age);
//const로 정의된 CONST_USER는 불변 객체가 아니라서 name 속성에 다른 값을 할당할 수 있음.
//객체 내부 상태가 변경 가능하기 때문에 const로 배열을 선언하여도 새로운 요소를 추가하거나 변경 가능.
CONST_USER.name = "jay2";
CONST_USER.age = 31;
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER = { name: "bbo" }; //재할당은 불가능. 새로운 객체로 할당은 못하고 객체 내부의 상태만 변경가능.

const URL = "http://js.com";
URL = "http://js.com"; // const로 정의한 상수에 새로운 문자열 할당하면 TypeError 오류 발생
if (true) {
  const URL2 = "http://js.com";
}
console.log(URL2); //if 블럭 안에서 선언한 상수에 접근해서 error발생.
