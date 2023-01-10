const submitBtn =document.getElementById("submitBtn");
const cityname =document.getElementById("cityname");
const city_name=document.getElementById("city_name");
const temp= document.getElementById("temp");
const temp_status= document.getElementById("temp_status");
const datahide=document.querySelector('.middle_layer');

const getInfor= async(event)=>{
    // alert("nidubdd");
    event.preventDefault();
    let cityval= cityname.value;
    if(cityval===""){
        city_name.innerText=`Please write city name first`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
        let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=2f454ab2150b0f6d01ead550516487d7`
        const response=  await fetch(url);
        const data= await response.json();
        const arrdata= [data];
        console.log(arrdata);
        city_name.innerText=`${arrdata[0].name}, ${arrdata[0].sys.country}`;
        temp.innerText=arrdata[0].main.temp;
        datahide.classList.remove('data_hide');

        // const tempmood=arrdata[0].weather[0].main;
        // if(tempmood=="Clear"){
        //     temp_status.innerText=<i class="fa-solid fa-sun"></i>;
        // }
        // else if(tempmood=="Clouds"){
        //     temp_status.innerText=<i class="fa-duotone fa-cloud"></i>;
        // }
        // else if(tempmood=="Rain"){
        //     temp_status.innerHTML=<i class="fa-solid fa-cloud-rain"></i>;
        // }
        // else{
        //     temp_status.innerHTML=<i class="fa-solid fa-cloud-sun"></i>;
        // }

        }
        catch{
            city_name.innerText=`Please inter right city name`;
            datahide.classList.add('data_hide');

        }
    }
    
}
submitBtn.addEventListener('click',getInfor);
