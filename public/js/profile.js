const updateButtonHandler = (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        document.location.replace(`/update/${id}`);
    }
};

const delButtonHandler = async (event) => {
    
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

document
    .querySelector('#update-button')
    .addEventListener('click', updateButtonHandler);

document
    .querySelector('#delete-button')
    .addEventListener('click', delButtonHandler);