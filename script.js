document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
  
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      // We can customize this part to handle form submission (e.g., sending an email)
      console.log("Name: " + name);
      console.log("Email: " + email);
      console.log("Message: " + message);
  
      
      contactForm.reset();
    });
  });
  