const reservationFormHandler = async (event) => {
    event.preventDefault();

    const select = document.getElementById('reservation-dropdown');

    const station_id = select.options[select.selectedIndex].value;

    if (station_id) {
        const response = await fetch('/api/reservation', {
            method: 'POST',
            body: JSON.stringify({ station_id }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('#reservation-form')
    .addEventListener('submit', reservationFormHandler);