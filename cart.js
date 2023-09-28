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