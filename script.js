(function () {
    emailjs.init("i2LOvLgT48u7v4OZG");
    console.log("EmailJS initialized");
  })();
  
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      console.log("Form submitted");
  
      emailjs.sendForm("service_dch670j", "template_di94n9p", this).then(
        function () {
          console.log("Email sent successfully");
          alert("Message Sent Successfully!");
        },
        function (error) {
          console.error("Error sending email:", error);
          alert("Failed to send the message: " + JSON.stringify(error));
        }
      );
    });