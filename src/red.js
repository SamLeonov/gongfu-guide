import React, { useState } from "react";
import "./image.css";
import Timer from "./timer";

const Red = () =>{
const time = 15000;
const inctime = 5000;
const infusions = 8;
    return(
        <div id = "wrapper">
        <img style = {{textAlign:"center"}} style={{ borderRadius : "50%"}} src= "./images/red.jpg" alt="red tea" width = "960" height = "520"/><br/>
        <div  id="main">
        Oxidation: full<br/><br/>
Taste: thick, sweet, citrus<br/><br/>
Cha qi:6/10<br/><br/><br/>
The fully oxidized red(known as black in the west) tea, is made by harvesting tea leaves, intentionally damaging them by rolling and/or cutting them, making them oxidize(just like a cut apple) and then left to wither, removing the bitterness from the tea and bringing out a sweet, fruity and bold taste. 
</div>
<Timer startTime={time} incTime={inctime} infusions = {infusions}/>
</div>
    )}


export default Red;