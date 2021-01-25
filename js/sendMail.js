
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

       
	alert("mail not sent")
         $.ajax({
            url: 'https://portfolioapii.herokuapp.com/send',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(person),
            success: function (response) {

            	if(response == "ok"){
			console.log("***",response)
            		$('#target').html('mail sent ');
            		
            	}
            	else{
			console.log("not***",response)
            		alert("mail not sent")
            	}
            }
            
        });
	
} 
})
