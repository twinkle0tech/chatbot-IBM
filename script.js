document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const msg = document.getElementById("confirmationMsg");
  
    msg.textContent = `Thank you, ${name}! Your message has been received.`;
  
    // Clear the form
    this.reset();
  });
  