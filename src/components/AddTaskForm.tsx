// src/components/AddTaskForm.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/taskActions";
import { Task } from "../redux/types";
import { AppDispatch } from "../redux/store";

const AddTaskForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState("");
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(date);

    let day = parseInt(date.split("-")[2]) + 1;
    const newDate = date.split("-")[0] + "-" + date.split("-")[1] + "-" + day;

    const newTask: Task = {
      id: Date.now(), // You might want to generate IDs differently
      title,
      description,
      priority,
      completed: false,
      date: newDate,
    };
    dispatch(addTask(newTask));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="text"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        placeholder="Priority"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
