$(document).ready(function()
{
	$("#search").keypress(function (e) 
			{
				i=0; count=0;
		    	if (e.which == 13) 
		    	{
		    		if(!$("#search").val())
		    			$("#lr1").text("No input!!");		
		    		else
					{
						$.get("http://localhost:8080/api/student?id="+$("#search").val(), function(data){  
							$("#lr1").text("Name : "+data.name);
						});
				   	 }
				}

});});