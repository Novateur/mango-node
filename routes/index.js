var express = require('express');
var router = express.Router();
var app = express();
var http = require('http');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nova Voice' });
});

// Twilio Credentials
var accountSid = 'ACe03a60785b546e11a9034f0d05aec209';
var authToken = '582a7dd229394e8310bdce02ce279451';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

// client.messages.create({
// 	to: "+2348189427825",
// 	from: "+14157921566 ",
// 	body: "NovaVoice here"
// }, function(err, message) {
// 	if (err) console.log(err.message);
// 	if (message) console.log(message.sid);
// });

app.post('/sms', function(req, res) {
	console.log(req.body);
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
        `)
});

http.createServer(app).listen(1337, function () {
	console.log("Express server listening on port 1337");
});
module.exports = router;
