const router = require('express').Router()
const path = require('path')

router.get('/', function(req, res) {
  res.render(path.resolve(`${process.cwd()}/views/index.ejs`))
});

router.get('/premium', function(req, res) {
  res.render(path.resolve(`${process.cwd()}/views/premium.ejs`))
}); 

module.exports = router;