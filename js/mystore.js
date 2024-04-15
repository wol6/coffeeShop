console.log("mystore")
const coffeeName = document.querySelector('.coffeeName')
const coffeeRegion = document.querySelector('.coffeeRegion')
const coffeePrice = document.querySelector('.coffeePrice')
const coffeeWeight = document.querySelector('.coffeeWeight')
const imgUrl = document.querySelector('.imgUrl')
const buyProduct = document.getElementById('buyProduct')
const deleteFromCart = document.getElementById('deleteFromCart')
const quantityCount = document.getElementById('quantityCount')
const cartTotalAmount = document.getElementById('cartTotalAmount')



const store = document.querySelector('.store')
const profileCart = document.querySelector('.profileCart')
const myCart = document.getElementById('myCart')
const close = document.getElementById('close')
const uniqueName = document.getElementById('uniqueName')

uniqueName.innerHTML=`hi ${localStorage.getItem('name')}!!!`

async function checkCoffee() {
    const response = await fetch("https://fake-coffee-api.vercel.app/api")
    // .then((res)=>res.json()).then((data)=>console.log(data))
    var data = await response.json()
    // console.log(data)
    // console.log(data[0].name)

    data.map((val) => {
        let productDiv = document.createElement('div')
        productDiv.classList.add('product')
        store.appendChild(productDiv)
        let storeImg = document.createElement('img')
        storeImg.classList.add('imgUrl')
        storeImg.src = val.image_url
        productDiv.appendChild(storeImg)

        let detailDiv = document.createElement('div')
        detailDiv.classList.add('details')
        productDiv.appendChild(detailDiv)

        let colOneDiv = document.createElement('div')
        detailDiv.appendChild(colOneDiv)
        let productName = document.createElement('p')
        productName.innerHTML = val.name
        colOneDiv.appendChild(productName)
        let productRegion = document.createElement('p')
        productRegion.innerHTML = `${val.region} `
        colOneDiv.appendChild(productRegion)

        let colTwoDiv = document.createElement('div')
        detailDiv.appendChild(colTwoDiv)
        let productPrice = document.createElement('p')
        productPrice.innerHTML = `$${val.price}`
        colTwoDiv.appendChild(productPrice)
        let productWeight = document.createElement('p')
        productWeight.innerHTML = `${val.weight}g`
        colTwoDiv.appendChild(productWeight)

        let cartButton = document.createElement('button')
        cartButton.innerHTML = "Add To Cart"
        productDiv.appendChild(cartButton)
        cartButton.addEventListener('click', function () {
            alert('added to cart')
            location.reload();
        })

        cartButton.addEventListener('click', function () {

            localStorage.setItem("productUrl", val.image_url)
            localStorage.setItem("productName", val.name)
            localStorage.setItem("productRegion", val.region)
            localStorage.setItem("productPrice", val.price)
            localStorage.setItem("productWeight", val.weight)
        })

    })
}

myCart.onclick = function () {
    profileCart.classList.toggle('active')
    close.onclick = function () {
        profileCart.classList.toggle('active')
    }
}

function showCart() {
    imgUrl.src = localStorage.getItem("productUrl")
    coffeeName.innerHTML = localStorage.getItem("productName")
    coffeePrice.innerHTML = `$ ${localStorage.getItem("productPrice")}`
    coffeeRegion.innerHTML = localStorage.getItem("productRegion")
    coffeeWeight.innerHTML = localStorage.getItem("productWeight")

    buyProduct.addEventListener('click', function () {
        alert("Purchased Successfully")

        imgUrl.src = localStorage.removeItem("productUrl")
        coffeeName.innerHTML = localStorage.removeItem("productName")
        coffeePrice.innerHTML = localStorage.removeItem("productPrice")
        coffeeRegion.innerHTML = localStorage.removeItem("productRegion")
        coffeeWeight.innerHTML = localStorage.removeItem("productWeight")
    })

    deleteFromCart.addEventListener('click', function () {
        alert("Deleted Successfully")

        imgUrl.src = localStorage.removeItem("productUrl")
        coffeeName.innerHTML = localStorage.removeItem("productName")
        coffeePrice.innerHTML = localStorage.removeItem("productPrice")
        coffeeRegion.innerHTML = localStorage.removeItem("productRegion")
        coffeeWeight.innerHTML = localStorage.removeItem("productWeight")
    })

}
function totalCount()
{
   let cartCountValue=Number(quantityCount.value)
    console.log(typeof(cartCountValue))
    console.log(Number(localStorage.getItem("productPrice")))
    let cartPrice = Number(localStorage.getItem("productPrice"))
   let cartCount=cartCountValue*cartPrice
   console.log(cartCount)
   cartTotalAmount.innerHTML=`Total $${cartCount}`

}
showCart()

checkCoffee()


