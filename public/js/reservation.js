const reservationFormHandler = async (event) => {
    event.preventDefault();

    // const username = document.querySelector('#username-signup').value.trim();
    // const email = document.querySelector('#email-signup').value.trim();
    // const password = document.querySelector('#password-signup').value.trim();


    if (username && email && password) {
        const response = await fetch('/api/reservation', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
    }

    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert(response.statusText);
    }
};

document
    .querySelector('dropdown-item')
    .addEventListener('submit', reservationFormHandler);