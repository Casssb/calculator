# calculator

The final project of The Odin Project Foundations curriculum using vanilla JS, HTML & CSS. I was loosely using the Windows 10 calculator for styling. 

[Check it out here!](https://casssb.github.io/calculator/) :point_left:

## Thoughts

The most challenging part of this project was trying to keep everything well ordered. My aim was to make the code logical and easy to understand. I actually created a working calculator app pretty quickly but then had to continually re-factor my code to make sure the functions were keeping to simple tasks and the code flow made sense.

## Possible improvements
* I think that this project could be better organised if the calculator was created as an object (or more specifically as a class). Although I don't think this will fundamentally change any of the logic I think it would be cleaner and keep the mutables variables I've used off the global scope.
* I've read that in general it's better to use data attributes over class or ID for selecting non CSS DOM elements. This makes sense as they won't overlap with CSS selectors. I have read that for pure speed ID & class are better optimised in browsers although I'm not sure if this matters much.
* I've spent a lot of time reading over the principles of SOLID & DRY and other such design patterns and I think there's more I could have done to adhere to this. A few of the functions I created take inputs & update the DOM so I think refactoring these so that the data input functions take a callback function that updates the screen would be an improvement. I could also separate a few of the arithmetic functions into smaller single responsibility versions (like keeping the rounding logic separate)