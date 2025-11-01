document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popup-title");
  const popupMessage = document.getElementById("popup-message");
  const popupClose = document.getElementById("popup-close");

  // Function to show popup
  function showPopup(title, message, success = true) {
    popupTitle.textContent = title;
    popupMessage.textContent = message;
    popupContent = popup.querySelector(".popup-content");
    popupContent.style.borderTop = success ? "6px solid #4CAF50" : "6px solid #f44336";
    popup.style.display = "flex";
  }

  // Close popup
  popupClose.addEventListener("click", () => (popup.style.display = "none"));
  window.addEventListener("click", (e) => {
    if (e.target === popup) popup.style.display = "none";
  });

  // Form submit
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: json,
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        showPopup("✅ Message Sent!", "Your message has been delivered successfully. We would get back as soon as Possible.");
        form.reset();
      } else {
        showPopup("❌ Failed to Send", "Please try again or check your connection.", false);
      }
    } catch (error) {
      showPopup("⚠️ Error", "Something went wrong. Please try again later.", false);
    }
  });
});
