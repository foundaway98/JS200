// 속성 계산명 : 속성 이름을 정의하는 다른 방법
// 대괄호 안에 식을 넣거나 변수를 대입하여 동적으로 객체 속성 생성 가능.

var obj = {};
for (var i = 0; i < 4; i++) {
  obj["key" + i] = i;
}

console.log(obj);

var profile = "chloe:30";
var person = {
  //속성 계산명 적용 시작.
  [profile]: true, // 해당 변수값이 그대로 속성명으로 정의됨.
  [profile.split(":")[0]]: profile.split(":")[1], //계산된 값들이 속성명 : 속성값 으로 정의됨.
};
console.log(person);
