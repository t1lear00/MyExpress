var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log("kukkuluuruu")
});

router.use(function (request, response,next) {
  console.log("olen välivehje")
  next();
});

router.get('/toka',function(request,response)
{
  response.send('olenpa toka hyvinkin')
  console.log("tokapa tietenkin")

});

router.get('/kolmas/:nimi',function(request,response)
{
  response.send('olenpa vaan '+request.params.nimi)
  console.log(request.params.nimi)

});

router.get('/neljas/:enimi/:snimi',function(request,response)
{
  response.send('olenpa vaan '+request.params.enimi+' '+request.params.snimi)
  //console.log(request.params.nimi)

});






router.post('/',function(request,response)
{
  response.send(request.body)
})
module.exports = router;
