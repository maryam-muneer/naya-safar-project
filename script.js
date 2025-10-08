 let selectedService = ("");

function openBookingModal(service) {
  selectedService = service;
  document.getElementById('bookingServiceTitle').textContent = `Book a Session for ${service}`;
  document.getElementById('bookingModal').style.display = 'block';
}

function closeBookingModal() {
  document.getElementById('bookingModal').style.display = 'none';
}

function confirmBooking() {
  const budget = document.getElementById('bookingBudget').value;
  const day = document.getElementById('bookingDay').value;
  const time = document.getElementById('bookingTime').value;

  alert(`✅ Booking confirmed for ${selectedService} on ${day} at ${time}. Fee: PKR ${budget}. We'll contact you soon.`);
  closeBookingModal();
}

function toggleMenu() {
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('show');
}
document.getElementById('donationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let amount = document.getElementById('donationAmount').value;
    if(amount && amount > 0) {
      document.getElementById('thankYouMessage').textContent = `Thank you for donating PKR ${amount}! 🙌`;
      document.getElementById('thankYouMessage').style.display = 'block';
      this.reset();
    }
  });
function openResource(type) {
    if (type === 'self-help') {
      window.open('https://example.com/self-help-guides', '_blank');
    }
  }

