console.log("store")
// const coffeeName =document.querySelector('.coffeeName')
// const coffeeRegion =document.querySelector('.coffeeRegion')
// const coffeePrice =document.querySelector('.coffeePrice')
// const coffeeWeight =document.querySelector('.coffeeWeight')
// const imgUrl =document.querySelector('.imgUrl')
const store =document.querySelector('.store')


async function checkCoffee()
{
    const response = await fetch("https://fake-coffee-api.vercel.app/api")
    // .then((res)=>res.json()).then((data)=>console.log(data))
    var data = await response.json()
    // console.log(data)
    // console.log(data[0].name)

    data.map((val)=>{
        let productDiv=document.createElement('div')
        productDiv.classList.add('product')
        store.appendChild(productDiv)
        let storeImg=document.createElement('img')
        storeImg.classList.add('imgUrl')
        storeImg.src=val.image_url
        productDiv.appendChild(storeImg)

        let detailDiv=document.createElement('div')
        detailDiv.classList.add('details')
        productDiv.appendChild(detailDiv)

       let colOneDiv=document.createElement('div')
        detailDiv.appendChild(colOneDiv)
        let productName=document.createElement('p')
        productName.innerHTML=val.name
        colOneDiv.appendChild(productName)
        let productRegion=document.createElement('p')
        productRegion.innerHTML=`${val.region} `
        colOneDiv.appendChild(productRegion)

        let colTwoDiv=document.createElement('div')
        detailDiv.appendChild(colTwoDiv)
        let productPrice=document.createElement('p')
        productPrice.innerHTML=`$${val.price}`
        colTwoDiv.appendChild(productPrice)
        let productWeight=document.createElement('p')
        productWeight.innerHTML=`${val.weight}g`
        colTwoDiv.appendChild(productWeight)

        let cartButton=document.createElement('button')
        cartButton.innerHTML="Add To Cart"
        productDiv.appendChild(cartButton)
        cartButton.addEventListener('click',function(){
            alert('Login To Add Product To Cart')
        })

    })

}

checkCoffee()

