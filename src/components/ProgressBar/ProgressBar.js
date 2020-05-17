import React, {useState, useEffect} from "react";
import styles from "./ProgressBar.module.css";


const Progress = ({}) => {

	
	//Declaring two useState hooks: one for the percentage of the bar, one for the refresh countdown

	const [percentage, setPercentage] = useState(0);
	const [counter, setCounter] = useState(60);
	
     //Inside the useEffect it will execute the logic once the component has mounted (similar to componentDidMount for classed based components)
	useEffect(() => {

		//SetInterval will run the function every specified time to fill the width of the bar in one minute
		const intervalId = setInterval(() => {
			// If percentage is 100 or bigger reset to 0, otherwise increment the percentage by one.
			 setPercentage(prev => prev >= 100 ? 0 : prev + 1);
			
			 
		}, 600);
	    //cleanup of the setInterval to avoid memory leaks
		return () => clearInterval(intervalId);
	}, [])
     //Inside the useEffect I will execute the logic once the component has mounted (similar to componentDidMount for classed based components)
	useEffect(() => {
		const intervalId = setInterval(()=>{
			//If the counter is equal or less than 0 reset the state to 60, otherwise reduce the counter by one.
			setCounter(prev=>prev<=0?60: prev-1)
		}, 1000)
		return () => {

			//cleanup of the setInterval to avoid memory leaks
			clearInterval(intervalId)
		}
	}, [])

	

    
  
   
	
	
	return (
		<div className={styles.container}>	
			<small>{`Reloading in ${counter}s`}</small>
		<div className={styles.progress}>
			<div className={styles.progressBar} style={{width: `${percentage}%`}}>
				
			</div>
		</div>
		</div>
	
	)
}


export default Progress;
