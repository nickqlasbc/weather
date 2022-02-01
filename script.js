var inputval = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');

apik = "da1a2f7493bcd65811c48f6e27fda92a";

function conversion(val) {
    return(val - 273).toFixed(2)
}

btn.addEventListener('click', function() {

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
    .then(res => res.json())

    .then(data => {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var tempature = data['main']['temp']
        var wndspd = data['wind']['speed']

        city.innerHTML = 'City: ${nameval}'
        temp.innerHTML = 'Temp: ${conversion(tempature)}'
        description.innerHTML = 'Conditions: ${descrip}'
        wind.innerHTML = 'Wind Speed: ${wndspd} km/h'

     
    })
    .catch(err => alert('you entered something stupid'))

})




