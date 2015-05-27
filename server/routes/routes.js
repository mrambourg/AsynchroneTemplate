//on charge les librairies n�cessaires
var fs = require("fs");
var path=require('path');

//on d�fini de maniere globale le repertoire public
var dirpublic=path.normalize(__dirname+'../../../public/');
	
//on export les routes d�finis pour app.js
module.exports = function(app) {
	
	/************** GET ROUTES ************/
	// on renvoie la page index.html du repertoire view
	app.get('/',  function(req, res){
		res.sendFile(dirpublic+'/views/index.html'); // load the index page
	});
	
	/************** LOAD TEMPLATE ************/	
	// retourne modele au client
	app.post('/loadTemplate',  function(req, res){
		//on d�fini l'extension de nos modeles
		// on met pas dot car sinon confusion avec word
		var extension='.tpl';
		//on recupere les donn�es envoy�es au serveur
		var mObj=req.body;
		// on defini le nom complet du template
		var filename=dirpublic+'/template/'+mObj.name+extension;
		//on lit le fichier de modele et on le renvoie au client
		fs.readFile(filename, function (err, data) {
			if (err) throw err;
			res.type('text/plain');
			res.status(200).send(data)
		});
	});//end post
	
};	//end module.exports



