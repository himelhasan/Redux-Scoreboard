const counterDiv = document.getElementById("text-data");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

// action identifier
const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creators

const increment = (value) => {
  return {
    type: INCREMENT, // mandatory
    payload: value,
  };
};

const decrement = (value) => {
  return {
    type: DECREMENT, // mandatory
    payload: value,
  };
};

// create initial state
const initialState = {
  value: 760,
};

// create reducer function

// it will always take two parameters -- state and action
// the reducer function needs to be pure function. Its a kind of function that do only its work and doesn't concern about other things.

const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { ...state, value: state.value + action.payload };
  } else if (action.type === DECREMENT) {
    return { ...state, value: state.value - action.payload };
  } else {
    return state;
  }
};

// create store
const store = Redux.createStore(counterReducer);

// render to ui
const render = () => {
  const state = store.getState();
  counterDiv.innerText = state.value.toString();
};

// initially render elements to ui
render();

// subscribe to store changes
store.subscribe(render);

// button eventListener

// incrementBtn.addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     console.log(e);
//     // let value = incrementFunc("increment", "text-data");
//     // setValue("text-data", value);
//     e.preventDefault();
//     store.dispatch(increment(5));
//     e.target.value = "";
//     return value;
//   }
// });

// decrementBtn.addEventListener("keypress", () => {
//   store.dispatch(decrement(2));
// });
