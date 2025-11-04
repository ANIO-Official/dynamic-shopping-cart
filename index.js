//Global & DOM Variables
const itemInput = document.querySelector("#itemInput")
let priceInput = document.querySelector('#priceInput')
const addItemBtn = document.querySelector("#addItemBtn")
const cart = document.querySelector("#cart")
let cartData = []
const totalPriceText = document.querySelector('#totalPriceText')
let totalPrice = 0.00
let foodItems = document.getElementsByClassName('foodItems')

//Event Delegation
cart.addEventListener("click", (event) => {
    //increase quantity btn
    if (event.target.classList.contains('increase')) {
        const item = event.target.closest('li')
        item.quantity = item.quantity + 1  //increase by 1 per click
        totalPrice = totalPrice + parseFloat(item.price) //update total price data
        totalPriceText.textContent = `$${totalPrice.toFixed(2)}`

        updateItemDisplay()
        console.log(`Updated quantity of ${item.item} | Quantity ${item.quantity}`) //check quantity
        console.log(`Current Total ${totalPrice.toFixed(2)}.`) //check after quantity update
    }
    //Decrease / Delete Btn
    if (event.target.classList.contains('decrease')) {
        const item = event.target.closest('li')
        //Update price data and display
        totalPrice = totalPrice - parseFloat(item.price)
        totalPriceText.textContent = `$${totalPrice.toFixed(2)}`

        //adjust final actions based on quantity
        if (item.quantity > 1) {
            item.quantity = item.quantity - 1
            updateItemDisplay()
            console.log(`Updated quantity of ${item.item} | Quantity ${item.quantity}`) //check quantity
            console.log(`Current Total ${totalPrice.toFixed(2)}.`) //check after quantity update
        }
        else {
            console.log(`Removed ${item.item} from cart`) //check quantity
            console.log(`Current Total ${totalPrice.toFixed(2)}.`) //check after quantity update
            
            //Remeve from data
            const index = cartData.indexOf(item)
            if(index > -1){
                cartData.splice(index, 1)
                console.log('removed item from data')
            }
            //remove from display
            item.remove()
        }
    }
})


//Dynamically added Products
addItemBtn.addEventListener("click", function () {
    if (!itemInput.value || !priceInput.value) {
        window.alert('Please enter a valid item and price.')
        console.log('Missing item information. Enter new values to try again.')
    }
    else {
        //Render Cart
        renderCart()
        //Update the total price
        totalPriceText.textContent = `$${totalPrice.toFixed(2)}`
        console.log(`Current Total ${totalPrice.toFixed(2)}.`)//check

        //Clear all fields
        itemInput.value = ""
        priceInput.value = ""
    }
})

//Render Items using a fragment
function renderCart() {
    const fragment = document.createDocumentFragment()

    //List Item setup
    const item = document.createElement('li')
    item.className = "foodItems"
    item.item = itemInput.value //assigns new attribute item with value of item input
    item.textContent = item.item
    item.price = priceInput.value //assigns new attribute price with value of price input
    item.quantity = 1 //assigns new attribute quantity with default value 1
    totalPrice = totalPrice + parseFloat(item.price)

    //creates the buttons for each list item
    item.innerHTML =
        `${item.textContent} $${item.price}
        <div class="quantity-container">
        <button class="decrease">-</button>
        <p class="quantity" style="display: inline;">${item.quantity}</p>
        <button class="increase">+</button>
        </div>`

    //Cart Data and display initial update
    cartData.push(item)
    console.log(`Added ${itemInput.value} to order.`)//check
    console.log(cartData)
    for (let items in cartData) {
        fragment.appendChild(cartData[items])
    }
    cart.appendChild(fragment)
}

//Update item values
function updateItemDisplay() {
    for (let item of foodItems) {
        item.innerHTML =
            `${item.item} $${item.price}
        <div class="quantity-container">
        <button class="decrease">-</button>
        <p class="quantity" style="display: inline;">${item.quantity}</p>
        <button class="increase">+</button>
        </div>`

    }
}