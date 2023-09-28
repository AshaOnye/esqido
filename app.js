$('#login').click(function(){
    if($('#email').val() == "" || $('#password').val() == ""){
      $('#msg').html("Username or password cannot be empty") 
    }else{
      $('#msg').html('')
      
      $.ajax({
        url:"http://159.65.21.42:9000/login",
        type:"POST",
        data:{
          "email":$('#email').val(),
          "password":$('#password').val()
        },
        success:function(res){
          if(res.error){
            $('#msg').html(res.error)            
          }else{
            $('#msg').html("Login Successful")  
            LocalStorage.setItem("user",JSON.stringify(res))
          }
         
        },
        error:function(err){
          console.log(err.statusCode)
          $('#msg').html(err) 
        }
      })
    }
  })
  
  $('#register').click(function(){
    if($('#username').val() == "" || $('#password').val() == "" || $('#uphone').val() == "" || $('#uemail').val() == ""){
        $('#msg').html("Username or password cannot be empty") 
      }else{
        $('#msg').html('')
    $.ajax({
      type:"post",
      url:"http://159.65.21.42:9000/register",
      data:{
      "name": $('#username').val(),
      "phone": $('#uphone').val(),
      "email": $('#uemail').val(),
      "password": $('#password').val(),
  },
      success:function(res){
          if(res.error){
            $('#msg').html(res.error)
          }else{
              $('#msg').html("User Created")
          }
      },
      error:function(err){
  
      }
    })
}
  })