//함수

//함수 표현식. 변수에 함수 리터럴 할당.
var greeting_expression = function (name) {
  console.log("Hi " + name);
};

//함수 선언문.
function greeting_declaration(name) {
  console.log("hi " + name);
}

greeting_expression("Juchan"); //함수 표현식에서 정의한 함수 이름은 해당 함수 안에서만 호출 가능.
greeting_declaration("Juchan");
