import { createContext,useContext } from "react";
{"creating todocontext here ..."}
export const TodoContext = createContext({
// defining the value of todo contains
    todos:[{
id:1,
todomsg:"Todo msg",
completed:false,
}]
,
addTodo:(todo)=>{},
updatedTodo:(id,todo)=>{},
deleteTodo:(id)=>{},
toggleCompleted:(id)=>{}
})




export const useTodo = () =>{
    return useContext(TodoContext)
}

{"export provider here ....."}

export const TodoProvider = TodoContext.Provider