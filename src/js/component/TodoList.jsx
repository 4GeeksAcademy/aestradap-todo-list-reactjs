import React, { useState, useRef } from "react";
import Todo from './Todo';



//create your first component
const TodoList = () => {
	const [todoList, setTodoList] = useState(["Make the Bed ", "Wash my hands", "Eat", "Walk the dog"]);
	const [newTodo, setNewTodo] = useState('');
	
	const handlerSummitTask = (e) => {
		if (e.key === "Enter"){
			setTodoList([
				...todoList,
				newTodo
			]);
			setNewTodo('');
		}
	}

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">TO-DOS</h1>
			<div className="container text-center">
				
					<input type="text" 
								className="form-control border border-0 fs-3" 
								placeholder="Write a to-do..." 
								aria-label="Recipient's username"
								aria-describedby="button-addon2"
								onChange={ e => setNewTodo(e.target.value)}
								onKeyDown={e => handlerSummitTask(e)}
								value={newTodo}
							/>
				
				<div className="row">
					<div className="col"/>
					<div className="col-8">
						{
							todoList.map((todo, key) => (
								<>
								<Todo
									key={key}
									description={todo}
								/>
								<hr class="border border-danger border-2 opacity-50"></hr>
								</>
							))
						}
						
					</div>
					<div className="col"/>
				</div>
	
			</div>	
		</div>
	);
};

export default TodoList;
