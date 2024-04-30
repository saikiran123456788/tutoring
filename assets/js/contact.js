
function handleSubmit(){
    var name  = document.getElementById("name").value;
    var email  = document.getElementById("email").value;
    var message  = document.getElementById("message").value;
    var phone  = document.getElementById("phone").value;

    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var phoneError = document.getElementById('phoneError');
    var messageError = document.getElementById('messageError');
    
    // Regular expressions for validation
    var nameRegex = /^[A-Za-z\s]+$/; // Allows only letters and spaces
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
    var phoneRegex = /^[0-9]+$/; // Allows only numbers
    console.log("Hello")
    var isValid = true;
    
    // Validation logic
    if (!nameRegex.test(name) || name.trim() === '') {
        nameError.innerHTML = 'Please enter a valid name.';
        isValid = false;
    } else {
        nameError.innerHTML = '';
    }

    if (!emailRegex.test(email) || email.trim() === '') {
        emailError.innerHTML = 'Please enter a valid email address.';
        isValid = false;
    } else {
        emailError.innerHTML = '';
    }

    if (!phoneRegex.test(phone) || phone.trim() === '' || phone.length < 10 || phone.length > 13) {
        phoneError.innerHTML = 'Please enter a valid phone number.';
        isValid = false;
    } else {
        phoneError.innerHTML = '';
    }

    if (message.trim() === '') {
        messageError.innerHTML = 'Please enter a message.';
        isValid = false;
    } else {
        messageError.innerHTML = '';
    }

    // If all validations pass, execute sendMail() function
    if (isValid) {
        sendMail();
    }
  }
  function sendMail() {
    var successMessage = document.getElementById("success-message");

    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
      country: document.getElementById("country").value,
      to_name: "Canesoft",
    };
  
    const serviceID = "service_umerhlp";
    const templateID = "template_lis8sga";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          successMessage.innerHTML="Your Message has been Sent Successfully"
  
      })
      .catch(err=>console.log(err));
  
  }
  
  
  