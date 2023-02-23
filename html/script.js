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
  else if (newValue === 0) {
    console.log("The number is zero");
    return prevValue + newValue;
  } else if (newValue === NaN || newValue === undefined || newValue < 0) {
    window.alert("Please enter positive value!");
    return prevValue;
  }

  // if number is less than 0
  else {
    alert("Please enter  ELSE value!");
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
    else if (newValue === 0) {
      console.log("The number is zero");
      return prevValue - newValue;
    } else if (newValue === NaN || newValue === undefined || newValue < 0) {
      window.alert("Please enter positive value!");
      return prevValue;
    } else {
      console.log("enter a number");
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

// add a new match to the list
const addAMatch = async () => {
  // getting the all matches div
  const matches = document.getElementById("all-matches");
  let div = document.createElement("div");
  //  adding new match data to the list
  let newMatch = matchObjectGenerator();

  allMatches.push(newMatch);

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
          onclick="incrementEventListener(this)"
        />
      </form>
      <form class="decrementForm">
        <h4>Decrement</h4>
        <input
          type="number"
          name="decrement"
          id=${match.decrementBtn}
          class="lws-decrement"
          onclick="decrementEventListener(this)"
        />
      </form>
    </div>
    <div class="numbers">
      <h2 class="lws-singleResult" id=${match.id}></h2>
    </div>
  </div>`;
  });

  matches.appendChild(div);
  render();
};

// function to create a new match object
const matchObjectGenerator = () => {
  let value = 0;
  let id = `text-data_${allMatches.length + 1}`;
  let incrementBtn = `increment_${allMatches.length + 1}`;
  let decrementBtn = `decrement_${allMatches.length + 1}`;
  let matchNo = allMatches.length + 1;
  return { value, id, incrementBtn, decrementBtn, matchNo };
};

// REDUX JS CODES

// action identifier
const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";

// action creator
const increment = (value, id) => {
  return {
    type: INCREMENT,
    payload: { value, id },
  };
};
const decrement = (value, id) => {
  return {
    type: DECREMENT,
    payload: { value, id },
  };
};
const reset = () => {
  return {
    type: RESET,
  };
};

// reducer function
const scoreReducer = (state = allMatches, action) => {
  if (action.type === INCREMENT) {
    state.map((st) => {
      if (st.id === action.payload.id) {
        st.value = sum(st.value, action.payload.value);
      }
    });
    return state;
  } else if (action.type === DECREMENT) {
    state.map((st) => {
      if (st.id === action.payload.id) {
        st.value = subtraction(st.value, action.payload.value);
      }
    });
    return state;
  } else if (action.type === RESET) {
    state.map((st) => {
      st.value = 0;
    });
    return state;
  } else return state;
};

// create store
const store = Redux.createStore(scoreReducer);

// render to ui
const render = () => {
  const state = store.getState();
  allMatches.map((v) => {
    setValue(v.id, v.value);
  });
};

// initially render
render();

// subscribe to store
store.subscribe(render);

// // EVENT LISTENERS

const decrementEventListener = (e) => {
  const textID = e.parentNode.parentNode.parentNode.children[2].children[0].id;
  const decId = e.id;
  if (decId != null) {
    const inputElement = document.getElementById(decId);
    inputElement.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault(); // Prevent default form behavior
        const value = getInputValue(decId);
        inputElement.value = ""; // Clear input value
        store.dispatch(decrement(value, textID));
      }
    });
  }
};

const incrementEventListener = (e) => {
  const incrementTextID = e.parentNode.parentNode.parentNode.children[2].children[0].id;
  const incrementId = e.id;

  if (incrementId != null) {
    const inputElement = document.getElementById(incrementId);
    inputElement.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault(); // Prevent default form behavior
        const value = getInputValue(incrementId);
        inputElement.value = ""; // Clear input value
        store.dispatch(increment(value, incrementTextID));
      }
    });
  }
};

// reset event handlers function
const resetEventListener = (e) => {
  store.dispatch(reset());
};
