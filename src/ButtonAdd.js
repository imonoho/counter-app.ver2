import React from "react";


function ButtonAdd(props) {






    return (
        <div>
            <button className='btn btn-light border-dark' onClick={props.counterAdd}>Add</button>
            <button className='btn btn-light border-dark' onClick={props.counterDel}>Del</button>
        </div>
    )
}


export default ButtonAdd;