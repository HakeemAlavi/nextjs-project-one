"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/client";
import { useTodos } from './todosprovider';

export function InputDemo() {
  const [taskInput, setTaskInput] = useState("");

  const { setTodos } = useTodos();

  // Function to handle form submission
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Check if taskInput is not empty
    if (taskInput.trim() !== "") {
      try {

        const supabase = createClient();
        // Insert the task into the 'todos' table
        const { data, error } = await supabase
          .from('todos')
          .insert([{ task: taskInput }])
          .select()

        if (error) {
          throw error;
        }

        // Log the result
        console.log("Task created:", data[0].task);
        
        setTodos((prevTodos: any[]) => [...prevTodos, data[0]]); // Update the todos state with the new task

        // Clear the input field after submitting
        setTaskInput("");
      } catch (error) {
        console.error("Error creating task");
      }
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex w-full max-w-sm items-center space-x-2 m-4">
      <Input 
        type="text" 
        placeholder="Do coding assignment" 
        value={taskInput} // Set input value to the state
        onChange={(e) => setTaskInput(e.target.value)} // Update the state when input changes
      />
      <Button type="submit" className="bg-black text-white">Add Task</Button>
    </form>
  );
}
