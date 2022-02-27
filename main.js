const container=document.getElementById('music')


const cart_items = document.querySelector('#cart .cart-items');
container.addEventListener('click',(e)=>{
    if(e.target.className=="shopaddingbutton"){
        const id1=e.target.parentNode.previousSibling.id
        const id = e.target.parentNode.parentNode.id;
        const name = e.target.parentNode.parentNode.id;
        const img_src = document.querySelector(`#${id} img`).src;
        const price = e.target.parentNode.firstElementChild.innerText;

        let total_cart_price = document.querySelector('#total-value').innerText;
        if (document.querySelector(`#in-cart-${id}`)){
            alert('This item is already added to the cart');
            return
        }
      
       let obj={
           productID:id1
       }
       console.log(obj)
        axios
        .post('http://localhost:3000/cart',obj)
        document.querySelector('.cart-count').innerText = parseInt(document.querySelector('.cart-count').innerText)+1
        const cart_item = document.createElement('div');
        cart_item.classList.add('cart-row');
        cart_item.setAttribute('id',`in-cart-${id}`);
        total_cart_price = parseFloat(total_cart_price) + parseFloat(price)
        total_cart_price = total_cart_price.toFixed(2)
        document.querySelector('#total-value').innerText = `${total_cart_price}`;
        cart_item.innerHTML = `
        <span class='cart-item cart-column'>
        <img class='cart-img' src="${img_src}" alt="">
            <span>${name}</span>
    </span>
    <span class='cart-price cart-column'>${price}</span>
    <span class='cart-quantity cart-column'>
        <input type="text" value="1">
        <button class="remove" type="button">REMOVE</button>
    </span>`
        cart_items.appendChild(cart_item)
         const container = document.getElementById('container');
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.innerHTML = `<h4>Your Product : <span>${name}</span> is added to the cart<h4>`;
        container.appendChild(notification);
        setTimeout(()=>{
            notification.remove();
        },2500)

    }
    if (e.target.className=='cart-btn-bottom' || e.target.className=='cart-bottom' || e.target.className=='cart-holder'){
        document.querySelector('#cart').style = "display:block;"
    }
    if (e.target.className=='cancel'){
        document.querySelector('#cart').style = "display:none;"
    }
    if (e.target.className=='purchase-btn'){
        if (parseInt(document.querySelector('.cart-count').innerText) === 0){
            alert('You have Nothing in Cart , Add some products to purchase !');
            return
        }
        alert('Thanks for the purchase')
        cart_items.innerHTML = ""
        document.querySelector('.cart-count').innerText = 0
        document.querySelector('#total-value').innerText = `0`;
    }
   
    if (e.target.className=="remove"){
        let total_cart_price = document.querySelector('#total-value').innerText;
        total_cart_price = parseFloat(total_cart_price).toFixed(2) - parseFloat(document.querySelector(`#${e.target.parentNode.parentNode.id} .cart-price`).innerText).toFixed(2) ;
        document.querySelector('.cart-count').innerText = parseInt(document.querySelector('.cart-count').innerText)-1
        document.querySelector('#total-value').innerText = `${total_cart_price.toFixed(2)}`
        e.target.parentNode.parentNode.remove()
    }
    
})
window.addEventListener('DOMContentLoaded', (event) => {
    axios
    .get("http://localhost:3000/products").then((data)=>{
        const products=data.data.products;
        // console.log(products)
        const container1=document.querySelector(".music123")
       
        for(let i=0;i<products.length;i++){
            console.log(products[i].id);
            const id=products[i].id;
            const product = document.createElement('div');
             product.classList.add('product');
             product.setAttribute('id',products[i].title)
             const head=document.createElement('h3')
             head.innerText=`${products[i].title}`;
             product.appendChild(head)
             const imgdiv=document.createElement('div')
             imgdiv.classList.add('imagediv')
             imgdiv.setAttribute('id',id);
             const img=document.createElement('img')
             img.classList.add('prodimg');
             img.setAttribute('src',`${products[i].imageUrl}`)
             img.setAttribute('alt',`${products[i].title}`)
             imgdiv.appendChild(img)
             product.appendChild(imgdiv)
             const prodde=document.createElement('div')
             prodde.classList.add("productdetails")
             const pspa=document.createElement("span")
             pspa.innerText=products[i].price;
             prodde.appendChild(pspa)
             const btn=document.createElement("button")
             btn.classList.add("shopaddingbutton")
             btn.setAttribute('type',"button")
             btn.innerText="Add to cart"
             prodde.appendChild(btn)
             product.appendChild(prodde)
             container1.appendChild(product)

        }
    }).catch(err=>console.log(err))
});










