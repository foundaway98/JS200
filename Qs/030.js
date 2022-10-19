var address = "seoul";
var members = {};
var addFamily = function (age, name, role) {
  this.members[role] = { age, name };
};

var getHeadcount = function () {
  return Object.keys(this.members).length;
};

var family = { address, members, addFamily, getHeadcount }; // 단축 속성명 적용, {변수명} 으로 정의한 객체는 {변수명 : 변수값}으로 정의된 것과 동일. 위에서 변수 선언 해줬기 때문. 단축 속성명은 자료형에 상관없이 적용 가능.

family.addFamily(30, "chloe", "aunt");
family.addFamily(3, "lyn", "niece");
family.addFamily(10, "dangdangi", "dog");
console.log(family.getHeadcount());
