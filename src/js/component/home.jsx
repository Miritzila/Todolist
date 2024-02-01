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

	const listItems = tasks.map((task, index) => <li key={index}>{task}</li>);

	return (
		<div className="container my-5">
			<h1 className="text-center mb-4">Mis Tareas</h1>
			<div className="notebook">
				<ul className="list-group shadow">
					{listItems}
				</ul>
			</div>
			<input
				className="form-control mt-3"
				type="text"
				placeholder="Añade una nueva tarea..."
				value={newTask}
				onChange={handleNewTaskChange}
				onKeyPress={handleKeyPress}
			/>
		</div>
	);
};

export default Home;
