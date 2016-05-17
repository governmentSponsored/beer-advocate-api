//had to make path absolute because relative wouldn't recognize this module.
var ba = require('/usr/local/lib/node_modules/beer-advocate-api');

//get name from .php URL parameter beer. Example below.
//http://www.yoursite.com/serveBeerData.php?beer=Anchor%20Steam
var beerName = '';
process.argv.forEach(function (val, index, array) {
	if(index >= 2) { 
		beerName += val + ' ';
	}
});
beerName = beerName.trimRight();

// Search for a beer, based on the param. Example below.
// http://beeradvocate.com/search/?q=Anchor+Steam&qt=beer
ba.beerSearch(beerName, function(beers) {
	
	//search will return beer page's URL. Example below.
	//http://www.beeradvocate.com/beer/profile/28/63/
    ba.beerPage(beers[0], function(beer) {
    	console.log(beer);
    });

});