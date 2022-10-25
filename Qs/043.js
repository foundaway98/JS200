//스코프 체인
//실행 컨텍스트(Execution Context), 렉시컬 환경(Lexical Environment)
/*
실행 컨텍스트
코드가 실행되기 위해 필요한 정보를 가지고 있음.
실행 가능한 코드가 실행될 때 생성
ex) 전역 코드, 함수 코드, eval, 모듈 코드

처음에는 전역 코드 먼저 실행
전역 컨텍스트 생성, 전역 코드 순차적 평가
함수가 호출문을 만나면, 새로운 실행 컨텍스트가 생성되면서 해당 함수 실행부 코드를 순차적으로 평가

실행 컨텍스트 : Stack을 이용해서 관리.
새로운 실행 컨텍스트가 생성되면 스택에 쌓고, 실행주인 코드가 종료되면 해당 실행 컨텍스트를 스택에서 제거.
*/

//예시 코드
var person = "harin";

function print() {
  var person2 = "jay";
  function innerPrint() {
    console.log(person);
    console.log(person2);
  }
  innerPrint();
  console.log("print finished");
}
print();
console.log("finished");

/*
===================
전역 실행 컨텍스트 <-
===================
print() 함수 전까지 스택의 상태

===================
print 실행 컨텍스트 <-
전역 실행 컨텍스트
===================
print 실행 컨텍스트 생성

===================
innerPrint 실행 컨텍스트 <-
print 실행 컨텍스트
전역 실행 컨텍스트
===================
print 함수 내부 실행 후 innerPrint() 실행 컨텍스트 생성

===================
print 실행 컨텍스트 <-
전역 실행 컨텍스트
===================
console.log('print finished') 실행


===================
전역 실행 컨텍스트 <-
===================
console.log('finished') 실행

*/
/*
실행 컨텍스트는 렉시컬 환경을 가지고 있다.
렉시컬 환경은 환경 레코드(EnvironmentRecord)와 외부 렉시컬 환경(OuterLexicalEnvironment)로 구성
*/
//실행 컨텍스트 구조
ExecutionContect = {
  LexicalEnvironment: {
    EnvironmentRecord: {},
    OuterLexicalEnvironment: 참조,
  },
};
/*
실제 함수, 변수 등의 식별자와 그 값은 EnvironmentRecord에 key:value 형태로 기록됨.
LexicalEnvironment는 EnvironmentRecord 외에 자신의 실행 환경을 감싸는 외부 실행 환경(OuterLexicalEnvironment)에 대한 참조를 가지고 있다.

각 실행 컨텍스트는 OuterLexicalEnvironment로 체인처럼 연결되어 있다.
각 렉시컬 환경이 연결되어 있기 때문에 스코프 체인 형성 가능.
*/

//예시 코드 실행 컨텍스트와 내부 렉시컬 환경

//전역 실행 컨텍스트
/*
LexicalEnvironment:{
    EnvironmentRecord:{
        person:'harin',
        print:<function>,
    },
    OuterLexicalEnvironment:null
}
*/

//print 실행 컨텍스트
/*
LexicalEnvironment:{
    EnvironmentRecord:{
        person:'jay',
        print:<function>,
    },
    OuterLexicalEnvironment:전역 실행 컨텍스트
}
*/

//inner 실행 컨텍스트
/*
LexicalEnvironment:{
    EnvironmentRecord:{
    },
    OuterLexicalEnvironment:print 실행 컨텍스트
}
*/

/*
innerPrint 함수가 호출될 때 person, person2의 값을 자신의 실행 컨텍스트의 렉시컬 환경에서 찾는다.
하지만 person, person2는 innerPrint 함수 내에 선언되지 않았다.
=> 위 코드처럼 inner 실행 컨텍스트의 환경 레코드에는 아무런 key:value 쌍이 없게 된다.

자신의 실행 컨텍스트에 없으면 외부 렉시컬 환경의 참조를 통해 연결된 print 실행 컨텍스트에서 해당 식별자를 찾는다.
이때, person을 print 실행 컨텍스트의 환경 레코드에서 찾아서 "jay"를 출력하게 된다. 마찬가지로 person2는 전역 실행 컨텍스트까지 가서 값을 찾아 출력.
*/
