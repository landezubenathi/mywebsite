// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const sendMessageButton = document.getElementById("sendMessage");
    const sendOptionsDiv = document.getElementById("sendOptions");
    const sendEmailButton = document.getElementById("sendEmail");
    const sendWhatsAppButton = document.getElementById("sendWhatsApp");

    // Show the email and WhatsApp options when "Send Message" is clicked
    sendMessageButton.addEventListener("click", function () {
        sendOptionsDiv.style.display = "block"; // Make buttons visible
    });

    // Function to get form data
    function getFormData() {
        return {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        };
    }

    // Send via Email
    sendEmailButton.addEventListener("click", function () {
        let data = getFormData();
        if (!data.email || !data.message) {
            alert("Please enter your email and message!");
            return;
        }

        let emailAddress = "landezubenathi@gmail.com"; // Change to your email
        let mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(
            `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\nMessage: ${data.message}`
        )}`;

        window.location.href = mailtoLink;
    });

    // Send via WhatsApp
    sendWhatsAppButton.addEventListener("click", function () {
        let data = getFormData();
        if (!data.phone || !data.message) {
            alert("Please enter your phone number and message!");
            return;
        }

        let whatsappNumber = "27731219997"; // Change to your WhatsApp number (with country code)
        let whatsappMessage = `Name: ${data.name}%0AEmail: ${data.email}%0APhone: ${data.phone}%0A%0AMessage: ${data.message}`;
        let whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

        window.open(whatsappLink, "_blank");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Load HOME Section
    fetch("index.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("index").innerHTML = data;
      })
      .catch(error => console.error("Error loading Home section:", error));

      fetch("about.html")
      .then(response => response.text())  // Fetch About section
      .then(data => {
        document.getElementById("about").innerHTML = data; // Insert into the page
      })
      .catch(error => console.error("Error loading About section:", error));
  
    // Load Expertise Section
    fetch("expertise.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("expertise").innerHTML = data;
      })
      .catch(error => console.error("Error loading Expertise section:", error));
    
    //Load projects Section
    fetch("projects.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("projects").innerHTML = data;
      })
      .catch(error => console.error("Error loading Project section:", error));

    // Load Contact Section
    fetch("contact.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("contact").innerHTML = data;
      })
      .catch(error => console.error("Error loading Contact section:", error));
  });
  