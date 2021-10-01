import React, { useState } from "react";
import "./image.css";
import "./tea.css";
import Timer from "./timer";
const White =  () =>{
    const time = 20000;
    const inctime = 10000;
    const infusions = 5;

    return (
        <div id = "wrapper">
            <img style = {{textAlign:"center"}} src= "./images/white.jpg" alt="white tea" width = "960" height = "520"/><br/>
          
<div  id="main">
Oxidation: very low<br/><br/>
Taste: bitter, flowery, delicate<br/><br/>
Cha qi: 9/10<br/><br/><br/>

White tea is a very slightly oxidized tea, made from the very first leaves and buds to appear on the tea bush. It has a very delicate taste, yet a strong cha qi. </div>
<Timer startTime={time} incTime={inctime} infusions = {infusions}/>
</div>
    )
};











export default White;