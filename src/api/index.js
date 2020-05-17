import axios from "axios";

// Declaring URL variables (one for the current weather and one for the 5-days forecast)
const currentWeather = "http://api.openweathermap.org/data/2.5/weather?q=London&appid=bd3ac356b99841462eae1399b704c2c1&units=metric";
const futureWeather =  "http://api.openweathermap.org/data/2.5/forecast?q=London&appid=bd3ac356b99841462eae1399b704c2c1&units=metric";

// Function that fetch the current weather using axios with async/await method
export const fetchCurrentData = async ()=>{

    // try to get the data from the api. If unsuccesful, report the error (catch)
    try {

        //Destructuring the fetched data objects for better reading 
        const {data:{name, main:{temp}}} = await axios.get(currentWeather);
         //Returning the needed data
        return {name, temp}
           
        
    } catch (error) {
        console.log(error);
        
    }
}

// Function that fetch the 5-days weather forecast
export const fetchFutureData = async()=>{
 // Try to get the data from the api. If unsuccesful, report the error (catch)
try {
    //Destructuring the fetched data
    const {data:{list}} = await axios.get(futureWeather);
    // The original data fetched from the Openweather API would include the weather for each day three times a day(morning, afternoon,evening). This function below will filter the results to get only the afternoon weather data for each day
    
    const filteredData = list.filter(reading => {   
        return reading.dt_txt.includes("18:00:00")
        }
      )
    
   
       //Mapping the needed data and store in an object variable
    const modifiedData = filteredData.map((dailyData)=>({

        day: dailyData.dt_txt,
        temp: dailyData.main.temp,
        icon: dailyData.weather.map(icon=>{return icon.icon}),
        description: dailyData.weather.map(desc=>{return desc.description}),


       
    }))
   
    
    console.log(modifiedData);
    
    return {modifiedData}
    
    
    
} catch (error) {
    console.log(error);
    
}



}

         
        
      
      
    

        
        
      
        
        


        

     
     




  
