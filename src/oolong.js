import React, { useState } from "react";
import "./image.css";
import Timer from "./timer";

const Oolong = ()=>{
const time = 20000;
const inctime = 5000;
const infusions = 9;
    return(
        <div id = "wrapper">
        <img style = {{textAlign:"center"}}src= "./images/oolong.jpg" alt="oolong tea" width = "960" height = "520"/><br/>
       <div  id="main">
        Oxidation: low to high, but never fully oxidized or unoxidized<br/><br/>
Taste: very different, depends on preparation<br/><br/>
Cha qi: 8/10<br/><br/><br/>

Oolong is an umbrella term for different teas, with the level of oxidation varying from 8% (green oolongs) to 85% (dark roasted oolongs). This is the most popular kind of chinese tea, with leaves manually cut and rolled in a very specific way to maintain the required level of oxdiation. These teas often have the most unique and special tastes and a very strong and pleasant Cha Qi.
</div>
<Timer startTime={time} incTime={inctime} infusions = {infusions}/>
</div>
    )}


export default Oolong;