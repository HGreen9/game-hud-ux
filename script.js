function startInGameClock() {
    const clockElement = document.getElementById('inGameClock');

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        clockElement.textContent = `${hours}:${minutes}`;
    }

    updateClock(); // Update immediately
    setInterval(updateClock, 1000); // Update every second
}

document.addEventListener('DOMContentLoaded', startInGameClock);