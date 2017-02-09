var fs=require('fs');
var lodash=require('lodash');
var path=require('path');
var status={
	success :true,
	data:"",
	msg:""
}
function readFileError(err)
{
	status.success=false;
	status.msg="File Not Found!!"
	response.send(JSON.stringify(status));
}
function readFile(localpath,type,callback)
{
	fs.readFile(path.resolve(localpath),type, callback);	
}
exports.getData=function(request,response){
	function processURL(err, data)
		{
			if (err) 
			{	
				readFileError(err);				
					}			
				else
				{
					var items = JSON.parse(data).items;
					var len = items.length ; 
					var nameOfItems = [];
					for(var i =0 ; i<len ; i++)
					{
						if(lodash.includes(items[i].name,request.query.name))
							nameOfItems.push(items[i]);
					}
					var page = request.query.page;
					var items =  [] ;
					var begin = (page-1)*10 ;
					var end = begin +10 ;
					for(var i=begin;i<end && i<nameOfItems.length;i++)
					{
						items.push(nameOfItems[i]);
					}
					status.success=true;
					status.data=items;
					console.log(JSON.stringify(status));
					response.send(JSON.stringify(status));
				}

		}
	if(request.query.name!=null)
	    {
			readFile(__dirname + '/../details.json','utf8',processURL);
		}
		else 
		{
			readFile(__dirname + '/../details.json','utf8',processURL );
		}
	}