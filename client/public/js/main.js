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
						$.get("http://localhost:8080/data?id="+$("#search").val(), function(data){  
							// if(typeof(data)==string)
							// 	$("#lr1").text("No Records found");
							// else
								$("#lr1").text("Name : "+data.name);
						});
				   	 }
				}

});});