function load(id){

    $.ajax({
        type:"get",
        url:"http://159.65.21.42:9000/user/"+id,
        success:function(res){
            console.log(res)
            if(!res.error){
                $('.username').val(res.name)
                $('.phone').val(res.phone)
                $('.email').val(res.email)
                $('.password').val(res.password)
            }
            
        },
        error:function(err){
            console.log(err)
        }
    })

    }
    
    let url = location.href
    let arr = url.split("=")
    let id = arr[1]
    load(id)

    $('#btnedit').click(function(){
        $.ajax({
            type:"put",
            data:{
                name:$('.username').val(),
                phone:$('.phone').val(),
                email:$('.email').val(),
                password:$('.password').val(),
            },
            url:"http://159.65.21.42:9000/user/"+id,
            success:function(res){
          
                if(!res.error){
                    alert('User successfully edited')
                    $('.username').val('')
                    $('.phone').val('')
                    $('.email').val('')
                    $('.password').val('')
                }
                
            },
            error:function(err){
                console.log(err)
            }
        })
    })