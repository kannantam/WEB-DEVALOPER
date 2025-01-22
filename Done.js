// child componen
import React from 'react'
class Done extends React.Component{
        constructor(props)
        {super()}

    render(){
        return(<>
            <h5>Done Items</h5>
            {this.props.doneitem.map((item)=>{
                return(<>
                {
                    item.deleted===false?(<>
    
    <div className="card">
      <div className="card-body">
        <p className="card-text">{item.title}</p>
        <button className='btn btn-secondary' onClick={()=>this.props.toggletodos(item.id)}>Undo</button>
        <button className='btn btn-danger' onClick={()=>this.props.deletedTodos(item.id)}>Delete</button>
      </div>
    </div>
                        
                </>):(<></>)
                }
              </>  
            )})}
            </>)
        // return(<>
        // <h5>Doneitem</h5>
        // <p>{this.props.doneitem.map((item)=>{
        //     return(<><p>{item.title}</p>
        //     <button>undo</button>
        //     <button>Delete</button></>)
        // })}</p>
        // </>)
    }
}


export default Done