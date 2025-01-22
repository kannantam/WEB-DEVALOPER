import React from "react";
import axios from "axios";
import { useState } from "react";

function ImageSearchkn(){

   const [image,SetImage]=useState([])

   const [text,SetText]=useState("")


     const getImage=(query)=>{
    const url="https://api.unsplash.com/search/photos?client_id=3h7iH0REVw4S4rIncZa90HGcBbbjLGbIwtxEWr-1wxs&page=1&query="+query

  axios.get(url).then((res)=>SetImage(res.data.results))
   .catch((err)=>console.log(err.message,err.code))
  }
   
   const handleSearch=(event)=>{
    console.log(event.target.value)
    SetText(event.target.value)
   }

   const submitted=(event)=>{
    event.preventDefault();
       getImage(text)
       }

    return(<>

       <form onSubmit={submitted}>
            <input type="text" onChange={handleSearch}></input>
            <input type="submit" value="Search"></input>
        </form>

          {image.map((img)=>
               <>

               <img src={img.urls.small_s3} alt=''>
               </img>
                 <h6>{img.alt_description}</h6>


            
               </>
            
            )}
            
       </>)
    
          }    
        
    export default ImageSearchkn