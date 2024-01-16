import React from "react";
import SearchTask from "./SearchTask";
import AddTasks from "./AddTasks";
import TasksList from "./TasksList";

export default function TasksBoard() {
  return (
    <div>
      <section className="mb-20" id="tasks">
        <div className="container">
          <SearchTask />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <AddTasks />
            <TasksList />
          </div>
        </div>
      </section>
    </div>
  );
}
