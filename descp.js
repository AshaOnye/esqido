function renderCart(data){
//     return `<div>
//     <div class="cart-img">
//             <div><img src="http://159.65.21.42:9000${data.image}" alt="" class="cart-pic"></div>
//             <div class="cart-text">
//                 <h5 class="cart-title">${data.title}</h5>
//                  <p>Price:${data.price}</p>
                 
//             </div>
//         </div>

//         <div class="qty-btn1">
//             <h5>Quantity</h5>
//      <select>
//         <option value="">1</option>
//         <option value="">2</option>
//         <option value="">3</option>
//         <option value="">4</option>
//         <option value="">5</option>
//         <option value="">6</option>
//         <option value="">7</option>
//         <option value="">8</option>
//         <option value="">9</option>
//         <option value="">10+</option>
//      </select>
//      </div>
      
//      <h6 class="sub-price">${data.price}</h6>
//  </div>`

      return `<div>
      <div class="cart-nav">
            <h2>Your Cart</h2>
            <div class="total">
                <div>
                    <p>Subtotal</p>
                     <h4>$${data.price}</h4>
                </div>
                <div>
                    <button class="check-btn1">CHECKOUT</button>
                </div>
            </div>
        </div>
    
        <div class="promo">
            <div class="promo-text">
                <h5>This Week Promotion: Use Code LINE30 for 30% OFF 2+ Liners!</h5>
            <p>Not applicable with other offers.</p>
            </div>
        </div>
    
        <div class="cart-content">
            <div class="cart-img">
                <div><img src="http://159.65.21.42:9000${data.image}" alt="" class="cart-pic"></div>
                <div class="cart-text">
                    <h5 class="cart-title">${data.title}</h5>
                     <p>Price: $${data.price}</p>
                </div>
            </div>
    
            <div class="qty-btn1">
                <h5>Quantity</h5>
         <select>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10+</option>
         </select>
         </div>
          
         <h6 class="sub-price">$${data.price}</h6> 
        </div>
    
        <div class="sub">
            <h2>Subtotal</h2>
            <h6 class="sub-price">$${data.price}</h6>
        </div>
    
        <div class="shipping-text">
            <h4>Shipping & taxes calculated at checkout</h4>
        </div>
    
        <div class="checkout-div">
            <div class="checkout-btn">
                <button>CHECKOUT</button>
            </div>
        </div>
      </div>`
 }


function load(id){
    $.ajax({
        type:"get",
        url:"http://159.65.21.42:9000/product/"+id,
        success:function(res){
       
            $('.text-title').html(res.name)
            $('.descp').html(res.description)
            $('.price-tag').html(res.price)
            $('.prod-pic').attr('src',"http://159.65.21.42:9000"+res.image)
            $('.add-cart').attr('data-id', res._id)
            
        },
        error:function(err){
            console.log(err)
        }
    })
    }
    
    let url = location.href
    let arr = url.split("=")
    load(arr[1])


    $(".add-cart").click(function (){
        let id = $(this).attr('data-id')
        $.ajax({
            url:"http://159.65.21.42:9000/product/"+id,
            type: "get",
            success: function (res){
                let carts = []
                if(localStorage.getItem('cart') != null){
                    carts = JSON.parse(localStorage.getItem('cart'))
                    carts.push(res)
                }
                else{
                    carts.push(res)
                }
                localStorage.setItem('cart', JSON.stringify(carts))
                alert("added")
            }
        })

    })




    $('.add-cart').click(function(){})

    function items(){
        let carts = []
        if(localStorage.getItem('cart') != null){
            carts = JSON.parse(localStorage.getItem('cart'))
            for(let i = 0; i < carts.length; i++){
                let p = carts[i]
                console.log(p)
                let data = renderCart(p)
             $('.cart-section').append(data)
                console.log(data)
            }
        }
    }
    items()