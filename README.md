# limitCharacts

> Limits and trim the amount of characters added to any input/textarea tag

### Use

#### Web/HTML:
```
var elem = document.querySelectorAll('input'),
    limit = 100;
limitCharacts(elem,limit);
```

#### AMD/CommonJS:
```
var limit = require('limitCharacts.js');
var text = 'Limit this text field';
var length = 5;
limit.limitCharacts( text, length );
```


### Demo

[juanbrujo.github.io/limitCharacts](http://juanbrujo.github.io/limitCharacts/)

