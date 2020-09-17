import React, {useState} from 'react';
import './App.css';
import Buttons from "./Buttons";
import ButtonAdd from "./ButtonAdd";

function App() {


    const [counter, setCounter] = useState([0, 0, 0, 0, 0])
    const [word, setWord] = useState([])


    const counterAdd = () => {
        let adder = [...counter]
        adder.push(0);
        setCounter(adder)
    }

    const counterDel = () => {
        let del = [...counter]
        del.pop()
        setCounter(del)
    }


    const wordPlus = (index) => {
        counter.map((el, i) => {
            if (index === i) {
                return word + 'Ok';
            }
            return word;
        })
        setWord(word)

    }

    const counterPlus = (index) => {
        const newArr = counter.map((el, i) => {
            if (index === i) {
                return el + 1;
            }
            return el;
        })
        setCounter(newArr);
    }


    const counterMinus = (index) => {
        const newArr2 = counter.map((el, i) => {
            if (index === i) {
                return el - 1;
            }
            return el;
        })
        setCounter(newArr2)
    }


    const counterReset = (index) => {
        const newArr3 = counter.map((el, i) => {
            if (index === i) {
                return 0;
            }
            return el;
        })
        setCounter(newArr3);
    }

    return (
        <div className="App">
            <header className="App-header">
                {counter.map((el, index) => <Buttons wordPlus={wordPlus} minus={counterMinus} word={word}
                                                     reset={counterReset} el={el} plus={counterPlus} index={index}
                                                     key={Math.random()}/>)}
                <br/>
                <ButtonAdd counterAdd={counterAdd} counterDel={counterDel}/>
            </header>
        </div>
    );
}

export default App;
