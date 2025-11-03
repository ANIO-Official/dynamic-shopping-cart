//Global & DOM Variables
const itemInput = document.querySelector("#itemInput")
let priceInput = document.querySelector('#priceInput')
const addItemBtn = document.querySelector("#addItemBtn")
const cart = document.querySelector("#cart")
const cartTotal = document.querySelector('#cartTotal')
let totalPrice = 0.00
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
    cart.appendChild(item)

    totalPrice = totalPrice + parseFloat(priceInput.value)
    cartTotal.textContent = `$${totalPrice}`
    console.log(`Current Total ${totalPrice}.`)

    itemInput.value = "" //clear the input field
    console.log(`Added ${item} to order.`)
    
})
