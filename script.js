document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('form-status').textContent = "Thanks! This form isn't connected yet.";
});
