document.addEventListener('DOMContentLoaded', function () {
    const reservationForm = document.getElementById('reservationForm');
    const reservationsList = document.getElementById('reservationsList');

    reservationForm.addEventListener('submit', function (event) {
        event.preventDefault();


        // You can add logic here to handle the reservation form submission
        alert('Reservation submitted!');
                // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        // Create a new reservation object
        const reservation = {
            name: name,
            email: email,
            date: date,
            time: time
        };

        // Display the reservation on the page
        displayReservation(reservation);

        // You can also send the reservation data to a server here for further processing

        // Clear the form
        reservationForm.reset();
    });

    function displayReservation(reservation) {
        const reservationItem = document.createElement('li');
        reservationItem.innerHTML = `<strong>${reservation.name}</strong> - ${reservation.email} - Date: ${reservation.date}, Time: ${reservation.time}`;
        reservationsList.appendChild(reservationItem);
    }
});
