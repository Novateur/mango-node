var express = require('express');
var router = express.Router();
var app = express();
var http = require('http');
var bodyParser = require('body-parser');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nova Voice' });
});

app.use(bodyParser.urlencoded({ extended: false }));

// Twilio Credentials
// Mr vals details
var accountSid = 'ACd1075aeb55a161ac7e1e5c28468cbf18';
var authToken = '3fb92f0007c07c1d3ced68f7ae8dbe9e';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

// client.messages.create({
// 	to: "+23480922",
// 	from: "+16692312315",
// 	body: "david is here ahsdbkjah"
// }, function(err, message) {
// 	if (err) console.log(err.message);
// 	if (message) console.log(message.sid);
// });



app.post('/sms', function(req, res) {
	console.log(req.body.Body);
	var msgFrom = req.body.From;
	var msgBody = req.body.Body;

	var twilio = require('twilio');
	// var twiml = new twilio.TwimlResponse();
	// twiml.message('received!');
	// res.writeHead(200, {'Content-Type': 'text/xml'});
	// res.end(twiml.toString());

	res.send(`
	<Response>
        	<Message>
        		Hello ${msgFrom} this is ${msgBody}
		</Message>
	</Response>
	`);
	// console.log(msgBody);



});

http.createServer(app).listen(1337, function () {
	console.log("Express server listening on port 1337");
});
module.exports = router;
