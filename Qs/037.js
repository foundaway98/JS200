// ES6에 새롭게 추가된 "기본 매개변수" : 매개변수를 정의할 때 기본으로 할당된 인자값과 함께 작성하는 매개변수.

function drawChart(width = 200, height = 400) {
  console.log(`draw ${width} X ${height} chart`);
}
drawChart(100); // width에 해당하는 값은 전달되었지만 height의 값은 전달되지 않았기 때문에 기본값인 400 출력.
drawChart(); // 매개변수에 해당하는 인자가 전달되지 않았기 때문에 width, height 둘 다 기본값으로 출력.

// height의 기본값을 width를 참조하여 설정.
function drawChart2(width = 200, height = width / 2) {
  console.log(`draw ${width} X ${height} chart`);
}
drawChart2(300);
drawChart2();
