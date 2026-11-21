
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('pass').value;
    const state = document.getElementById('state').value;
    const remember = document.getElementById('remember').checked;
    const gender = document.querySelector('input[name="gender"]:checked');
    const comments = document.getElementById('comments').value;

    // Check that the name is not blank
    if (!fullname) {
        alert('Please enter your full name.');
        return;
    }

    // Check that the email is not blank
    if (!email) {
        alert('Please enter your email.');
        return;
    }

    // Check that the password is not blank
    if (!password) {
        alert('Please enter your password.');
        return;
    }

    // Check the password length
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // Check that a state is selected
    if (!state) {
        alert('Please select your state.');
        return;
    }

    // Collect all form inputs into one object
    const formData = {
        fullname: fullname,
        email: email,
        password: password,
        state: state,
        remember: remember,
        gender: gender ? gender.value : '',
        comments: comments
    };

    console.log(formData);

    // Create AJAX request
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'submit.json', true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {

            const response = JSON.parse(xhr.responseText);

            const message = document.getElementById('message');
            message.textContent = response.message;

            // Reset form after successful submission
            document.getElementById('myForm').reset();

        } else if (xhr.readyState === 4) {
            alert('Error submitting form. Please try again.');
        }
    };

    // Request the mock server response
    xhr.send();
});
