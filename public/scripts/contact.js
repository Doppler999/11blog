// Example content for scripts/contact.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      const button = form.querySelector('button');

      button.classList.add('animate');

      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();
        if (response.ok) {
          setTimeout(() => {
            alert('Your message has been sent!');
            form.reset();
            button.classList.remove('animate');
          }, 500);
        } else {
          setTimeout(() => {
            alert(`Error: ${result.message}`);
            button.classList.remove('animate');
          }, 500);
        }
      } catch (error) {
        console.error('Error:', error);
        setTimeout(() => {
          alert('There was an error sending your message. Please try again later.');
          button.classList.remove('animate');
        }, 500);
      }
    });

    form.querySelector('button').addEventListener('click', function(event) {
      if (window.innerWidth <= 1024) {
        const button = this;
        button.classList.add('animate');

        setTimeout(() => {
          button.classList.remove('animate');
        }, 2000); // Adjust the timing as needed
      }
    });
  });
