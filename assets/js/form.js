document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.email-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();  // Prevent the form from submitting the traditional way

        var formData = new FormData(form);
        var actionURL = form.getAttribute('action');

        // Show the loading message
        document.querySelector('.loading').style.display = 'block';

        fetch(actionURL, {
            method: 'POST',
            body: formData,
            mode: 'no-cors'  // Because of CORS restrictions with Google Forms
        }).then(response => {
            // Hide the loading message
            document.querySelector('.loading').style.display = 'none';

            // Show the sent message
            document.querySelector('.sent-message').style.display = 'block';
        }).catch(error => {
            // Hide the loading message
            document.querySelector('.loading').style.display = 'none';

            // Show an error message
            document.querySelector('.error-message').style.display = 'block';
        });
    });
});
