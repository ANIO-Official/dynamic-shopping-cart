//Global & DOM Variables
const itemInput = document.querySelector("#itemInput")
const addItemBtn = document.querySelector("#addItemBtn")
let shoppingList = document.querySelector("#shoppingList")

//Event Delegation, mouseover to avoid double click
shoppingList.addEventListener("mouseover", (event) => {
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
    item.innerHTML = `${item.textContent} <button class="purchased">Not Purchased</button>
    <button class="deleteBtn">Delete Item</button>`
    shoppingList.appendChild(item)
    itemInput.value = "" //clear the input field
    console.log(`Added ${item.value} to order.`)
})
