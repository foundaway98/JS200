//예외 처리하기
//에러 : 개발자가 의도한 에러, 예상치 못한 에러
//개발자가 의도한 에러 : throw문을 사용해서 예외 처리. 에러가 발생했기 때문에 프로그램 중단.
//개발자가 의도한 에러, 예상치 못한 에러 : try-catch-finally문을 사용해서 예외 처리. 에러가 발생해도 프로그램 완료.

function checkNumber(val) {
  if (typeof val !== "number") throw "유효하지 않은 값입니다.";
  console.log("It's Number");
}

//try-catch-finally 예외처리

try {
  checkNumber(100);
  checkNumber("WrongType"); //error 발생. try 문 안에 있기 때문에 발생된 에러 정보는 catch 블록으로 전달.
} catch (e) {
  console.log(`error >>> ${e}`); // 콘솔에 에러 정보 출력. throw문의 문자열이 대입되어 있기 때문에 문자열 출력.
} finally {
  console.log("end"); // 에러 여부와 상관없이 항상 실행.
}
