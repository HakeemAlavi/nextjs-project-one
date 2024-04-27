"use client"

import React from 'react'

// Define a type for the context value
type todoscontexttype = {
    todos: any[], // Array to hold the todos
    setTodos: React.Dispatch<React.SetStateAction<any[]>> // Function to update the todos
    }

    const todoscontext = React.createContext(null) as React.Context<todoscontexttype | null>

type todosprovidertype = {
    children: React.ReactNode
}

function todosprovider({children}: todosprovidertype) {
  const [todos, setTodos] = React.useState([] as any[])
  return (
    <todoscontext.Provider value={{todos, setTodos}}>
      {children}
    </todoscontext.Provider>
  )
}

export function useTodos() {
    const context = React.useContext(todoscontext)
    if (!context) {
        throw new Error("useTodos must be used within a TodosProvider")
    }
    return context
    }


export default todosprovider