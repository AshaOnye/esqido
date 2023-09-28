function render(d){
	return `
    <tr>
            <td>${d.name}</td>
            <td>${d.quantity}</td>
            <td>${d.price}</td>
            <td>${d.description.substr(0,20)}</td>
            <td>
                <button class="edit">Edit</button>
                <button class="delete" data-id="${d._id}">Delete</button>
            </td>
        </tr>`
}

function load(){
	$.ajax({
		type:"GET",
		url:"http://159.65.21.42:9000/products",
		success:function(res){
			for(let i=0;i<res.length;i++){
				let d = res[i]
				if(d.category =="asha"){
					let html = render(d)
					$('.products').append(html)
				}
			}
		},
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
            url:"http://159.65.21.42:9000/product/"+id,
            success:function(res){
                alert("Product deleted")
            },
            error:function(err){
    
            }
        })
    }
})