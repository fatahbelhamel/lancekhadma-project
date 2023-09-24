import React from 'react';
import {useState} from "react";
import img1 from "./../../assets/1.jpg";
import img2 from "./../../assets/2.jpg";
import img3 from "./../../assets/3.jpg";
import img4 from "./../../assets/4.jpg";


const Main = (props) => {

  const [image, setImage] = useState([]);
  var images = [img1,img2,img3,img4];

  const changeBack = (e)=>{
   
   for(let i=0;i<=images.length;i++){
   
   if(images.length > i){
    i = i-1;
   }
    setImage(images[i]);
   } 
     
  }

  
  return (
    <div>
      <div class="relative max-h-screen h-screen max-w-screen w-screen">
        <img class="absolute top-0 left-0 right-0 bottom-0 w-screen h-screen object-cover z-0" src={image} alt="img" />
        <button onClick={changeBack} class="z-30 text-red-600 absolute">change back</button>
      </div>
    </div>
  )
}

export default Main;