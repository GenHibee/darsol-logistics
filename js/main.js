const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const status = document.getElementById("form-status");
  const data = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/mjkpajqq", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      status.innerHTML = "✅ Message sent successfully! We'll get back to you soon.";
      status.style.color = "green";
      form.reset();
    } else {
      status.innerHTML = "⚠️ Oops! There was a problem sending your message.";
      status.style.color = "red";
    }
  } catch (error) {
    status.innerHTML = "❌ Network error. Please try again later.";
    status.style.color = "red";
  }
});
