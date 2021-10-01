import React, { useState } from "react";
import "./image.css";
import Timer from "./timer";

const Shen = ()=>{
  const time = 10000;
  const inctime = 3000;
  const infusions = 15;
   return(
    <div id = "wrapper">
          <img style = {{textAlign:"center"}} src= "./images/shen.jpg" alt="shen pu erh tea" width = "740" height = "520"/><br/>
            < div  id="main">
           Fermentation: natural<br/><br/>
Taste: bitter in young shengs, fruity, apples and flowers<br/><br/>
Cha qi: 10/10<br/><br/><br/>

Sheng puerh is the naturally fermented type of puerh, a very complex tea, both in making and in brewing. This tea is withered, fried, rolled, pressed together and left to ferment in a wet climate, as the microbes slowly change it into a very mellow tea with a unique taste and a  very strong Qi. Aged sheng is the most expensive, rare, sought-after tea with the best taste and Cha Qi.
</div>
<Timer startTime={time} incTime={inctime} infusions = {infusions}/>
        </div>
   )}


export default Shen;