# Scoreboard App

This is a scoreboard app that displays total score of matches. This app allows users to keep track of scores for matches, and demonstrates how vanilla javascript and Redux can work together to manage complex state in an efficient and predictable way.

## validations:

The input validation for the scoreboard app includes the following:

- Positive numbers or negative numbers , nan , undefined.
- check if the input for decrement is more than the current value.
- check if the input for increment is less than 0.

# Functions and Definitions

getInputValue(idName) - This function gets the value of an input element with the specified ID and returns it as a number after parsing it.

getTextData(idName) - This function gets the text content of an element with the specified ID and returns it as a number after parsing it.

setValue(previousValueId, newValue) - This function sets the text content of an element with the specified ID to the specified value.

sum(prevValue, newValue) - This function takes two numbers as arguments and returns their sum. It checks if the new input number is greater than 0 and returns an error message if it is not.

subtraction(prevValue, newValue) - This function takes two numbers as arguments and returns their difference. It checks if the second number is greater than 0 and returns an error message if it is not. If the previous number is less than the new number, it returns 0.

incrementFunc(newValueID, prevValueID) - This function gets the value of an input element and the text content of an element with the specified IDs, calculates the sum of the two values using the sum() function, sets the value of the input element to an empty string, and returns the total sum.

decrementFunc(newValueID, prevValueID) - This function gets the value of an input element and the text content of an element with the specified IDs, calculates the difference of the two values using the subtraction() function, sets the value of the input element to an empty string, and returns the total difference.
