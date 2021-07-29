const updateButtonHandler = async (event) => {
    const first_name = document.querySelector('#first-name').value.trim();
    const last_name = document.querySelector('#last-name').value.trim();
    const email = document.querySelector('#email').value.trim();

    if (first_name && last_name && email) {
        if (event.target.hasAttribute('data-id')) {
            const id = event.target.getAttribute('data-id');

            const response = await fetch(`/api/profile/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ first_name, last_name, email }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                alert('Successfully updated user details!');
                document.location.replace('/profile');
            } else {
                alert('Failed to update user details');
            }
        }
    }

};

const delReservationButtonHandler = async (event) => {

    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/reservation/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete reservation');
        }
    }
};

const delProfileButtonHandler = async (event) => {

    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/profile/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to delete user');
        }
    }
};

if(document.querySelector("#delete-reservation-button")) {
    document
    .querySelector('#delete-reservation-button')
    .addEventListener('click', delReservationButtonHandler);
}

document
    .querySelector('#update-button')
    .addEventListener('click', updateButtonHandler);

document
    .querySelector('#delete-profile-button')
    .addEventListener('click', delProfileButtonHandler);