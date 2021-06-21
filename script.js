function timer() {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
  console.log(document.getElementById("days").innerText);

  let degree = "Jul 23, 2021 15:00:00",
    countDown = new Date(degree).getTime(),
    x = setInterval(function () {
      let now = new Date().getTime();
      let distance = countDown - now;

      document.getElementById("days").innerHTML = Math.floor(distance / day);

      document.getElementById("hours").innerHTML = Math.floor(
        (distance % day) / hour
      );
      document.getElementById("minutes").innerHTML = Math.floor(
        (distance % hour) / minute
      );
      document.getElementById("seconds").innerHTML = Math.floor(
        (distance % minute) / second
      );

      //seconds
    }, 1);
}
