import React from 'react'
import styles from "./Cards.module.css";

// Card component. It will accept 4 props: the day of the fetched weather, the temperature, the description and the icon. The icons are dynamically fetched from a provided Url (string concatenation)

 const Cards = ({day, temp, description, icon}) => {

   //using the method toLocaleString along with the option format, helped me to find a quick way to report the day of the week from the date format dd/mm/yyyy
   let days=  new Date(day).toLocaleString('en-us', {weekday:'short'});
   
   

    
    
     
     
    return (
        <div className={styles.container}>
         <div className={styles.content}>
          <div className={styles.info}>
            <h3>{days.toLocaleUpperCase()}</h3>
            <h3>{Math.round(temp)+"°"}</h3>
          </div>
         
         <div className={styles.description}>
           <img src={"http://openweathermap.org/img/wn/"+icon+".png"}/>
           <p>{description}</p>  
         </div>
         
         
         

             

            </div>
            
        </div>
    )
}



export default Cards;
