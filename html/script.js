// functions

function getInputValue(idName) {
  let input = document.getElementById(idName);
  let inputValue = input.value;
  console.log(typeof inputValue);
  let valueInNum = parseFloat(inputValue);
  console.log(typeof valueInNum);
  inputValue.value = "";
  return valueInNum;
}

function getTextData(idName) {
  let input = document.getElementById(idName).innerText;
  let inputNumber = parseInt(input);
  return inputNumber;
}

// sum functions

const sum = (prevValue, newValue) => {
  // check if number is greater than 0

  if (newValue > 0) {
    console.log("The number is positive");
    return prevValue + newValue;
  }
  // check if number is 0
  else if (newValue == 0) {
    console.log("The number is zero");
    return prevValue + newValue;
  }

  // if number is less than 0
  else {
    console.log("The number is negative");
    alert("Please enter positive value!");
    return prevValue;
  }
};

// subtraction functions

const subtraction = (prevValue, newValue) => {
  if (prevValue < newValue) {
    return 0;
  } else {
    // check if number is greater than 0
    if (newValue > 0) {
      console.log("The number is positive");
      return prevValue - newValue;
    }
    // check if number is 0
    else if (newValue == 0) {
      console.log("The number is zero");
      return prevValue - newValue;
    }

    // if number is less than 0
    else {
      console.log("enter a number");
      alert("Please enter a number");
      return prevValue;
    }
  }
};

function setValue(previousValueId, newValue) {
  let setNewValue = (document.getElementById(previousValueId).innerText = newValue);
  return setNewValue;
}

function incrementFunc(newValueID, prevValueID) {
  let newValue = getInputValue(newValueID);
  let prevValue = getTextData(prevValueID);
  let totalSum = sum(prevValue, newValue);
  newValue.innerText = "";
  console.log(totalSum);
  return totalSum;
}
function decrementFunc(newValueID, prevValueID) {
  let newValue = getInputValue(newValueID);
  let prevValue = getTextData(prevValueID);
  let totalSum = subtraction(prevValue, newValue);
  newValue.innerText = "";
  return totalSum;
}

document.getElementById("increment").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let value = incrementFunc("increment", "text-data");
    setValue("text-data", value);
    e.preventDefault();
    e.target.value = "";
    return value;
  }
});

document.getElementById("decrement").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let value = decrementFunc("decrement", "text-data");
    setValue("text-data", value);
    e.preventDefault();
    e.target.value = "";
    return value;
  }
});

// all dom elements
const allMatches = [];

// add A match

function addAMatch() {
  const matches = document.getElementById("all-matches");

  let div = document.createElement("div");

  div.innerHTML = `<div class="match">
  <div class="wrapper">
    <button class="lws-delete">
      <img src="./image/delete.svg" alt="" />
    </button>
    <h3 class="lws-matchName">Match 1</h3>
  </div>
  <div class="inc-dec">
    <form class="incrementForm">
      <h4>Increment</h4>
      <input
        type="number"
        name="increment"
        id="increment"
        class="lws-increment"
      />
    </form>
    <form class="decrementForm">
      <h4>Decrement</h4>
      <input
        type="number"
        name="decrement"
        id="decrement"
        class="lws-decrement"
      />
    </form>
  </div>
  <div class="numbers">
    <h2 class="lws-singleResult" id="text-data">120</h2>
  </div>
</div>`;

  matches.appendChild(div);
}
