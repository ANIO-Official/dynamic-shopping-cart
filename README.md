# 5.1 Lab Dynamic Content Creation
## Lab Overview
The purpose of this project is to  practice and reinforce my DOM manipulation skills. The application should allow users to:

- Add items to their cart dynamically.
- View the items they have added, along with their prices and quantities.
- Update the quantity of items in the cart, reflecting real-time price changes.
- Remove items from the cart.
------------------------------------------------
## Table of contents

- [Overview](#overview)
  - [GitHub](#github)
  - [How To Use](#how-to-use)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [Reflection Questions](#reflection-questions)
  - [Useful resources](#useful-resources)
- [Author](#author)

### GitHub Link
https://github.com/ANIO-Official/dynamic-shopping-cart
### How To Use
 1. Clone the repository or Download the ZIP file and extract the files.
 2. Drag and Drop the HTML file into your browser of choice.
 3. Interact with the website in the browser testing it's capabilities.


## My process
Quick brief about process. Here are my steps/general steps:
 1. Reused code from a previous activity.

  - Brought over HTML, CSS, and Javascript files from a shopping cart activity due to similar functionality.

 2. Restructured and Refactored Code

  - Renamed variables to fit new context.
  - Deleted unnecessary assets, functions, methods, and bloat.
  - Added new properties for items added to cart for better dynamic updates.

 4. Bug Fixing, Console.Log Checks, Error Message for Incompletes
 
 - Used Console.Log on variables and Chrome Dev tools to correct bugs.
 - Added an alert as an error message requesting valid inputs when either input is empty/invalid/false.

 3. Restyling and Touchups

  - Adjusting placement of elements
  - Adding pizazz
  - Adjusting overall stylings like borders, fonts, and overall measurements.

### Built with
- JavaScript
- Semantic HTML
- CSS
- BootStrap CSS Library

## Reflection Questions

 1. **How did you dynamically create and append new elements to the DOM?**

  [Answer here]

 2. **What steps did you take to ensure accurate updates to the total price?**

  I added three custom properties to each item: 'item' (as in name), price, and quantity. 

  For initial item added to the cart, I used a variable (totalPrice) to store the total price of the cart. Ensuring that each item takes the current totalPrice and adds their item.price property value. This new total price was then set to the innerText of the actual displayed element (totalPriceText). 
  
  For later updates, I used a function. The function updates the innerHTML of all items in the HTMLCollection of the class name 'foodItems' in the cart by calling those property values inside a template literal that grabs the current values. I called this function whenever the quantity property of an item was changed (increase and delete buttons).

 3. **How did you handle invalid input for product name or price?**

  I used a conditional statement inside my eventListener for my addItem button. It checked if either name or price were invalid before creating a new item. This created an on screen window prompt alerting the user to enter valid information when either invalid value event occurs.

 4. **What challenges did you face when implementing the remove functionality?**

  Initially I was uncertain on how to move update my delete button that used the remove functionality into a decrease button. I did some research and ultimately realized I could make them one in the same by renaming the button class to 'decrease', then adding a conditional to check the current quantity of an item before deciding to remove it fully.

### Useful resources

- [Create a Shopping Cart With Vanilla JavaScript | ES6 | Timestamp: 32:09](https://www.youtube.com/watch?v=UcrypywtAm0) - I got stuck initially trying to figure out how to update my quantity value so I tried to see how other's approached it. I found this video. After watching this, I realized that I should be including a variable to represent the quantity in my template literal. Similar to how he was referencing a variable called number of units.

- [MDN alert()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) - For the alert on invalid input.

## Author

- LinkedIn - [Amanda Ogletree](https://www.linkedin.com/in/amanda-ogletree-a61b60168)