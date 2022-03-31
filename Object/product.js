function Product(id, productName, photo, price, quantity){
    this.id = id;
    this.productName = productName;
    this.photo = photo;
    this.price = price;
    this.quantity = quantity;
}


function Cart(id, productName, photo, price, count){
    this.id = id;
    this.productName = productName;
    this.photo = photo;
    this.price = price;
    this.count = count;
    this.amount = this.price * this.count;
}

let products = [
    new Product(1, "iPhone 13", "https://i.pravatar.cc/150?img=1", 2000000, 200),
    new Product(2, "Nokia", "https://i.pravatar.cc/150?img=2", 2100000, 210),
    new Product(3, "Oppo", "https://i.pravatar.cc/150?img=3", 3000000, 220),
    new Product(4, "Samsung", "https://i.pravatar.cc/150?img=4", 2500000, 210),
    new Product(5, "iPhone 6s", "https://i.pravatar.cc/150?img=5", 5000000, 120),
    new Product(6, "iPhone 6s", "https://i.pravatar.cc/150?img=6", 5000000, 120)
]

let cart = [];

function renderProduct(){
    let htmls = products.map(function(product){
        return `
        <div class="product">
            <h3 class="heading">${product.productName}</h3>
            <img src="${product.photo}" alt="">
            <p>${formatCurrency(product.price)}</p>
            <p>${product.quantity}</p>
            <button onclick="addToCart(${product.id})">Add to cart</button>
        </div>
        `
    })

    document.querySelector("#show-product").innerHTML = htmls.join("")
}

// DTO ~ Data Transform Object

function addToCart(productId){
    let cartInfo = document.querySelector("#cart-area>a");
    let product = products.find(function(pdt){
        return pdt.id == productId;
    })
    let foundProduct = cart.find(function(cartItem){
        return cartItem.id == productId;
    })
    if(foundProduct === undefined){
        let cartItem = new Cart(product.id, product.productName, product.photo, product.price, 1)
        cart.push(cartItem);
    }
    else{
        foundProduct.count ++;
        foundProduct.amount = foundProduct.count * foundProduct.price;
    }
    cartInfo.innerHTML = `Cart(${cart.length})`;
}
// <input type="number" min=0 value=${item.count} oninput="changeCount(${item.id}, this)" />
function showCartDetail(){
    let htmls = cart.map(function(item,index){
        return `
                <tr>
                    <td>${item.productName}</td>
                    <td>
                        <img class='photo' src="${item.photo}">
                    </td>
                    <td>${formatCurrency(item.price)}</td>
                    <td>
                        ${item.count}
                    </td>
                    <td>${formatCurrency(item.amount)}</td>
                    <td>
                        <button onclick="removeCartItem(${index})">Remove</button>
                    </td>
                </tr>
        `
    })
    document.querySelector("#cart-detail>tbody").innerHTML = htmls.join("");
    
}

function formatCurrency(number){
    return number.toLocaleString('vi-VN', {style : 'currency', currency : 'VND'});
}

function removeCartItem(index){
    debugger;
    cart.splice(index, 1);
    showCartDetail();
    document.querySelector("#cart-area>a").innerHTML = `Cart(${cart.length})`;
}

function changeCount(productId, element){
    alert(element.value)
}
renderProduct();