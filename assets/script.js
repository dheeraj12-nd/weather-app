const apiKey = '04cad4e64e706444b44fb343cd2b035e';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.Weather-icon')

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404 ){
        document.querySelector('.error').style.display='block';
        document.querySelector('.Weather').style.display='none';
    }else{
        var data = await response.json();
        console.log(data)
    
        
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";
    
        if(data.weather[0].main == 'Cloudy'){
            weatherIcon.src = './assets/clouds.png'
        }
        else if(data.weather[0].main == 'Clear'){
            weatherIcon.src = './assets/clear.png'
        }
        else if(data.weather[0].main == 'Rain'){
            weatherIcon.src = './assets/rain.png'
        }
        else if(data.weather[0].main == 'Mist'){
            weatherIcon.src = './assets/mist.png'
        }
        else if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src = './assets/drizzal.png'
        }
        else if(data.weather[0].main == 'humidity'){
            weatherIcon.src = './assets/humidity.png'
        }
        document.querySelector('.Weather').style.display='block';
        document.querySelector('.error').style.display='';
    }
    

    }
  
searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})
