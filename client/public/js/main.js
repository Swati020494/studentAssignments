$(document).ready(function()
{
	
var data1; 

$('#pagntn').twbsPagination({
    totalPages: 20,
    visiblePages: 5,
    onPageClick: function (event, page)
     {
     	//******************************on load of page********************************
	    var name=$("#searchName").val();
	    $.getJSON("http://localhost:8080/data?name="+name+"&page="+page, function(data){   
	    	console.log("type:"+typeof(data));
				var status=data;
				if(!status.success){
					$("#display").text("Sorry! No File found.");
				}
				else{
					data=status.data;
					$(".name").html("");
					$("#search").val("");
				    var i=0;var count=0;
					for (i in data) 
					{	
						$('.name').append(`<p id="idLink">&raquo;<a href="`+data[i].html_url+`" target="_blank">`+data[i].full_name+` </a><br>`+data[i].language+`&nbsp; &#124; `+data[i].description+`</p>`);
			    		count++;
			    	}
			    	if(count!=0) 
			    		$("#display").text(count+" out of 10 records"); 
			    	else 
			    		$("#display").text("Sorry! No Records found.");
			    }

			    });
	 	//******************************code on range**********************************
		$("[type=range]").change(function()		{
		 	i=0;var count=0;
		 	var rangeVal=$("#starR").val();

		 	$("#lr1").text(rangeVal);
			$(".name").html("");
			for (i in data1) 
			{
				if (data1[i].stargazers_count<=rangeVal) 
				{
					$('.name').append(`<p id="idLink">&raquo;<a href="`+data1[i].html_url+`" target="_blank">`+data1[i].full_name+` </a><br>`+data1[i].language+`&nbsp; &#124; `+data1[i].description+`</p>`);
	 		count++;
	    		}
	    	}
		    	if(count!=0) 
		    		$("#display").text(count+" out of 10 records"); 
		    	else 
		    		$("#display").text("Sorry! No Records found.");
		    
		});

		//******************************search by language******************************
			$("#search").keypress(function (e) 
			{
				i=0; count=0;
		    	if (e.which == 13) 
		    	{
		    		$(".name").html("");
		    		if(!$("#search").val())
		    		{ 
		    			for (i in data1) 
							{
								$('.name').append(`<p id="idLink">&raquo;<a href="`+data1[i].html_url+`" target="_blank">`+data1[i].full_name+` </a><br>`+data1[i].language+`&nbsp; &#124; `+data1[i].description+`</p>`);
			    				count++;
		    				}	
		    					
		    		}
		    		else
					{
						$(".name").html("");

						var var2=$("#search").val().toLowerCase();
						
						for (i in data1) 
						{
							var var1=(data1[i].language).toLowerCase();
							if (var1==var2)
							{				
								count++;
								$('.name').append(`<p id="idLink">&raquo;<a href="`+data1[i].html_url+`" target="_blank">`+data1[i].full_name+` </a><br>`+data1[i].language+`&nbsp; &#124; `+data1[i].description+`</p>`);
							}			
						}
				   	 }
				}
				if(count!=0) 
					$("#display").text(count+" out of 10 records"); 
				else 
					$("#display").text("Sorry! No Records found.");
			});

		//******************************search by Name**********************************
			$("#searchName").keypress(function (e) 
			{
				var name=$("#searchName").val();
				if (e.which == 13) 
	    		{
	    			$.getJSON("http://localhost:8080/data?name="+name+"&page=1", function( data ) 
					{   
					data1 = data ;
						$(".name").html("");
						var i=0;var count=0;
						for (i in data) 
						{
							$('.name').append(`<p id="idLink">&raquo;<a href="`+data[i].html_url+`" target="_blank">`+data[i].full_name+` </a><br>`+data[i].language+`&nbsp; &#124; `+data[i].description+`</p>`);
				    		count++;
				    	}
				    	if(count!=0) 
				    		$("#display").text(count+" out of 10 records"); 
				    	else 
				    		$("#display").text("Sorry! No Records found.");

				    }); 
	    		}
	    		else 
				    $("#display").text("Sorry! No Records found.");
			});

	}

});
});		