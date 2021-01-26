
$(document).ready(function() { 
	$('#send').click(sendMail);
	function sendMail() { 

		let senderName = $("#name").val().trim();
		let senderEmail = $("#email").val().trim();
		let senderTel = $("#tel").val().trim();
		let senderMessage = $("#message").val().trim();

		// required fields check
		let pattern1 = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
		let pattern2 = [0-9]{10};
		if(senderName == "" || senderEmail == "" || senderTel == "" || senderMessage == "" || !pattern1.test(senderEmail) || !pattern2.test(senderTel)){
			
			return;
		}

		
		

        let person = {
            name: senderName,
            email:senderEmail,
            tel:senderTel,
            message:senderMessage
        }

        $('#inner').attr('disabled',true);
        $('#outer').css("display","");
        $('#outer').attr("class","form-group spinner-border");
        $('#inner').attr("class","form-control sr-only");

        return $.ajax({
            url: 'https://portfolioapii.herokuapp.com/send',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(person),
            success: function (response) {

            	if(response.response == "ok"){
            		
                     $('#outer').attr("class","form-group");
                     $('#inner').attr("class","form-control text-success");
                     $('#inner').html('Email was sent successfully');
                     $('#inner').attr('disabled',false);
            	}
            	else{
		     $('#outer').attr("class","form-group");
                     $('#inner').attr("class","form-control text-danger");
                     $('#inner').html('An Error occured, please try again later');
            	     $('#inner').attr('disabled',false); 
            	}
            }
            
        });
	
} 
})
