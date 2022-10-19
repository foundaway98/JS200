// 비구조화 할당 : 배열이나 객체의 값을 새로운 변수에 쉽게 할당.
// 객체 비구조화 할당
var obj = { a: 1, b: 2, c: 30, d: 44, e: 5 };

var { a, c } = obj; // 비구조화를 통해 속성 a, c의 값을 가져와 변수에 할당. 중괄호 안에 원하는 속성명을 넣으면 obj 객체를 비구조화하여 해당 속성명에 따른 값을 각 변수에 할당.
console.log(`a >>> ${a}`); // a >>> 1
console.log(`c >>> ${c}`); // c >>> 30

var { a: newA = 10, f: newF = 5 } = obj; // 기존 속성명의 값을 가져와서 새로운 변수명으로 할당 가능. 방법 >>> 객체의 속성명 : 새로운 변수명 = 기본값.
console.log(`newA >>> ${newA}`); // 기존의 값이 있기 때문에 기본값이 아닌 1 출력. 새로운 변수명으로 출력. newA >>> 1
console.log(`newF >>> ${newF}`); // 기존의 값이 없기 때문에 기본값인 5 출력. newF >>> 5

// 배열 비구조화 할당
var arr = [1, 2, 30, 44, 5];

var [b, c, ...rest] = arr; // 배열 비구조화를 통해 b,c에 1,2 할당. ...rest에는 배열의 나머지 요소들이 할당.
console.log(`0) b >>> ${b}`);
console.log(`0) c >>> ${c}`);
console.log(`0) rest >>> ${rest}`);

var [a = 10, f = 9] = [1]; //배열값 1을 비구조화 하면, a 변수에 첫번째 요소 1이 할당된다. 두 번째 f 변수에는 해당 순서의 요소가 없기 때문에 기본값 9 할당.
console.log(`1) a >>> ${a}`);
console.log(`1) f >>> ${f}`);

[a, f] = [f, a];
console.log(`2) a >>> ${a}`);
console.log(`2) f >>> ${f}`);

function getArr() {
  // 함수에서 반환한 배열값도 비구조화 가능.
  return [1, 2, 3, 4, 5, 6];
}

[a, , , , , f] = getArr(); // 함수에서 반환된 배열값을 비구조화. 배열의 첫번째 값과 마지막 값을 각각 a, f에 할당.
console.log(`3) a >>> ${a}`);
console.log(`3) f >>> ${f}`);