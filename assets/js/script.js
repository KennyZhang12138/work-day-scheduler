$(document).ready(function () {
  let currentDay = $("#currentDay");
  let today = dayjs();
  let hourNow = today.hour();
  let clearBtn = $("#clearBtn");
  //update today's time second to second
  function doDate() {
    today = dayjs();
    currentDay.text(today.format("dddd, MMMM D, YYYY h:mm:ss A"));
    //console.log(today.hour());
  }
  setInterval(doDate, 1000);
  doDate();
  //check the timeBlock class "past", "present", and "future"
  function checkTime() {
    let timeBlock = document.querySelectorAll(".time-block");

    for (var i = 0; i < timeBlock.length; i++) {
      let timeZoom = parseInt(timeBlock[i].getAttribute("data-hour"));
      if (timeZoom < hourNow) {
        timeBlock[i].setAttribute("class", "row past time-block");
      } else if (timeZoom > hourNow) {
        timeBlock[i].setAttribute("class", "row future time-block");
      } else {
        timeBlock[i].setAttribute("class", "row present time-block");
      }
    }
  }

  checkTime();

  let time09 = $("#am9");
  let time10 = $("#am10");
  let time11 = $("#am11");
  let time12 = $("#am12");
  let time13 = $("#pm1");
  let time14 = $("#pm2");
  let time15 = $("#pm3");
  let time16 = $("#pm4");
  let time17 = $("#pm5");
  let time18 = $("#pm6");

  time09.val(localStorage.getItem("description1"));
  time10.val(localStorage.getItem("description2"));
  time11.val(localStorage.getItem("description3"));
  time12.val(localStorage.getItem("description4"));
  time13.val(localStorage.getItem("description5"));
  time14.val(localStorage.getItem("description6"));
  time15.val(localStorage.getItem("description7"));
  time16.val(localStorage.getItem("description8"));
  time17.val(localStorage.getItem("description9"));
  time18.val(localStorage.getItem("description10"));

  let button9 = $("#am9BTN");
  let button10 = $("#am10BTN");
  let button11 = $("#am11BTN");
  let button12 = $("#am12BTN");
  let button13 = $("#pm1BTN");
  let button14 = $("#pm2BTN");
  let button15 = $("#pm3BTN");
  let button16 = $("#pm4BTN");
  let button17 = $("#pm5BTN");
  let button18 = $("#pm6BTN");

  button9.on("click", function (event) {
    event.preventDefault();
    if (time09.val() !== "") {
      localStorage.setItem("description1", time09.val());
    }
  });

  button10.on("click", function (event) {
    event.preventDefault();
    if (time10.val() !== "") {
      localStorage.setItem("description2", time10.val());
    }
  });

  button11.on("click", function (event) {
    event.preventDefault();
    if (time11.val() !== "") {
      localStorage.setItem("description3", time11.val());
    }
  });

  button12.on("click", function (event) {
    event.preventDefault();
    if (time12.val() !== "") {
      localStorage.setItem("description4", time12.val());
    }
  });

  button13.on("click", function (event) {
    event.preventDefault();
    if (time13.val() !== "") {
      localStorage.setItem("description5", time13.val());
    }
  });

  button14.on("click", function (event) {
    event.preventDefault();
    if (time14.val() !== "") {
      localStorage.setItem("description6", time14.val());
    }
  });

  button15.on("click", function (event) {
    event.preventDefault();
    if (time15.val() !== "") {
      localStorage.setItem("description7", time15.val());
    }
  });

  button16.on("click", function (event) {
    event.preventDefault();
    if (time16.val() !== "") {
      localStorage.setItem("description8", time16.val());
    }
  });

  button17.on("click", function (event) {
    event.preventDefault();
    if (time17.val() !== "") {
      localStorage.setItem("description9", time17.val());
    }
  });

  button18.on("click", function (event) {
    event.preventDefault();
    if (time18.val() !== "") {
      localStorage.setItem("description10", time18.val());
    }
  });

  clearBtn.on("click", clear);
  function clear() {
    localStorage.clear();

    time09.val("");
    time10.val("");
    time11.val("");
    time12.val("");
    time13.val("");
    time14.val("");
    time15.val("");
    time16.val("");
    time17.val("");
    time18.val("");
  }
});
