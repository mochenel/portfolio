
$(document).ready(function() { 
	$('#send').click(sendMail);
	function sendMail() { 

		let senderName = $("#name").val().trim();
		let senderEmail = $("#email").val().trim();
		let senderTel = $("#tel").val().trim();
		let senderMessage = $("#message").val().trim();

		// required fields check

		if(senderName == "" || senderEmail == "" || senderTel == "" || senderMessage == "" ){
			alert("empty")
			return;
		}

		
		

        let person = {
            name: senderName,
            email:senderEmail,
            tel:senderTel,
            message:senderMessage
        }

        $('#target').html('sending..');

        return $.ajax({
            url: 'https://portfolioapii.herokuapp.com/send',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(person),
            success: function (response) {

            	if(response == "ok"){
            		$('#target').html('mail sent ');
            		alert("mail sent")
            	}
            	else{
			$('#target').html('mail not sent. ');
            		alert("mail not sent. \n"+response.response);
            	}
            }
            
        });
	
} 
})
