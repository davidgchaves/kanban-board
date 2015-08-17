/* Entry point of our app */

var h1Component = require('./h1-component');
var app       = document.createElement('div');

document.body.appendChild(app);
app.appendChild(h1Component());
