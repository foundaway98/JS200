//클로저 : 함수가 정의될 때의 렉시컬 환경을 기억하는 함수

function createCounterClosure() {
  let count = 0;
  //객체 반환. 객체에는 increase, getCount 메소드 존재.
  return {
    increase: function () {
      count++;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter1 = createCounterClosure();
const counter2 = createCounterClosure();

counter1.increase();
counter1.increase();

console.log(`counter1's value : ${counter1.getCount()}`);
counter2.increase();
console.log(`counter2's value : ${counter2.getCount()}`);
