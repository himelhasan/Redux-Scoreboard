# scoreboard App

This is a scoreboard app that displays total score of a match.

##validations:

- Positive numbers or negative numbers
- check if the input for decrement is more than the current value
- check if the input for increment is less than 0

<!--  -->

This is a JavaScript code that defines various functions and variables, creates a store using the Redux library, and renders the data to the UI. The code also includes a matchObjectGenerator() function that generates a new object for each match. The functions include:

getInputValue(idName) - This function gets the value of an input element with the specified ID and returns it as a number after parsing it. It also sets the value of the input element to an empty string.

getTextData(idName) - This function gets the text content of an element with the specified ID and returns it as a number after parsing it.

setValue(previousValueId, newValue) - This function sets the text content of an element with the specified ID to the specified value.

sum(prevValue, newValue) - This function takes two numbers as arguments and returns their sum. It checks if the second number is greater than 0 and returns an error message if it is not.

subtraction(prevValue, newValue) - This function takes two numbers as arguments and returns their difference. It checks if the second number is greater than 0 and returns an error message if it is not. If the first number is less than the second number, it returns 0.

incrementFunc(newValueID, prevValueID) - This function gets the value of an input element and the text content of an element with the specified IDs, calculates the sum of the two values using the sum() function, sets the value of the input element to an empty string, and returns the total sum.

decrementFunc(newValueID, prevValueID) - This function gets the value of an input element and the text content of an element with the specified IDs, calculates the difference of the two values using the subtraction() function, sets the value of the input element to an empty string, and returns the total difference.

The code also defines an array of match objects allMatches that contains an object with the properties id, incrementBtn, decrementBtn, value, and matchNo. It uses this array to render the data to the UI using the render() function. The render() function sets the text content of the elements with the specified IDs to the values of the corresponding match objects.

The code then creates a store using the Redux library, defines two action identifiers INCREMENT and DECREMENT, and defines two action creator functions increment() and decrement() that create actions with the specified type and payload. It then defines a reducer function scoreReducer() that takes the current state and an action as arguments and returns the updated state based on the action type. The reducer function uses the sum() and subtraction() functions to update the values of the matches in the state array.

Finally, the code subscribes to the store using the subscribe() function and defines event listeners for the increment and decrement buttons that dispatch the corresponding actions to the store.
