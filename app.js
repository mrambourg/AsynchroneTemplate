/************ LIBRARY ***************************/
//on charge les librairies nécessaires
var express=require('express');
var app = express();
var bodyParser = require("body-parser");

//on défini le port de notre serveur
var port=process.env.PORT || 8080;
// on démarre le serveur
var server =app.listen(port);

	
/************ EXPRESS CONFIGURATION *********/
	// on utilise bodyparser pour récupérer info post 
	app.use(bodyParser.json()); 		
	app.use(bodyParser.urlencoded({ extended: true })); 
	
	// on remplace dans les requetes client js par /public/js
	app.use("/js",express.static(__dirname + '/public/js'));
	
/************ ROUTES  ***************/
	//on met les routes dans un fichier séparé
	require(__dirname +'/server/routes/routes.js')(app);  

	
/************ LISTEN SERVER ***************/
	console.log('The magic happens on port ' + port);
