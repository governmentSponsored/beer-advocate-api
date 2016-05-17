# Beer Advocate API

Unofficial library for just getting Beer Advocate Scores.

## Example

```javascript
//get name from .php URL parameter beer. Example below.
//Send an AJAX request to http://www.yoursite.com/serveBeerData.php?beer=Anchor%20Steam
```

```javascript
var ba = require('beer-advocate-api');

// Search for a beer
// http://beeradvocate.com/search/?q=Anchor+Steam&qt=beer
ba.beerSearch("Anchor Steam", function(beers) {

    console.log(beers);

});

// Get a specific beer page
// http://beeradvocate.com/beer/profile/29223/84343/
ba.beerPage("/beer/profile/29223/84343/", function(beer) {

    console.log(beer);

});
```
## Output

```javascript
// Search for a beer
[ { beer_name: 'Anchor Steam Beer',
    beer_url: '/beer/profile/28/63/',
    brewery_name: 'Anchor Brewing Company'
    retired: true } ]

// Get a specific beer score
[ '90' ]
```



## License

Beer Advocate API is licensed [MIT](http://opensource.org/licenses/MIT)

* * *

Copyright (c) 2016 Stanley Smith