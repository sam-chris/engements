
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    if (!fullname || !email) {
        alert("You need a name and email.");
        return;
    }

    const formData = {
        name: fullname,
        email: email,
        password: password
    };

    console.log(formData);

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "submit.json", true);

    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            //alert('Form submitted successfully.');
            const message = document.getElementById('message');
            const response = JSON.parse(xhr.responseText);
            message.textContent = response.message;
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };

    xhr.send(JSON.stringify(formData));

    alert(`Success: ${fullname}`);
});
