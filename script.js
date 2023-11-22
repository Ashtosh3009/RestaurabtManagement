document.addEventListener('DOMContentLoaded', function () {
    const reservationForm = document.getElementById('reservationForm');

    reservationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // You can add logic here to handle the reservation form submission
        alert('Reservation submitted!');
    });
});
