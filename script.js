
     // Get the current day of the week
     const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     const today = new Date();
     const currentDayOfWeek = daysOfWeek[today.getDay()];

     // Display the current day of the week in the h1 element inside the div
     const dayTextElement = document.getElementById("dayText");
     dayTextElement.textContent = `Today Being ${currentDayOfWeek} Is A Blessed Day`;




    //  time
    function updateDateTime() {
        const clockElement = document.getElementById("clock");
        const currentTime = new Date();
        const currentMilliseconds = currentTime.getTime();
  
        // Display the current day and time in milliseconds
        clockElement.textContent = ` ${currentMilliseconds}`;
      }
     
      // Update the date and time immediately and every second
      updateDateTime();
      setInterval(updateDateTime, 1000);