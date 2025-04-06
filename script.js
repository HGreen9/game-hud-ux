   /* -----------------------------------------------------------
       CLOCK + DAY/SEASON LOGIC (BASIC EXAMPLE)
    ----------------------------------------------------------- */
    const timeDisplay = document.getElementById('time-display');
    const dayCount = document.getElementById('day-count');
    const seasonSymbol = document.getElementById('season-symbol');
    const yearCount = document.getElementById('year-count');
    const moonPhase = document.getElementById('moon-phase');

    let gameHour = 8;       // Start time
    let gameMinute = 0;     // Start minute
    let currentDay = 1;
    let currentSeason = 'Spring'; // could be 'Summer', 'Autumn', 'Winter'
    let currentYear = 1;

    // For demo: every "real" second = 1 "in-game" minute
    setInterval(() => {
      gameMinute++;
      if (gameMinute >= 60) {
        gameMinute = 0;
        gameHour++;
        // Move to next day
        if (gameHour >= 24) {
          gameHour = 0;
          currentDay++;
          // Simplified: every 30 days = next season
          if (currentDay > 30) {
            currentDay = 1;
            // Next season
            if (currentSeason === 'Spring') {
              currentSeason = 'Summer';
            } else if (currentSeason === 'Summer') {
              currentSeason = 'Autumn';
            } else if (currentSeason === 'Autumn') {
              currentSeason = 'Winter';
            } else {
              currentSeason = 'Spring';
              currentYear++;
            }
          }
        }
      }
      updateClockUI();
    }, 1000);

    function updateClockUI() {
      // Update time display
      const hh = String(gameHour).padStart(2, '0');
      const mm = String(gameMinute).padStart(2, '0');
      timeDisplay.textContent = `${hh}:${mm}`;

      // Update day/season/year
      dayCount.textContent = `Day ${currentDay}`;
      seasonSymbol.textContent = currentSeason;
      yearCount.textContent = `Year ${currentYear}`;

      // Moon phase or weather (placeholder logic)
      // e.g., cycle through phases or random weather
      let phase = 'Full Moon';
      if (gameHour >= 6 && gameHour < 18) {
        phase = 'Sunny';
      } else if (gameHour >= 18 && gameHour < 21) {
        phase = 'Sunset';
      }
      moonPhase.textContent = phase;

      // Seasonal UI changes: add or remove classes
      const hud = document.getElementById('hud');
      hud.classList.remove('season-winter', 'season-spring');
      if (currentSeason === 'Winter') {
        hud.classList.add('season-winter');
      } else if (currentSeason === 'Spring') {
        hud.classList.add('season-spring');
      }
    }

    /* -----------------------------------------------------------
       QUICK ACCESS MENU FUNCTIONS
    ----------------------------------------------------------- */
    function openTab(tabName) {
      alert(`Open ${tabName} tab (character/inventory/orders/relationships).`);
      // Here you’d show a modal or a side panel with tab details
    }

    /* -----------------------------------------------------------
       MAP & MAILBOX
    ----------------------------------------------------------- */
    function toggleMap() {
      alert("Toggle Map Overlay: show/hide the map with discovered areas.");
    }

    function openMailbox() {
      alert("Open Mailbox: show new letters and invites.");
    }

    /* -----------------------------------------------------------
       DEMO: LANTERN, MOOD, ETC.
    ----------------------------------------------------------- */
    // You could tie these to game events or stats
    const moodMeter = document.getElementById('mood-meter');
    const lanternUpgrade = document.getElementById('lantern-upgrade');

    // Example: change mood after 5 seconds
    setTimeout(() => {
      moodMeter.textContent = "Mood: Inspired!";
    }, 5000);

    // Example: after 10 seconds, upgrade lantern
    setTimeout(() => {
      lanternUpgrade.textContent = "Lantern Lv 2";
      document.getElementById('oil-fill').style.width = '90%'; // maybe more efficient
    }, 10000);