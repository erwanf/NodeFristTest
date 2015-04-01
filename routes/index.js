var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Les Bois sans soif', toto: 'mon nom est Toto' });
});

/* GET regionvin page . */
router.get('/regionvin', function(req,res){
  res.render('pages/regionvin',{title:' Les Session de dégustations'})
});

/* GET description page. */
router.get('/description', function(req, res) {
  res.render('pages/description', { title: 'Le site de Erwan' });
});

/* GET description de la session du val de loire page. */
router.get('/valLoire', function(req, res) {
  res.render('sessions/valLoire',{ title: 'Les vins du val de Loire' });
});

/* GET description de la session du val de loire page. */
router.get('/valleeRhone', function(req, res) {
  res.render('sessions/valleeRhone',{ title: 'Les vins de la vallée du Rhone' });
});


module.exports = router;
