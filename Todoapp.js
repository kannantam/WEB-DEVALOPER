// parent component         
import React from 'react'
import DoList from './Do'
import DoneList from './Done'

// data source 
let todoarr=[{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false,
    "deleted":false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false,
    "deleted":false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false,
    "deleted":false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true,
    "deleted":false
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false,
    "deleted":false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false,"deleted":false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false,"deleted":false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true,"deleted":false
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false,"deleted":false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true,"deleted":false
  }]
class Todo extends React.Component{
        constructor(props)
        {
            super()
        this.state={
            todoarr:todoarr
        }
        
        }
getDoItem=()=>{
  return todoarr.filter((todo)=>todo.completed===false)
}
getDoneItem=()=>{
  return todoarr.filter((todo)=>todo.completed===true)
}

toggletodo=(todoId)=>{
          // copy of an array 
          const temparr=[...todoarr] 
          // find the object based on the id
        const todo=temparr.find((todo)=>todo.id===todoId)
          // change the completed between true or false
              todo.completed=!todo.completed
              this.setState({todos:temparr})

}

deleteTodo=(todoId)=>{
   // copy of an array 
   const temparr=[...todoarr] 
   // find the object based on the id
 const todo=temparr.find((todo)=>todo.id===todoId)
   // change the value to true 
       todo.deleted=true;
       this.setState({todos:temparr})
       console.log(this.state.todos)
}
    render(){
        return(<>
        <h1>TodoList</h1>
       <div className='row'>
       <div className='col'> <DoList doitem={this.getDoItem()}  toggletodo={this.toggletodo} deletedTodo={this.deleteTodo}></DoList></div>
       <div className='col'> <DoneList doneitem={this.getDoneItem()} toggletodos={this.toggletodo} deletedTodos={this.deleteTodo}></DoneList></div>
       </div>
     
      
        </>)
    }
}


export default Todo