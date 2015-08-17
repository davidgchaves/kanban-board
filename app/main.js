/* Entry point of our app */

require('./stylesheets/main.css');

var h1Component = require('./h1-component');
var app         = document.createElement('div');

document.body.appendChild(app);
app.appendChild(h1Component());
