const countdownElement = document.getElementById('countdown');

// Hardcoded exam date: March 10, 2025
const examDate = new Date('2025-03-10T00:00:00');

// Update the countdown immediately and set interval
updateCountdown(examDate);
setInterval(() => updateCountdown(examDate), 1000 * 60 * 60 * 24); // Update every day

function updateCountdown(examDate) {
    const today = new Date();
    const difference = examDate - today;
    const daysUntilExam = Math.ceil(difference / (1000 * 60 * 60 * 24));
    
    if (daysUntilExam >= 0) {
        countdownElement.textContent = `${daysUntilExam} Days Until CBSE Boards`;
    } else {
        countdownElement.textContent = "CBSE Boards Have Started!";
    }
}
