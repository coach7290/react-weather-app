import React, {useEffect, useState} from 'react';
import {fetchCurrentData, fetchFutureData} from "./api"
import Header from './components/Header/Header';
import styles from  "./App.module.css";
import Cards from "./components/Cards/Cards";




function App() {

  //Declaring two UseState that will hold the data fetched from the Api

  const[currentWeather, setCurrentWeather]= useState({});
  const[futureWeather, setFutureWeather]= useState([]);


  //Inside this useEffect state i will retrieve and call the fetch data function i declared in the index.js file. Those functions will be called inside a setInterval  to refresh the data every minute.
  useEffect(() => {
    const currentData = async () => {
      const currentWeatherData = await fetchCurrentData();

      setCurrentWeather(currentWeatherData);
      //const intervalIds= setInterval(() => {
        //currentData();
        
      //}, 10000000);
    };

    const futureData = async () => {
      
      setFutureWeather( await fetchFutureData())
      console.log(futureWeather);
      //const intervalId= setInterval(() => {
        //futureData();
      //}, 10000000);
      

      
    };

  
    currentData();
    futureData();
      

    

    
    


    
  }, []);



   //The futureWeather state will be mapped to generate the cards components
  
  return (
    <div className={styles.container}>
      <Header data={currentWeather}/>
      {futureWeather.modifiedData && futureWeather.modifiedData.map(({day,temp,icon,description})=>{
        return(
          <Cards day={day} temp={temp} icon={icon} description={description}/>
        )
      })}

     
     
    
      
     
    </div>
  );
}

export default App;