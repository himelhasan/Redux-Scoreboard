// all dom elements

const allMatches = document.getElementById("all-matches");

// matches

const matches = [];

// functions

function getInputValue(idName) {
  let input = document.getElementById(idName);
  let inputValue = input.value;
  let valueInNum = parseFloat(inputValue);
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
  if (prevValue > newValue) {
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
      console.log("The number is negative");
      alert("Please enter positive value! We will do the math for you");
      return prevValue;
    }
  } else {
    return 0;
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
