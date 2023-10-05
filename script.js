const openBtn = document.getElementById('open_cart_btn')
const cart = document.getElementById('sidecart')
const closeBtn = document.getElementById('close_btn')

openBtn.addEventListener('click', openCart)
closeBtn.addEventListener('click', closeCart)

//open cart
function openCart() {
    cart.classList.add('open')
}

//close cart
function closeCart() {
    cart.classList.remove('open')
}