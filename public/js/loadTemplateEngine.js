
/***********	FUNCTION RENDER	*************/	
var render=function(templateName,targetLayer,mData){
	var data=mData;
	getTemplate(templateName,function(templateName){
		//get template string
		var tpl=$('#'+templateName).html();
		// create template engine
		var pagefn = doT.template(tpl);
		// resultText=template + data
		var resultText = pagefn({farray: data});
		// draw result in targetLayer
		$('#'+targetLayer).html(resultText);		
	});
};


/***********	FUNCTION  GET TEMPLATE	*************/	
var getTemplate=function(templateName, cb){
	var tpl=$('#'+templateName).html();
	if( typeof(tpl) == 'undefined' ){
		loadTemplate(templateName,function(templateName){
			cb(templateName);
		});//end loadTemplate
	} else {
		cb(templateName);
	}//end if
};

/***********	FUNCTION  LOAD TEMPLATE	*************/	
var loadTemplate = function (name,cbSuccess){
	$.ajax({
      		url: 		"/loadTemplate",
      		type: 	"POST",
      		dataType: "HTML",
      		data: 	{name: name},
      		error: 	function(err){
			console.log("templateError "+JSON.stringify(err));
			},
      		success:	function(strData)	{
			var insertTemplate='<script id='+name+' type=text/x-dot-template>';
			insertTemplate+=strData;
			insertTemplate+='</script>';
			$('#template').append(insertTemplate);
			cbSuccess(name);
			}
      		});/* end ajax */
};//end loadTemplate