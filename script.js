document.querySelector('.contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  const response = await fetch(form.action, {
    method: "POST",
    body: data
  });

  const result = await response.json();

  if (result.success) {
    alert('✅ Thank you! Your order has been traced successfully.');
    form.reset();
  } else {
    alert('❌ Something went wrong, please try again.');
  }
});
