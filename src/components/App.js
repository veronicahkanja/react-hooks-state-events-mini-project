import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

const CATEGORIES = ["All", "Code", "Food", "Money", "Misc"];

const initialTasks = [
  { text: "Build a todo app", category: "Code" },
  { text: "Buy rice", category: "Food" },
];

function App() {
  const [tasks, setTasks] = React.useState(initialTasks);
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskText) => {
    setTasks(tasks.filter((task) => task.text !== taskText));
  };

  const tasksToDisplay =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={tasksToDisplay} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
