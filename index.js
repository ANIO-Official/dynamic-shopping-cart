//Global & DOM Variables
const itemInput = document.querySelector("#itemInput")
let priceInput = document.querySelector('#priceInput')
const addItemBtn = document.querySelector("#addItemBtn")
const cart = document.querySelector("#cart")
const cartTotal = document.querySelector('#cartTotal')
let totalPrice = 0.00
let cartItem = [] //holds the cart data for each item
//Event Delegation, mouseover to avoid double click
cart.addEventListener("mouseover", (event) => {
    //Purchased Toggle
    if (event.target.classList.contains('purchased')) {
        const btn = event.target.closest('button')
        btn.addEventListener("click", function () {
            btn.classList.toggle('true') //toggle true in class list on click
            if (btn.classList.contains('true')) {
                btn.textContent = "Purchased!" //change text on class true
            }
            else { btn.textContent = "Not Purchased" } //changes back to default message
        })
    }
    //Delete Btn
    if (event.target.classList.contains('deleteBtn')) {
        const listItem = event.target.closest('li')
        const deleteBtn = event.target.closest('button')
        deleteBtn.addEventListener("click", function () {
            totalPrice = totalPrice - parseFloat(listItem.price)
            cartTotal.textContent = `$${totalPrice.toFixed(2)}`
            listItem.remove()
        })
    }
})


//Dynamically added Products
addItemBtn.addEventListener("click", function () {
    const item = document.createElement('li')
    item.className = "shopItem"
    item.textContent = itemInput.value
    
    //creates the buttons for each list item
    item.innerHTML = `${item.textContent} $${priceInput.value} <button class="purchased">Not Purchased</button>
    <button class="deleteBtn">-</button>`

    item.price = priceInput.value //assigns each item a new attribute called price for referencing.
    cart.appendChild(item)
    console.log(`Added ${itemInput.value} to order.`)//check

    //Update the total price
    totalPrice = totalPrice + parseFloat(priceInput.value)
    cartTotal.textContent = `$${totalPrice.toFixed(2)}`
    console.log(`Current Total ${totalPrice.toFixed(2)}.`)//check

    //Clear all fields
    itemInput.value = ""
    priceInput.value = ""
    
    
})
