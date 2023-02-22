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

// event listener for raw js files without redux
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

// all dom elements
const allMatches = [
  {
    id: "text-data_1",
    incrementBtn: "increment",
    decrementBtn: "decrement",
    value: 12000,
    matchNo: 1,
  },
];
console.log(allMatches.length);

//  function to create a new match object
const matchObjectGenerator = () => {
  let value = 0;
  let id = `text-data_${allMatches.length + 1}`;
  let incrementBtn = `increment_${allMatches.length + 1}`;
  let decrementBtn = `decrement_${allMatches.length + 1}`;
  let matchNo = allMatches.length + 1;

  return { value, id, incrementBtn, decrementBtn, matchNo };
};

// ////////////////////////////

// redux js codes

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

    // validation for blank entry, positive numbers and Nan
    updatedState[0].value = sum(updatedState[0].value, action.payload);

    console.log(updatedState);
    return updatedState;
  } else if (action.type === DECREMENT) {
    const newObj = { ...state };
    // newObj[0].value = newObj[0].value - action.payload;
    // newObj[0].value - +action.payload; // used -= short hand  for subtraction assignment operator.

    // validation for blank entry, positive numbers and Nan
    newObj[0].value = subtraction(newObj[0].value, action.payload);
    return newObj;
  } else return state;
};

// create store
const store = Redux.createStore(scoreReducer);

// render to ui
const render = () => {
  const state = store.getState();
  // setValue(state[0].id, allMatches[0].value);

  allMatches.map((v) => {
    setValue(v.id, v.value);
  });
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

// add a new match to the list
const addAMatch = async () => {
  // getting the all matches div
  const matches = document.getElementById("all-matches");
  let div = document.createElement("div");
  //  adding new match data to the list
  let newMatch = matchObjectGenerator();

  allMatches.push(newMatch);
  console.log(allMatches);

  allMatches.map((match) => {
    div.innerHTML = `<div class="match">
    <div class="wrapper">
      <button class="lws-delete">
        <img src="./image/delete.svg" alt="" />
      </button>
      <h3 class="lws-matchName">Match ${match.matchNo}</h3>
    </div>
    <div class="inc-dec">
      <form class="incrementForm">
        <h4>Increment</h4>
        <input
          type="number"
          name="increment"
          id=${match.incrementBtn}
          class="lws-increment"
        />
      </form>
      <form class="decrementForm">
        <h4>Decrement</h4>
        <input
          type="number"
          name="decrement"
          id=${match.decrementBtn}
          class="lws-decrement"
        />
      </form>
    </div>
    <div class="numbers">
      <h2 class="lws-singleResult" id=${match.id}>100000</h2>
    </div>
  </div>`;
  });

  matches.appendChild(div);
  render();
};
