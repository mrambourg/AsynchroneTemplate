/************ LIBRARY ***************************/
//on charge les librairies n�cessaires
var express=require('express');
var app = express();
var bodyParser = require("body-parser");

//on d�fini le port de notre serveur
var port=process.env.PORT || 8080;
// on d�marre le serveur
var server =app.listen(port);

	
/************ EXPRESS CONFIGURATION *********/
	// on utilise bodyparser pour r�cup�rer info post 
	app.use(bodyParser.json()); 		
	app.use(bodyParser.urlencoded({ extended: true })); 
	
	// on remplace dans les requetes client js par /public/js
	app.use("/js",express.static(__dirname + '/public/js'));
	
/************ ROUTES  ***************/
	//on met les routes dans un fichier s�par�
	require(__dirname +'/server/routes/routes.js')(app);  

	
/************ LISTEN SERVER ***************/
	console.log('The magic happens on port ' + port);
