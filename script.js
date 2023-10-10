const ITEMS = [
    {
        id: 1,
        name: 'Bluetooth Ultra Thin Wireless Mouse',
        price: 1100,
        image: 'images/DOM-Image.jpg',
        qty: 1
    },
    {
        id: 2,
        name: 'Apple IPhone 11 Pro Max',
        price: 1000,
        image: 'images/iphone.jpg',
        qty: 1
    },
    {
        id: 3,
        name: 'Sony PlayStation 5 (PS5) Console',
        price: 900,
        image: 'images/image3.jpg',
        qty: 1
    },
    {
        id: 4,
        name: 'Plastic Foldable Adjustable Stand Holder For Laptop Black',
        price: 990,
        image: 'images/image2.jpg',
        qty: 1
    }
]

const openBtn = document.getElementById('open_cart_btn')
const cart = document.getElementById('sidecart')
const closeBtn = document.getElementById('close_btn')
const backdrop = document.querySelector('.backdrop') 
const itemsEl = document.querySelector('.items')
const cartItems = document.querySelector('.cart_items')
const itemsNum = document.getElementById('items_num')
const subtotalPrice = document.getElementById('subtotal_price')

let cart_data = []

openBtn.addEventListener('click', openCart)
closeBtn.addEventListener('click', closeCart)
backdrop.addEventListener('click', closeCart)

renderItems()
renderCartItems()

//open cart
function openCart() {
    cart.classList.add('open')
    backdrop.style.display = 'block'

    setTimeout(() => {
        backdrop.classList.add('show')
    }, 0)
}

//close cart
function closeCart() {
    cart.classList.remove('open')
    backdrop.classList.remove('show')

    setTimeout(() => {
        backdrop.style.display = 'none'
    }, 500)
}

//Add Items to Cart 
function addItem(idx, itemId){
    //find same items
    const foundedItem = cart_data.find(item => item.id.toString() === itemId.toString())

    if(foundedItem){
        increaseQty(itemId)
    }
    else{
        cart_data.push(ITEMS[idx])
    }
    updateCart()
    openCart()
}

//remove Cart Items
function removeCartItem(itemId){
    cart_data = cart_data.filter(item => item.id != itemId)

    updateCart()
}

//increase  Qty

function increaseQty(itemId){
    cart_data = cart_data.map((item) => item.id.toString() === itemId.toString() ? {...item, qty: item.qty + 1 } 
    : item
    )

    updateCart()
}

//decrease Qty

function decreaseQty(itemId){
    cart_data = cart_data.map((item) => item.id.toString() === itemId.toString() ? {...item, qty: item.qty > 1 ? item.qty -1 : item.qty } 
    : item
    )

    updateCart()
}

//calculate Items Number
function calcItemsNum(){
    let itemsCount = 0

    cart_data.forEach((item => itemsCount+= item.qty))

    itemsNum.innerText = itemsCount
}

//calculate subtotalPrice
function calcSubtotalPrice(){
    let subtotal = 0

    cart_data.forEach(item => (subtotal += item.price * item.qty))

    subtotalPrice.innerText = subtotal
}

//render items 

function renderItems() {
    ITEMS.forEach((item, idx) => {
        const itemEl = document.createElement('div')
        itemEl.classList.add('item')
        itemEl.onclick = () => addItem(idx, item.id)
        itemEl.innerHTML = `
            <img src="${item.image}" alt="">
                <button>Add to Cart</button>
        `
        itemsEl.appendChild(itemEl)
    })
}

//display renderCartItems

function renderCartItems() {
    // remove everything from cart
    cartItems.innerHTML = ''
    //add new data
    cart_data.forEach(item => {
        const cartItem = document.createElement('div')
        cartItem.classList.add('cart_item')
        cartItem.innerHTML= `
<div class="remove_item" onclick="removeCartItem(${item.id})">
                            <span>&times;</span>
                        </div>
                        <div class="item_img">
                            <img src="${item.image}" alt="">
                        </div>
                        <div class="item_details">
                            <p>${item.name}</p>
                            <strong>${item.price}</strong>
                            <div class="qty">
                                <span onclick="decreaseQty(${item.id})">-</span>
                                <strong>${item.qty}</strong>
                                <span onclick="increaseQty(${item.id})">+</span>
                            </div>
                        </div>
        `

        cartItems.appendChild(cartItem)
    })
}

function updateCart() {
    // re-rendering cart items with updated data
    renderCartItems()
    // update items number in cart
    calcItemsNum()
    // updating subtotal price
    calcSubtotalPrice()
}