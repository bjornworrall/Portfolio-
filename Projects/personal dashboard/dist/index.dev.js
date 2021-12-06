"use strict";

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature").then(function (res) {
  return res.json();
}).then(function (data) {
  console.log(data);
  document.body.style.backgroundImage = "url(".concat(data.urls.regular, ")");
  document.getElementById("author").textContent = "By: ".concat(data.user.name);
})["catch"](function (err) {
  document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1080)";
});
fetch('https://api.coingecko.com/api/v3/coins/dogecoin').then(function (res) {
  if (!res.ok) {
    throw Error('Something is wrong');
  }

  return res.json();
}).then(function (data) {
  document.getElementById('currency').innerHTML = "\n         <img src=\"".concat(data.image.small, "\" class=\"crypt-img\" />\n          <p> ").concat(data.name, " </p>\n          \n          ");
  document.getElementById('prices').innerHTML = "\n         <h4> \uD83D\uDCB1:  ".concat(data.market_data.current_price.zar, " ZAR </h4>\n         <h4> \uD83D\uDCAA: ").concat(data.market_data.high_24h.zar, " ZAR </h4>\n         <h4> \uD83D\uDC47: ").concat(data.market_data.low_24h.zar, " ZAR </h4>\n         ");
})["catch"](function (err) {
  return console.log(err);
});
fetch('https://content.guardianapis.com/search?api-key=29b7fbe3-38cc-48d0-9ae3-25c2451e3174').then(function (res) {
  if (!res.ok) {
    throw Error('Something is wrong');
  }

  return res.json();
}).then(function (data) {
  document.getElementById('news').innerHTML = "\n      <h1> ".concat(data.response.results[0].sectionName, " </h1>\n      <p>   ").concat(data.response.results[0].webTitle, " </p>\n      <a href=\"").concat(data.response.results[0].webUrl, "\"  target=\"_blank\" > Click Here For More </a>\n      ");
})["catch"](function (err) {
  return console.log(err);
});

function liveClock() {
  var time = new Date();
  return document.getElementById('time').textContent = time.toLocaleTimeString("en-us", {
    timeStyle: "medium"
  });
}

setInterval(liveClock, 1000);
navigator.geolocation.getCurrentPosition(function (position) {
  fetch("http://api.openweathermap.org/data/2.5/weather?lat=".concat(position.coords.latitude, "&lon=").concat(position.coords.longitude, "&appid=afb22b0e6a8fecbc4872e4378debd279&units=metric")).then(function (res) {
    if (!res.ok) {
      throw Error('The data was not received');
    }

    return res.json();
  }).then(function (data) {
    var iconURL = "http://openweathermap.org/img/wn/".concat(data.weather[0].icon, "@2x.png");
    document.getElementById('weather').innerHTML = " \n            <div class=\"weather-container\">\n            <img src=\"".concat(iconURL, "\" />\n            <p> ").concat(Math.round(data.main.temp), "\xB0C </p>\n            </div>\n            <p> ").concat(data.name, " </p>\n            ");
  })["catch"](function (err) {
    return console.log(err);
  });
});
//# sourceMappingURL=index.dev.js.map
