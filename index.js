// Express
const express = require('express')
const app = express()
const port = 8080;

// Hbs
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.set('view engine', 'hbs' );
app.set('views', __dirname + '/views');

// Stactic files
app.use( express.static('public'));


app.get('/',  (req, res) => {
    res.render('index',{
      user: 'Sair Ayestas',
      titulo: 'Examen Desarollo Web'
    });
  });


  app.get('*',  (req, res) => {
    res.render('404',{
      nombre: 'Sair Ayestas',
      titulo: 'Examen Desarollo Web'
    });
  });


  app.listen(port, ()=>{
    // console.clear();
    console.log(('Esta corriendo en el puerto: %s'), port);
})