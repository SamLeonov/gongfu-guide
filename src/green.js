import React, { useState } from "react";
import "./image.css";
import Timer from "./timer";

const Green = () =>{
const time = 15000;
const inctime = 3000;
const infusions = 5;
    return(
        <div id = "wrapper">
        <img style = {{textAlign:"center"}} src= "./images/green.jpg" style={{ borderRadius : "50%"}} alt="green tea" width = "700" height = "520"/><br/>
        <div  id="main">
        Oxidation: minimal<br/><br/>
Taste: fresh, bitter, grass-like<br/><br/>
Cha qi: 5/10<br/><br/><br/>
A minimally oxidized tea,green tea is steamed and dried immediately after it is harvested. It is very easy to brew both gong-fu and western style and is high in caffeine.
</div>
<Timer startTime={time} incTime={inctime} infusions = {infusions}/>
</div>
    )}






export default Green;