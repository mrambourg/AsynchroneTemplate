//on charge les librairies nécessaires
var fs = require("fs");
var path=require('path');

//on défini de maniere globale le repertoire public
var dirpublic=path.normalize(__dirname+'../../../public/');
	
//on export les routes définis pour app.js
module.exports = function(app) {
	
	/************** GET ROUTES ************/
	// on renvoie la page index.html du repertoire view
	app.get('/',  function(req, res){
		res.sendFile(dirpublic+'/views/index.html'); // load the index page
	});
	
	/************** LOAD TEMPLATE ************/	
	// retourne modele au client
	app.post('/loadTemplate',  function(req, res){
		//on défini l'extension de nos modeles
		// on met pas dot car sinon confusion avec word
		var extension='.tpl';
		//on recupere les données envoyées au serveur
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



