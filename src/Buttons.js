import React from "react";


function Buttons(props) {


    const counterHandler = props.el;

    const wordHandler = props.word;

    const wordPlus = () => {
        props.wordPlus()
    }


    const plus = () => {
        props.plus(props.index)
        wordPlus();
    }

    const minus = () => {
        props.minus(props.index)
    }

    const reset = () => {
        props.reset(props.index)
    }


    return (
        <div>
            {wordHandler}
            <hr/>
            {counterHandler}
            <button className='btn btn-dark shadow-sm border' onClick={plus}>+</button>
            <button className='btn btn-dark border' onClick={minus}>-</button>
            <button className='btn btn-outline-danger shadow-lg' onClick={reset}>Res</button>
        </div>

    )
}

export default Buttons;