import React, { useState } from "react";
import SearchTask from "./SearchTask";
import AddTasks from "./AddTasks";
import TasksList from "./TasksList";
import AddTaskModal from "./AddTaskModal";

const defaultTask = {
  id: crypto.randomUUID(),
  title: "React Developer",
  describtion:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo modi facilis",
  tags: ["Web", "React", "JS"],
  priority: "High",
  isFavorite: false,
};

export default function TasksBoard() {
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
    console.log(task);
    setShowAddModal(false);
  };
  return (
    <div>
      <section className="mb-20" id="tasks">
        {showAddModal && <AddTaskModal onSave={handleAddTask} />}
        <div className="container">
          <SearchTask />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <AddTasks onAddClick={() => setShowAddModal(true)} />
            <TasksList tasks={tasks} />
          </div>
        </div>
      </section>
    </div>
  );
}
