
// First Api is used for collecting background and author

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
.then(res => res.json())
.then(data => {
    console.log(data)
    document.body.style.backgroundImage = `url(${data.urls.regular})`
    document.getElementById("author").textContent = `By: ${data.user.name}`
})


.catch(err => {
  
     document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1080)`
 
    })

   
   //  Second Api is used for collecting Crypto

    fetch('https://api.coingecko.com/api/v3/coins/dogecoin')
    .then(res => {
       if( !res.ok) {
        throw Error('Something is wrong')
       }
       return res.json()
    }) 
    .then(data => {
         document.getElementById('currency').innerHTML = `
         <img src="${data.image.small}" class="crypt-img" />
          <p> ${data.name} </p>
          
          ` 

         document.getElementById('prices').innerHTML = `
         <h4> 💱:  ${data.market_data.current_price.zar} ZAR </h4>
         <h4> 💪: ${data.market_data.high_24h.zar} ZAR </h4>
         <h4> 👇: ${data.market_data.low_24h.zar} ZAR </h4>
         `
    })
    .catch(err => console.log(err))
       
   //  Third is used for collecting newspaper articles

    fetch('https://content.guardianapis.com/search?api-key=29b7fbe3-38cc-48d0-9ae3-25c2451e3174')
    .then(res => {
      if( !res.ok) {
       throw Error('Something is wrong')
      }
      return res.json()
   }) 
   .then(data => {
      document.getElementById('news').innerHTML = `
      <h1> ${data.response.results[0].sectionName} </h1>
      <p>   ${data.response.results[0].webTitle} </p>
      <a href="${data.response.results[0].webUrl}"  target="_blank" > Click Here For More </a>
      `
   })
   .catch(err => console.log(err))



   function liveClock() {
            let time = new Date()
         return   document.getElementById('time').textContent = time.toLocaleTimeString("en-us", {timeStyle: "medium"})
  
   }



  setInterval(liveClock, 1000)
 

  


   
  

          navigator.geolocation.getCurrentPosition(position => {
            fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=afb22b0e6a8fecbc4872e4378debd279&units=metric`)
             .then(res => {
             if(!res.ok) {
                throw Error('The data was not received')
             }
             return res.json()
          })
           .then(data => {
            const iconURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById('weather').innerHTML = ` 
            <div class="weather-container">
            <img src="${iconURL}" />
            <p> ${Math.round(data.main.temp)}°C </p>
            </div>
            <p> ${data.name} </p>
            `
          })
          .catch(err => console.log(err))
  })




