var commando = require('../commando');
commando('hi', function(args,player){
	echo( player, 'Hi ' + player.name);
});