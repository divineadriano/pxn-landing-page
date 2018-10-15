const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


var app = express();


app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', function(req, res) {
	res.render('pages/home');
});
app.get('/home', (req, res) => res.render('pages/home'))
app.get('/login', function(req, res) {
	res.render('pages/login');
});


app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
  
  

