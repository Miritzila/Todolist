import React, { useState } from "react";

const Home = () => {
    const [tasks, setTasks] = useState([""]);
    const [newTask, setNewTask] = useState("");

    const handleNewTaskChange = (event) => {
        setNewTask(event.target.value);
    };

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    };

    const listItems = tasks.map((task, index) => (
        <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            {task}
        </li>
    ));

    return (
        <div className="container">
            <div className="w-50 text-center mb-3">
            </div>
            <ul className="list-group w-100">
				<li><input
                    className="form-control"
                    type="text"
                    placeholder="Añade una nueva tarea..."
                    value={newTask}
                    onChange={handleNewTaskChange}
                    onKeyPress={handleKeyPress}
                /></li>
                {listItems}
            </ul>
        </div>
    );
};

export default Home;
