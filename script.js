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

const cart_data = [
    {
        id: 1,
        name: 'Bluetooth Ultra Thin Wireless Mouse',
        price: 1100,
        image: 'images/DOM-Image.jpg',
        qty: 1
    }
]

openBtn.addEventListener('click', openCart)
closeBtn.addEventListener('click', closeCart)
backdrop.addEventListener('click', closeCart)

renderItems()
//renderCartItems()

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

//render items 

function renderItems() {
    ITEMS.forEach(item => {
        const itemEl = document.createElement('div')
        itemEl.classList.add('item')
        itemEl.innerHTML = `
        <img src="${item.image}" alt="">
                <button>Add to Cart</button>
        `
        itemsEl.appendChild(itemEl)
    })
}

//display renderCartItems

