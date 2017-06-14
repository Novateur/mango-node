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

router.post('/msg', function(req, res, next) {
	//
	// Novateur  trial

	// require the Twilio module and create a REST client

	// var client = require('twilio')(accountSid, authToken);
	client.messages.create({
		// to: req.body.phone,
		// from: "+1(916)5962614",
		to: '+'+req.body.phone,
		from: "+16692312315",
		body: req.body.message
	}, function(err, message) {
		if (err){
			console.log(err);
			// router.get('/finished', function(req,res){
			// 	var mesg = 'david';
			// 	res.send(mesg);
			// });
		}else{

			console.log(message.sid);
		}
	});


});



app.post('/sms', function(req, res) {
	var receivedMsg = req.body.Body;
	console.log(receivedMsg);
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
        		Hello ${msgFrom} this is the message you sent : ${msgBody}
		</Message>
	</Response>
	`);
	// console.log(msgBody);
	router.get('/smsClient', function(req,res){
		var receivedMsg = receivedMsg;
		res.send(receivedMsg);
	})


});

http.createServer(app).listen(1337, function () {
	console.log("Express server listening on port 1337");
});

router.post('/makeCall', function(req,res){
	client.calls.create({
		url: "http://demo.twilio.com/docs/voice.xml",
		// to: "+2348130456451", // gad
			// to: "+2347089670621", // nelson
		// to: "+2348175060022", // soaps
		// to: "+2348027020202", // David
		to: '+'+req.body.phone,
		from: "+16692312315"
	}, function(err, call) {
		//
		if(err){
			console.log(err);
		}else{
			console.log('calling '+ call.sid);
		}

	});
});

module.exports = router;
