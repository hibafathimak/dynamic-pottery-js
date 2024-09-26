const home=()=>{
    window.location="./index.html"
}
const prod=()=>{
    window.location="./shop.html"
}
const about=()=>{
    window.location="./about.html"

}
const contact=()=>{
    window.location="./contact.html"

}
const cart=()=>{
    window.location="./cart.html"

}

function viewProduct(val,id){

    sessionStorage.clear()

    nodeId=id
    
    var productName=document.getElementById(nodeId).getElementsByClassName('pdName')[0].innerHTML
    var productPrice=document.getElementById(nodeId).getElementsByClassName('product-price')[0].innerHTML
    var productImg=document.getElementById(nodeId).getElementsByClassName('productImg')[0].src
    
    product={
      id:val,
      name:productName,
      price:productPrice,
      img:productImg
    }
    sessionStorage.setItem("id",JSON.stringify(val))
    sessionStorage.setItem(JSON.stringify(val),JSON.stringify(product))
    window.location="./product.html"
    }




function moveToCart(...id){
    nodeId=id

    var productName=document.getElementById(nodeId).getElementsByClassName('pdName')[0].innerHTML
    var productPrice=document.getElementById(nodeId).getElementsByClassName('product-price')[0].innerText
    var productImg=document.getElementById(nodeId).getElementsByClassName('productImg')[0].src
    // var productQuantity=document.getElementById(nodeId).querySelector('.inputQuantity').value


console.log(document.getElementsByClassName('productName'));

    var cartItem=
        {
            // id:nodeId,
            name:productName,
            price:productPrice,
            img:productImg,
            // qty:productQuantity?inputQuantity:0
        }
    cartArray=[]
    cartArray.push(cartItem)

    sessionStorage.setItem("cartArray",JSON.stringify(cartArray))

    window.location="./cart.html"
}

// addToCart=()=>{
//     cartArray=sessionStorage.getItem("cartArray")

//     productImg=document.getElementsByClassName("productImg")[0].src
//     productPrice=document.getElementsByClassName("product-price").innerText
//     productName=document.getElementsByClassName("pdName").innerText
//     qty=document.getElementById("inputQuantity").innerText

//     var cartItem=
//         {
//             // id:nodeId,
//             name:productName,
//             price:productPrice,
//             img:productImg,
//             qty:qty
//         }
//         cartArray.push(cartItem)
//         sessionStorage.setItem("cartArray",JSON.stringify(cartArray))


//     window.location="./cart.html"
// }