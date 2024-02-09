import React, { useState } from "react";
import Todo from './Todo';



//create your first component
const TodoList = () => {

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">TO-DOS</h1>
			<div class="container text-center">
				<Todo/>
			</div>	
		</div>
	);
};

export default TodoList;
