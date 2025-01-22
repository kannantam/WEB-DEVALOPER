import React from 'react';
import axios from 'axios';

class ImageSearch extends React.Component{ 
    constructor(props)

    {
        super()
        this.state={Image:[],text:""}
    }
     /* componentDidMount()
      {
        const url="https://api.unsplash.com/search/photos?client_id=3h7iH0REVw4S4rIncZa90HGcBbbjLGbIwtxEWr-1wxs&page=1&query=rose"

        axios.get(url)

        .then((res)=> this.setState({image:res.data.results}),)
        
        
        .catch((err)=>console.log(err))
            

        }
         */
        getImage=(query)=>{
          const url="https://api.unsplash.com/search/photos?client_id=3h7iH0REVw4S4rIncZa90HGcBbbjLGbIwtxEWr-1wxs&page=1&query="+query

        axios.get(url).then((res)=> this.setState({image:res.data.results}),)
        
        .catch((err)=>console.log(err))
        }
      
         handleSearch=(event)=>{
          console.log(event.target.value)
          this.setState({text:event.target.value})
         }

         submitted=(event)=>{
          event.preventDefault();
          this.getImage(this.state.text)
         }


      render()
      
     {
      
        return(<>
        
        <h3>ImageSearch</h3>

        <form onSubmit={this.submitted}>
            <input type="text" onChange={this.handleSearch}></input>
            <input type="submit" value="Search"></input>
        </form>

          {
            this.state.Image.map((img)=>
               <>
               <img src={img.urls.small_s3} alt=''>
               </img>
                 <h6>{img.alt_description}</h6>


             

               </>
            
            )}
          
       
       </>)
       
      }     
         
} 
          
     
          

export default ImageSearch