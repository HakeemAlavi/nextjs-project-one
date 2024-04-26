"use client"

import React, { useEffect, useState } from 'react';
import { Pencil } from 'lucide-react';
import { Trash } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from './ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { Input } from './ui/input';
import { createClient } from "@/utils/supabase/client";

export function DisplayDemo() {

  const [todos, setTodos] = useState<any[]>([]);

  useEffect(() => {
    // Function to fetch data from Supabase
    const fetchTodos = async () => {
      try {

        const supabase = createClient();
        const { data, error } = await supabase
          .from('todos')
          .select('*');

        if (error) {
          throw error;
        }

        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos");
      }
    };

    // Call the fetchTodos function when the component mounts
    fetchTodos();
  }, []); // Empty dependency array to run the effect only once

  return (
    <Table>
      <TableCaption>A list of your tasks.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Task</TableHead>
          <TableHead className="text-right pr-10">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{todo.id}</TableCell>
            <TableCell>{todo.is_complete ? "Yes" : "No"}</TableCell>
            <TableCell>{todo.task}</TableCell>
            <TableCell className="flex">
              <div className="flex ml-auto">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="mr-1 p-0.5 px-3">
                      <Pencil className=" w-4 h-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Task</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                      <Input className="mr-1" />
                    </DialogDescription>
                    <DialogFooter>
                      <Button variant="outline">Save</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <Button className="p-0.5 px-3">
                  <Trash className=" w-4 h-4 " />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
