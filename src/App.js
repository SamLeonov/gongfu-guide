import "./App.css";
import React from 'react';
import {Link} from 'react-router-dom';
import "./images/white.jpg";



const App = ()=>{
  return (
    <div>
     <div id = "intro">
       <div>Welcome to Gongfu Guide!</div><br/>
       <div>This is a web app created to help you with gongfu tea brewing</div><br/>
       <div>Please pick the tea you would like to brew below: </div><br/>

      </div>
     <div className = "app">
       <div ><Link to="/white">White tea<br/><img src= "./images/white.jpg" alt="white tea" width="320" height ="256"/></Link></div>
       <div ><Link to="/green">Green tea<br/><img src= "./images/green.jpg" alt="green tea" width="320" height ="256"/></Link></div>
       <div ><Link to="/oolong">Oolong tea<br/><img src= "./images/oolong.jpg" alt="oolong tea" width="320" height ="256"/></Link></div>
       <div ><Link to="/red">Red tea<br/> <img src= "./images/red.jpg" alt="red tea" width="320" height ="256"/></Link></div>
       <div ><Link to="/shou">Shou pu erh<br/><img src= "./images/shou.jpg" alt="shou pu erh tea" width="320" height ="256"/></Link></div>
       <div > <Link to="/shen">Sheng pu erh<br/><img src= "./images/shen.jpg" alt="shen pu erh tea" width="320" height ="256"/></Link></div>
      
     </div>
    </div>
  )
}

export default App;
