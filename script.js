document.addEventListener('DOMContentLoaded', function() {
  // QuerySelectors for HTML elements
  const birthdayTime = document.querySelector('#birthdayTime');
  const countdownContainer = document.querySelector('#countdown');
  const daysCountdown = document.querySelector('#days');
  const hoursCountdown = document.querySelector('#hours');
  const minutesCountdown = document.querySelector('#minutes');
  const secondsCountdown = document.querySelector('#seconds');
  const videoContainer = document.querySelector('#video-container');

  // Time and Date
  const now = new Date();
  const currentTime = now.getTime();
  const eventTime = new Date(2024, 6, 1).getTime(); // June 1, 2024
  const remainingTime = eventTime - currentTime;
  const isItBirthday = currentTime.getMonth() === 4 && currentTime.getDate() === 24;

  // Countdown function
  function countdown() {
    let seconds = Math.floor(remainingTime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    daysCountdown.textContent = days;
    hoursCountdown.textContent = hours % 24;
    minutesCountdown.textContent = minutes % 60;
    secondsCountdown.textContent = seconds % 60;

    setTimeout(countdown, 1000);
  }

  // Show birthday message and video on birthday
  if (isItBirthday) {
    console.log('Happy birthday, my love!');
    countdownContainer.style.display = "none";
    birthdayTime.style.display = "block";
    videoContainer.style.display = "block";
  } else {
    countdown();
  }
});
