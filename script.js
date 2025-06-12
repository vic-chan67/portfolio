document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = e.target[0].value.trim();
    const email = e.target[1].value.trim();
    const message = e.target[2].value.trim();

    if (!name || !email || !message) {
      status.textContent = "Please fill out all fields.";
      return;
    }

    status.textContent = "Sending...";

    try {
      const response = await fetch('https://7nsjeoo2i0.execute-api.eu-north-1.amazonaws.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      if (response.ok) {
        status.textContent = result.message || "Message sent!";
        form.reset();
      } else {
        status.textContent = result.message || "Something went wrong. Please try again.";
      }
    } catch (err) {
      console.error(err);
      status.textContent = "Error sending your message.";
    }
  });
});
