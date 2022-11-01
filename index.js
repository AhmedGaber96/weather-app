"use strict"
let inputCity=document.getElementById('inputCity');
let iconOne=document.querySelector('.iconOne');
let iconTwo=document.querySelector('.iconTwo');
let xxx= [];
let yyy= [];

setInterval(function(){
    let time= new Date();
let hours=time.getHours();
let min=time.getMinutes();
let secound=time.getSeconds();
document.querySelector('.time p').innerHTML=`${hours}:${min}:${secound}`
},1000)
document.querySelector('.search-icon').addEventListener('click',function(){
    if(inputCity.value!="")
    main()
clear()
})


 async function display (city){
    let data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=ccdb9b18c5c04bf3afe65501222010&q=${city}&days=3`);
    let dataRec =  await data.json();
    xxx=dataRec.forecast.forecastday
    document.querySelector('.location').innerHTML=dataRec.location.name    
    
}

async function main(){
    await display(inputCity.value);
     await hhh();
}


function clear(){
    inputCity.value="" 
}
function displayDay(dayNum){
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date();
    let dayName;
    if(d.getDay()+dayNum<=6){
        let dayName=days[d.getDay()+dayNum]
        return dayName
    }
    else if(d.getDay()+dayNum==7){
        dayName=days[0]
        return dayName

    }
    else{
        dayName=days[1]
        return dayName
    }
    }  

function dispalyMounth(dayOfMounth){
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let m= new Date();
    let monthy = m.getDate()+dayOfMounth + ' '+monthNames[m.getMonth()]; 
    return monthy;
}
function hhh(){
    return new Promise(function(){
        let time= new Date();
        let cartona=``;
    for(let i=0;i<3;i++){
        if(i==0){
            cartona+=`<div class="col-md-3 mb-md-0 mb-4">
            <div id="weatherCard" class="text-white">
             <div class="dayAndDate bg-white text-dark d-flex justify-content-between align-items-center p-3">
                 <p class="m-0 fw-bold" id="cardDay">${displayDay(i)}</p>
                 <p class="m-0 fw-bold" id="cardDate">${dispalyMounth(i)}</p>
             </div>
             <div class="cardInformation p-3">
                 <p class="fw-bolder fs-6 text-white"> Current Temprture</p>
                <p id="maxKelvin">${xxx[i].hour[time.getHours()].temp_c} °c</p>
                 <p class="border-bottom" id="maxCelsius">${xxx[i].hour[time.getHours()].temp_f} °f</p>
             </div>
             <div class="cardFooter d-flex justify-content-between bg-white text-dark p-3 fw-bolder">
                 <div class="sunStatus">
                     <p class="m-0">${xxx[i].hour[time.getHours()].condition.text}</p>
                 </div>
                 <div class="wind">
                     <i class="fa-solid fa-wind"></i> <span>${xxx[i].hour[time.getHours()].vis_km} KM</span>
                     
                 </div>
             </div>        
            </div>
         </div>`
        } else if(i>0){
            cartona+=`<div class="col-md-3 mb-md-0 mb-4">
            <div  id="weatherCard" class="text-white">
             <div class="dayAndDate bg-white text-dark d-flex justify-content-between align-items-center p-3">
                 <p class="m-0 fw-bold" id="cardDay">${displayDay(i)}</p>
                 <p class="m-0 fw-bold" id="cardDate">${dispalyMounth(i)}</p>
             </div>
             <div class="cardInformation p-3">
                 <p class="fw-bolder fs-6 text-white"> Current Temprture</p>
                 <p id="maxKelvin">${xxx[i].hour[time.getHours()].temp_c} °c</p>
                 <p class="border-bottom" id="maxCelsius">${xxx[i].hour[time.getHours()].temp_f} °f</p>
             </div>
             <div class="cardFooter d-flex justify-content-between bg-white text-dark p-3 fw-bolder">
                 <div class="sunStatus">
                     <p class="m-0">${xxx[i].hour[time.getHours()].condition.text}</p>
                 </div>

                 <div class="wind">
                     <i class="fa-solid fa-wind"></i> <span>${xxx[i].hour[time.getHours()].vis_km} KM</span>
                     
                 </div>
             </div>
             
            </div>

         </div>`

        }
    }
     
    
    document.getElementById('weatherContainer').innerHTML=cartona 

    })
        

    
}

