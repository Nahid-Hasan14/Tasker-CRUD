import { useState } from "react";
import SearchTask from "./SearchTask";
import AddTasks from "./AddTasks";
import TasksList from "./TasksList";
import AddTaskModal from "./AddTaskModal";
import NoTaskYet from "./NoTaskYet";

//defaultTask/initial value
const defaultTask = {
  id: crypto.randomUUID(),
  title: "React Frontend Developer",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo modi facilis",
  tags: ["Web", "React", "JS"],
  priority: "High",
  isFavorite: false,
};

export default function TasksBoard() {
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  //Edit and Add tasks Function
  const handleAddEditTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setShowAddModal(false);
  };

  //Edit function
  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowAddModal(true);
  };

  //Modal Close function
  const handleCloss = () => {
    setTaskToUpdate(null);
    setShowAddModal(false);
  };

  // One task Delete function
  const handleDelete = (id) => {
    const deleteTask = tasks.filter((value) => value.id !== id);
    setTasks(deleteTask);
  };

  //All task Delete function
  const handleAlllDelete = () => {
    setTasks([]);
  };

  // Add Favorite function
  const handleFavorite = (id) => {
    const taskIdex = tasks.findIndex((task) => task.id === id);
    // console.log(taskIdex);
    const newTask = [...tasks];
    newTask[taskIdex].isFavorite = !newTask[taskIdex].isFavorite;
    setTasks(newTask);
  };

  //Search function
  const handleSearch = (searchTask) => {
    console.log(searchTask);
    const filtered = tasks.filter((task) => {
      return task.title.toLowerCase().includes(searchTask.toLowerCase());
    });
    setTasks([...filtered]);
  };

  return (
    <div>
      <section className="mb-20 " id="tasks">
        {showAddModal && (
          <AddTaskModal
            onSave={handleAddEditTask}
            taskToUpdate={taskToUpdate}
            handleCloss={handleCloss}
          />
        )}
        <div className="container mx-auto">
          <SearchTask onSearch={handleSearch} />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#a8afc0] px-6 py-8 md:px-9 md:py-16">
            <AddTasks
              onAddClick={() => setShowAddModal(true)}
              allDelete={handleAlllDelete}
            />
            {tasks.length > 0 ? (
              <TasksList
                tasks={tasks}
                onEdit={handleEditTask}
                onDelete={handleDelete}
                onFavorite={handleFavorite}
              />
            ) : (
              <NoTaskYet />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
