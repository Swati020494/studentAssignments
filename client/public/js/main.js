$(document).ready(function()
{
	$("#show").click(function() {
		i=0; count=0;
		if(!$("#search").val())
			$("#lr1").text("No input!!");		
		else{
			$.get("/api/student/search?id="+$("#search").val(), function(data){  
				$("#lr1").text("Name : "+data.name);
			});
	   	 }
	});
	$('#submit').click(function(event){
			event.preventDefault();
			var id = $('#insertid').val();
			var name = $('#name').val();
			var section = $('#section').val();
			$.ajax({
			url:'/api/student/insert',
			type : 'POST',
			data : {
					"id":id,
					"name":name , 
					"section" :section 
					},
			success:function(response){
				console.log("success");
				console.log(response);
					$("#lr1").text(response.msg);
					$('#insertid').val("");
					var name = $('#name').val("");
					var section = $('#section').val("");

			},
			error: function(err){
				console.log("errorss");
				console.log(err);

			}
		});	
	});
});