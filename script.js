function render(data){
    return `<div class="products">
    <figure>
        <img src="http://159.65.21.42:9000${data.image}"/>
        <img src="http://159.65.21.42:9000${data.image}"/>
    </figure>
    <div class="product-desc"><a href="product_desc.html?id=${data._id}">${data.name}</a></div>
        <p>$${data.price}</p>
   </div>`
  }
  
  function load(){
    $.ajax({
      type:"get",
      url:"http://159.65.21.42:9000/products",
      success:function(res){
        for(let i=0;i<res.length;i++){
          let d = res[i]
          if(d.category =="asha"){
          let product = render(d)
          $('.section-b').append(product)
          }
        }
      },
      error:function(err){
        console.log(err)
      }
    })
  }
  
  load()