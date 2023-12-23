document.querySelectorAll('a').forEach(link => {
    if(link.href === window.location.href){
        link.setAttribute('aria-current', 'page')
    }

})

const toggle = document.querySelector('.toggle');
const toggleIcon = document.querySelector('.toggle i');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownItems = document.querySelectorAll('.dropdown-menu li');

// Toggle the visibility of each dropdown item when the toggle icon is clicked
toggle.onclick = function () {
 dropdownMenu.classList.toggle('open');
const isOpen = dropdownMenu.classList.contains('open');

toggleIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars';

// Toggle visibility of each dropdown item
dropdownItems.forEach(item => {
item.style.display = isOpen ? 'flex' : 'none';
});
}; 
// Close the dropdown menu and remove the 'open' class on any click outside the menu
document.body.addEventListener('click', function (event) {
    if (!dropdownMenu.contains(event.target) && !toggle.contains(event.target)) {
        dropdownMenu.classList.remove('open');
        toggleIcon.classList = 'fa-solid fa-bars';
        dropdownItems.forEach(item => {
            item.style.display = 'none';
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {

            this.classList.toggle("active");
            this.parentElement.classList.toggle("active");

            var panel = this.nextElementSibling;

            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
});

  function goToLocation() {

    var address = "210 Fee Fee Hills Dr, Hazelwood, Missouri 63042";

    // Check if the user is on an iOS device
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
      // Open Apple Maps
      window.open('maps://?q=' + encodeURIComponent(address));
    } else {
      // Open Google Maps
      window.open('https://www.google.com/maps?q=' + encodeURIComponent(address));
    }

  }


  function ourCeremonyCalendar(eventName, startTime, endTime) {
    // var eventName = "Kemi Weds Tim";
    var eventLocation = "210 Fee Fee Dr, Hazelwood, Missouri 63042";
    var options = { timeZone: 'America/Chicago' };
    
    // Event start and end date in CST
    var eventStartDate = new Date(startTime).toLocaleString('en-US', options);
    var eventEndDate = new Date(endTime).toLocaleString('en-US', options);

    eventStartDate = convertDateString(eventStartDate)
    eventEndDate = convertDateString(eventEndDate)
    
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
      addToIosCalendar(eventName, eventLocation, eventStartDate, eventEndDate);
    } else {
      // For Android or other platforms, you can open a Google Calendar link
      var googleCalendarLink = 'https://www.google.com/calendar/render?action=TEMPLATE&text=' + encodeURIComponent(eventName) + '&dates=' + encodeURIComponent(eventStartDate) + '/' + encodeURIComponent(eventEndDate) + '&location=' + encodeURIComponent(eventLocation);   
    window.open(googleCalendarLink);
    }
  }

function convertDateString(inputString) {
    // Extract date and time components using regex
    var regexResult = /(\d{1,2})\/(\d{1,2})\/(\d{4}),\s*(\d{1,2}):(\d{2}):(\d{2})\s*(AM|PM)/.exec(inputString);
  
    if (!regexResult) {
      console.error("Invalid date string format");
      return null;
    }
  
    var [, month, day, year, hours, minutes, seconds, ampm] = regexResult;
  
    // Convert to 24-hour format
    if (ampm === "PM" && hours < 12) {
      hours = parseInt(hours, 10) + 12;
    } else if (ampm === "AM" && hours == 12) {
      hours = 0;
    }
  
    // Format the date in the desired format
    var formattedDate = year + padZero(month) + padZero(day) + 'T' + padZero(hours) + padZero(minutes) + padZero(seconds);
  
    return formattedDate;
  }
  
  function padZero(value) {
    return value.toString().padStart(2, '0');
  }

  function addToIosCalendar(eventName, eventLocation, eventStartDate, eventEndDate) {
    var url = 'data:text/calendar;charset=utf-8,' + encodeURIComponent(
      'BEGIN:VCALENDAR\n' +
      'VERSION:2.0\n' +
      'BEGIN:VEVENT\n' +
      'SUMMARY:' + eventName + '\n' +
      'LOCATION:' + eventLocation + '\n' +
      'DTSTART:' + eventStartDate.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '') + '\n' +
      'DTEND:' + eventEndDate.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '') + '\n' +
      'DESCRIPTION:' + 'Event added from my website\n' +
      'UID:' + new Date().toISOString() + '@yourwebsite.com\n' +
      'SEQUENCE:0\n' +
      'BEGIN:VALARM\n' +
      'TRIGGER:-PT15M\n' +
      'DESCRIPTION:Reminder\n' +
      'ACTION:DISPLAY\n' +
      'END:VALARM\n' +
      'END:VEVENT\n' +
      'END:VCALENDAR'
    );

    var link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'event.ics');
    document.body.appendChild(link);
    link.click();
  }
  