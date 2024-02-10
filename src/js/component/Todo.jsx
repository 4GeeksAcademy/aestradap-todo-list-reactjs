import React, { useState } from "react";
import { X } from 'react-bootstrap-icons';



//create your first component
const Todo = ({description}) => {

	const [todo, setTodo] = useState(description);
    


	return <div className="input-group mb-3 pt-2">
                        <input type="text" 
                                className="form-control border border-0 fs-3" 
                                placeholder="Write a to-do..." 
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                                onChange={e => setTodo(e.target.value)}
                                value={todo}
                        />
                        {
                            description !== "" ?
                                <button className="btn btn-outline-light border border-0"
                                    type="button"
                                    id="button-addon2"
                                >
                                    <X color="red" size={60} />
                                </button> 
                                :
                            null
                        }	
                        <br/>
            </div>
             
};

export default Todo;
