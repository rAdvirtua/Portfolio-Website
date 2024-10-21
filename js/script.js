ocument.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch('https://script.google.com/macros/s/AKfycbzEetcWZS1Za04SfY7zRTRAzIrQSYsa40SaglKAPMrMr_knFjVMe6worDQ4D_AVZ442/exec', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                const result = await response.json();
                alert(result.result === 'success' ? 'Form submitted successfully!' : 'Submission failed.');
            } catch (error) {
                alert('Error submitting form: ' + error);
            }
        });
    } else {
        console.error('Form with id "contact" not found.');
    }
});
