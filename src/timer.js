import React,{useState,useEffect} from 'react';
import "./timer.css";

const Timer = ({startTime,incTime,infusions}) => {
  

 const [timer,setTimer] = useState(startTime);
  const incTimer = () =>{
    setTimer(timer+incTime);
  }


  const [counter,setCounter] = useState(infusions);
  const decCounter = ()=>{
    setCounter(counter-1);
  
  }

  const [btnText,setBtnText] = useState('');

  const [brewing,setBrewing] = useState("");
  
  const [visible,setVisible] = useState("visible");

  const setInvisible = () =>{
    setVisible("hidden");
  }
   const [visible2,setVisible2] = useState("hidden");
   

 

  const nextStep = (props) =>{
    setBrewing(props);
  }

 

  const startBrewing = () =>{
    
  
    setBtnText('Waiting...');
   
    if(counter>0){
      
      nextStep("Feel the zen while the tea steeps :)");
      
      setTimeout(() => {
        nextStep("Pour tea into the Cha Hai and pour some hot water back into the gaiwan, then press the button when you are done.");
        setBtnText('Done!');
        decCounter();
        
      }, timer);
      incTimer();
    }
  }

  const firstBrew = () =>{
    setVisible2("visible");
    setBtnText("Done!");
    nextStep("Put the tea in the gaiwan and pour in some hot water,then press the button when you are done.");
    
    setInvisible();
  };


  

    return(
      <div style = {{textAlign : "center"}}>
          <br/><br/>
          <div class = "desc">
          <div>Number of infusions: {infusions}</div>
          <div>First infusion time: {startTime/1000} seconds</div>
          <div>Time increase with each infusion: {incTime/1000} seconds</div>
          </div>
          <br/><br/><br/>
          <button style = {{visibility: visible}} onClick = {firstBrew}>Brew!</button>
          <div class = "desc">{brewing}</div><br/>
          <button style = {{visibility:visible2}} onClick = {startBrewing}>{btnText}</button>
          <div class = "desc">Infusions left: {counter}</div>

      </div>
    )
};




export default Timer;