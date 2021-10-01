import React, { useState } from "react";
import "./image.css";
import Timer from "./timer";

const Shou = ()=>{
    const time = 10000;
    const inctime = 5000;
    const infusions = 20;
    return(
        <div id = "wrapper">
        <img style = {{textAlign:"center"}} style={{ borderRadius : "50%"}} src= "./images/shou.jpg" alt="shou pu erh tea" width = "960" height = "520"/><br/>
        <div id="main">
        Fermentation: artificial (wo dui)<br/><br/>
Taste: earth, wood, berries<br/><br/>
Cha qi: 7/10<br/><br/><br/>
Shou pu erh was invented in the 1980s by the famous Menghai Da Yi tea factory, it is a pu erh, artificially fermented during the process of "wo dui"(wet pile). It was invented to become a quicker and cheaper alternative to aged sheng pu erh, which could take decades to fully ferment, and shou pu erh definitely lived up to the expectations, quickly becoming one of the most popular and sought after teas. This tea has great health benefits, improving digestion, blood pressure, reducing stress and anxiety, helps with hangovers, gives a great energy boost and of course tastes really good. 
</div>
<Timer startTime={time} incTime={inctime} infusions = {infusions}/>
</div>
    )}


export default Shou;