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
		<div ClassName="w-50 text-center mb-3" >
			<div className="list-group">
				<div className="list-group-item d-flex gap-2">
					<input
						className="form-control mt-3"
						type="text"
						placeholder="Añade una nueva tarea..."
						value={newTask}
						onChange={handleNewTaskChange}
						onKeyPress={handleKeyPress}
					/>
				</div>
				<div className="list-group-item d-flex gap-2">
					<ul>
						{listItems}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;
