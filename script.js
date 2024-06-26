
function elements(tagname, content, attriName, attriValue) {
    const ele = document.createElement(tagname);
    ele.innerHTML = content;
    ele.setAttribute(attriName, attriValue);
    return ele;
  }
  
  const header = elements("h1", "DOM Calculator", "id", "title");
  const description = elements("p","Calculator","id","description");
  
  const input = document.createElement("input");
  input.setAttribute("placeholder", "0");
  input.setAttribute("type", "text");
  input.setAttribute("id", "result");
  input.setAttribute("readonly", "readonly");
  
  const main = elements("main", "", "class", "main");
  const div = elements("div", "", "class", "container");
  const clear = elements("button", "C", "id", "clear");
  const back = elements("button", "&#8592;", "class", "back");
  const dot = elements("button", ".", "class", "dot");
  const multiply = elements("button", "&#10005;", "id", "multiply");
  const seven = elements("button", "7", "id", "7");
  const eight = elements("button", "8", "id", "8");
  const nine = elements("button", "9", "id", "9");
  const divide = elements("button", "/", "id", "divide");
  const four = elements("button", "4", "id", "4");
  const five = elements("button", "5", "id", "5");
  const six = elements("button", "6", "id", "6");
  const minus = elements("button", "-", "id", "subtract");
  const one = elements("button", "1", "id", "1");
  const two = elements("button", "2", "id", "2");
  const three = elements("button", "3", "id", "3");
  const plus = elements("button", "+", "id", "add");
  const zero = elements("button", "0", "id", "0");
  const doublezero = elements("button", "00", "id", "00");
  const equal = elements("button", "=", "id", "equal");
  div.append(
    input,
    clear,
    back,
    dot,
    multiply,
    seven,
    eight,
    nine,
    divide,
    four,
    five,
    six,
    minus,
    one,
    two,
    three,
    plus,
    zero,
    doublezero,
    equal
  );
  main.append(div);
  document.body.append(header, description, main);
  
  document.addEventListener("keydown", (number) => {
    const Keys = /[0-9\.\+\-\*\/]/; 
    if (Keys.test(number.key)) {
      
      input.value += number.key;
    } else if (number.key === "Enter") {
      
      input.value = eval(input.value);
    } else if (number.key === "Backspace") {
      input.value = input.value.slice(0, -1);
    } else if (number.key === "Delete") {
      input.value = "";
    }
    } 
  );
  
  function clickButton (value) {
    input.value += value;
  }
  
  
  one.addEventListener("click", function () {
    clickButton("1");
  });
  two.addEventListener("click", function () {
    clickButton("2");
  });
  three.addEventListener("click", function () {
    clickButton("3");
  });
  four.addEventListener("click", function () {
    clickButton("4");
  });
  five.addEventListener("click", function () {
    clickButton("5");
  });
  six.addEventListener("click", function () {
    clickButton("6");
  });
  seven.addEventListener("click", function () {
    clickButton("7");
  });
  eight.addEventListener("click", function () {
    clickButton("8");
  });
  nine.addEventListener("click", function () {
    clickButton("9");
  });
  zero.addEventListener("click", function () {
    clickButton("0");
  });
  doublezero.addEventListener("click", function () {
    clickButton("00");
  });
  plus.addEventListener("click", function () {
    clickButton("+");
  });
  minus.addEventListener("click", function () {
    clickButton("-");
  });
  divide.addEventListener("click", function () {
    clickButton("/");
  });
  dot.addEventListener("click", function () {
    clickButton(".");
  });
  multiply.addEventListener("click", function () {
    clickButton("*");
  });
  back.addEventListener("click", function () {
    input.value = input.value.slice(0, -1);
  });
  clear.addEventListener("click", function () {
    input.value = "";
  });
  
  equal.addEventListener("click", function () {
   
    input.value = eval(input.value);
  });