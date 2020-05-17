import React from 'react'
import styles from "./Header.module.css"
import Clock from "react-live-clock"
import Progress from '../ProgressBar/ProgressBar'

//Header container: it will receive two props: the name of the city and the temperature. For the clock I used the react-live clock component from node.
 const Header = ({data:{name, temp}}) => {
     
     
    return (
        <div className={styles.container}>
            <div className={styles.content}>
              <h2>{name}</h2>
              <div style={{border: "1px solid black", borderRadius: "5px"}}>
                  <div className={styles.clock}>
                      <span className={styles.dot}></span><span className={styles.dot}></span><span className={styles.dot}></span>
                      
               <Clock format={'HH:mm'} className={styles.time} ticking={true} timezone={'GB'}/>
               <p>GMT</p> 
              
                   <span className={styles.dots_f}></span><span className={styles.dots_s}></span><span className={styles.dots_t}></span>
                   
                   
              
              </div>
             

              </div>
              
              
              <h2>{Math.round(temp)+"°"}</h2>

            </div>

            <Progress/>
           

        
            
        </div>
    )
}



export default Header;
