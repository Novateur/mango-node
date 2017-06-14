// (function(){
// 	const telNum = document.getElementById('telNum');
// 	const message = document.getElementById('message');
// 	const btnSendMessage = document.getElementById('btnSendMessage');
// 	btnSendMessage.addEventListener('click', e => {
// 		const phoneNum = telNum.value;
// 		const txtMessage = message.value;
//
// 	});
// })();




//button to send message
$('#msgForm').submit(function(event){
	// Stop form from submitting normally
	event.preventDefault();

	// Get some values from elements on the page:

	// var $form = $( this ),
	//     term = $form.find( "input[name='username']" ).val(),
	//     url = $form.attr( "action" );

	// console.log(formData.phone);
	msgForm.reset();
	// send message
	$('#btnSendMessage').click(function(){
		console.log('msg clicked');
		var formData = {
			phone:$("#telNum").val(),
			message:$("#message").val()
		};
		$.post("/msg",formData,function(data,status,xhr){
			console.log(formData);
		})});
	// make call
	$('#makeCallBtn').click(function(){
		var formData = {
			phone:$("#telNum").val()
		};
		$.post("/makeCall",formData,function(data,status,xhr){
			console.log(formData);
		});

	});
});







// button to make a call
// $('#makeCallBtn').submit(function(event){
// 	// Stop form from submitting normally
// 	event.preventDefault();
// 	// Get some values from elements on the page:
//
// 	// var $form = $( this ),
// 	//     term = $form.find( "input[name='username']" ).val(),
// 	//     url = $form.attr( "action" );
// 	var formData = {
// 		phone:$("#telNum").val()
// 	};
// 	console.log("calling "+phone);
// 	msgForm.reset();
//
// 	$.post("/makeCall",formData,function(data,status,xhr){
// 		console.log(formData);
// 	});
//
// });

// $.post("/smsClient", function(receivedMsg) {
// 	alert(receivedMsg);
// 	document.getElementById(received).innerHTML = receivedMsg;
// })