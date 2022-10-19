//심볼형 이해하기

const symbol = Symbol(); // 함수 호출을 통해서 Symbol 생성.
const hello = Symbol("hello"); // 함수 호출 시 값을 전달할 수 있음. 이 값은 디버깅 용도. 고유한 Symbol 값은 만들어지지 않음 => Symbol()은 늘 고유한 값을 반환.

console.log(Number(3) === Number(3));
console.log(Symbol("symbol") === Symbol("symbol")); // Symbol()은 늘 고유한 값을 반환하기 때문에 false
console.log(Symbol() === Symbol()); // Symbol()은 늘 고유한 값을 반환하기 때문에 false
console.log(typeof Symbol()); // Symbol()로 만들어진 Symbol은 Symbol 자료형.
console.log("-----------");

const nationility = Symbol("nationility"); // Symbol에 대한 레퍼런스를 변수에 담음.
const user = {
  name: "jay",
};

user[nationility] = "korean"; // 객체의 key로 Symbol 사용 가능. 객체의 키로 사용하기 위해선 Symbol에 대한 레퍼런스를 변수에 담고 있다가 접근할 때마다 사용해야한다.
console.log(user[nationility]);

for (let key in user) {
  // Symbol이 객체의 키로 사용되면 for-in 루프를 통해 심볼 키를 가져올 수 없음.
  console.log(key);
}
console.log("-----------");

//Object의 key를 반환하는 메소드를 사용해도 심볼 키를 가져올 수 없음.
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
console.log(JSON.stringify(user)); // JSON 문자열로 만들 때도 심볼 키는 빠지게 됨
console.log("-----------");

//Object. getOwnPropertySymbol 메소드를 통해 객체의 키에 해당하는 Symbol들을 가져올 수 있음.
const symbolProperties = Object.getOwnPropertySymbols(user);
console.log(symbolProperties);
console.log(user[symbolProperties[0]]);
console.log(user);
