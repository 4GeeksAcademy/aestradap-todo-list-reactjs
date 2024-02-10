import React, { useState } from "react";
import { SdCard, X } from 'react-bootstrap-icons';



//create your first component
const Todo = ({todo, setTodoList, handlerEdit, handlerDelete}) => {

    const {id, description} = todo;
	const [myTodo, setMyTodo] = useState(description);
   
   
    


	return <div className="input-group mb-3 pt-2">
                        <input type="text" 
                                className="form-control border border-0 fs-3" 
                                placeholder="Write a to-do..." 
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                                onChange={e => setMyTodo( e.target.value )}
                                value={myTodo}
                        />
                        {
                            description !== myTodo
                            ? <button className="btn btn-outline-light border border-0"
                                type="button"
                                id="button-addon2"
                                onClick={() => handlerEdit( id, myTodo )}
                            >
                                    <SdCard color="red" size={36} />
                                </button> 
                            : null 
                        }
                       
                        {
                            description !== ""  ?
                                <button className="btn btn-outline-light border border-0"
                                    type="button"
                                    id="button-addon2"
                                    onClick={()=>{handlerDelete(id)}}
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
