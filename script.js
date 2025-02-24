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
