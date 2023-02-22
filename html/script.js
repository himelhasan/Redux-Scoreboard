// functions to get and set dom properties

function getInputValue(idName) {
  let input = document.getElementById(idName);
  let inputValue = input.value;
  let valueInNum = parseFloat(inputValue);
  input.value = "";
  return valueInNum;
}

function getTextData(idName) {
  let input = document.getElementById(idName).innerText;
  let inputNumber = parseInt(input);
  return inputNumber;
}

function setValue(previousValueId, newValue) {
  let setNewValue = (document.getElementById(previousValueId).innerText = newValue);
  return setNewValue;
}

// Math functions
// sum functions
const sum = (prevValue, newValue) => {
  // check if number is greater than 0
  if (newValue > 0) {
    return prevValue + newValue;
  }
  // check if number is 0
  else if (newValue == 0) {
    console.log("The number is zero");
    return prevValue + newValue;
  }
  // if number is less than 0
  else {
    alert("Please enter positive value!");
    return prevValue;
  }
};

// // subtraction functions
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

function incrementFunc(newValueID, prevValueID) {
  let newValue = getInputValue(newValueID);
  let prevValue = getTextData(prevValueID);
  let totalSum = sum(prevValue, newValue);
  newValue.innerText = "";
  return totalSum;
}
function decrementFunc(newValueID, prevValueID) {
  let newValue = getInputValue(newValueID);
  let prevValue = getTextData(prevValueID);
  let totalSum = subtraction(prevValue, newValue);
  newValue.innerText = "";
  return totalSum;
}

// event listener
// document.getElementById("increment").addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     let value = incrementFunc("increment", "text-data");
//     setValue("text-data", value);
//     e.preventDefault();
//     e.target.value = "";
//     return value;
//   }
// });

// document.getElementById("decrement").addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     let value = decrementFunc("decrement", "text-data");
//     setValue("text-data", value);
//     e.preventDefault();
//     e.target.value = "";
//     return value;
//   }
// });

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

// ////////////////////////////

// redux js codes

// all dom elements
const allMatches = [
  {
    value: 12000,
    id: "text-data",
  },
];

console.log(allMatches[0].value);
// action identifier

const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creator
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

// reducer function

const scoreReducer = (state = allMatches, action) => {
  if (action.type === INCREMENT) {
    const updatedState = { ...state };
    // updatedState[0].value = updatedState[0].value + action.payload;
    // updatedState[0].value += action.payload; // used += short hand  for addition assignment operator.

    // validation for positive and Nan
    updatedState[0].value = sum(updatedState[0].value, action.payload);

    console.log(updatedState);
    return updatedState;
  } else if (action.type === DECREMENT) {
    const newObj = { ...state };
    // newObj[0].value = newObj[0].value - action.payload;
    // newObj[0].value - +action.payload; // used -= short hand  for subtraction assignment operator.

    // validation for positive and Nan
    newObj[0].value = subtraction(newObj[0].value, action.payload);
    return newObj;
  } else return state;
};

// create store
const store = Redux.createStore(scoreReducer);

// render to ui
const render = () => {
  const state = store.getState();
  setValue(allMatches[0].id, allMatches[0].value);
};

// initially render
render();

// subscribe to store
store.subscribe(render);

// event Listeners
document.getElementById("increment").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const value = getInputValue("increment");
    value.innerText = "";
    e.preventDefault();
    store.dispatch(increment(value));
  }
});

document.getElementById("decrement").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const value = getInputValue("decrement").toString();
    value.innerText = "";
    console.log(value);
    e.preventDefault();
    store.dispatch(decrement(value));
  }
});
