function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://ixk0ytdcba.execute-api.us-east-1.amazonaws.com/Prod"

 
        var Namere = /[A-Za-z]{1}[A-Za-z]/;
        if (!Namere.test($("#name").val())) {
          alert("Name can not be less than 2 char");
          return;
        }
        var mobilere = /[0-9]{10}/;
        if (!mobilere.test($("#phone").val())) {
          alert("Please enter valid mobile number");
          return;
        }
        if ($("#email").val() == "") {
          alert("Please enter your email id");
          return;
        }

        var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
        if (!reeamil.test($("#email").val())) {
          alert("Please enter valid email address");
          return;
        }

        var name = $("#name").val();
        var phone = $("#phone").val();
        var email = $("#email").val();
        var desc = $("#desc").val();
        var data = {
          name: name,
          phone: phone,
          email: email,
          desc: desc,
        };
		 $.ajax({
          type: "POST",
          url: URL,
          dataType: "json",
          crossDomain: "true",
          contentType: "application/json; charset=utf-8",
          data: JSON.stringify(data),
          success: function () {
            // clear form and show a success message
            alert("Successfull");
            document.getElementById("contact-form").reset();
            location.reload();
          },
          error: function () {
            // show an error message
            alert("The request was unsuccessful!");
          },
        });
	  

};




