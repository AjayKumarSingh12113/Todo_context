import React, { createContext, useContext } from "react";

const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo : " Todo msg",
            completed : false,
        },
    ],
    addTodo: (todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
});//ak object aaya 

export const useTodo=()=>{
    return useContext(TodoContext);
}

export const Todoprovider = TodoContext.Provider;