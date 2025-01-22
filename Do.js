// child component
import React from 'react'
class Do extends React.Component{
        constructor(props)
        {super()}

    render(){
        return(<>
        <h5>Do Items</h5>
        {this.props.doitem.map((item)=>{
            return(<>
            {
                item.deleted===false?(<>

<div className="card">
  <div className="card-body">
    <p className="card-text">{item.title}</p>
    <button className='btn btn-primary' onClick={()=>this.props.toggletodo(item.id)}>Done</button>
    <button className='btn btn-danger' onClick={()=>this.props.deletedTodo(item.id)}>Delete</button>
  </div>
</div>
                    
            </>):(<></>)
            }
          </>  
        )})}
        </>)
        
    }
    }



export default Do