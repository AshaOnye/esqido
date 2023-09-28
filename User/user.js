function render(d){
	return `
    <tr>
            <td>${d.name}</td>
            <td>${d.phone}</td>
            <td>${d.email}</td>
            <td>${d.password}</td>
            <td>
                <a href="edit.html?id=${d._id}">Edit</a>
                <button class="delete" data-id="${d._id}">Delete</button>
            </td>
        </tr>`
}

function load(){
	$.ajax({
		type:"GET",
		url:"http://159.65.21.42:9000/users",
		success:function(res){
			for(let i=0;i<res.length;i++){
				let d = res[i]
					let html = render(d)
					$('.users').append(html)
				}
			}
		,
		error:function(err){

        }
	})
}

load()

$(document).on('click','.delete',function(){
    let id = $(this).attr('data-id')
    let response = confirm('Are you sure you want to delete')
    if(response == true){
        $.ajax({
            type:"DELETE",
            url:"http://159.65.21.42:9000/user/"+id,
            success:function(res){
                alert("User deleted")
            },
            error:function(err){
    
            }
        })
    }
})