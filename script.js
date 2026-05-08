const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const userMessage = document.getElementById("message").value.trim();

    if (!name || !email || !userMessage) {
      message.textContent = "Please fill out all fields before submitting.";
      message.className = "error";
    } else {
      message.textContent = "Thank you! Your message has been received.";
      message.className = "success";
      form.reset();
    }
  });
}
