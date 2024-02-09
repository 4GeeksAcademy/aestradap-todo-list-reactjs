import React, { useState } from "react";
import { X } from 'react-bootstrap-icons';



//create your first component
const Todo = () => {

	const [todo, setTodo] = useState('');


	return <div class="row">
                <div class="col"/>
                <div class="col-8">
                    <div className="input-group mb-3">
                        <input type="text" 
                                className="form-control border border-0 fs-3" 
                                placeholder="Write a to-do..." 
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                                onChange={e => setTodo(e.target.value)}
                                value={todo}
                        />
                        {
                            todo !== "" ?
                                <button className="btn btn-outline-light border border-0"
                                    type="button"
                                    id="button-addon2"
                                >
                                    <X color="red" size={60} />
                                </button> 
                                :
                            null
                        }	
                    </div>
                </div>
                <div class="col"/>
            </div>
};

export default Todo;
