import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Tuomalla kaikki actionit kerralla säästymme loputtomalta importtien lisäämiseltä sovelluksen kasvaessa
import * as counterActions from "../features/counterSlice"

const Counter = () => {
    // Tässä valitaan yksittäinen data statesta, counter value
    const count = useSelector(state => state.counter.value)

    // Tässä valitaan koko state
    const wholeState = useSelector(state => state)

    // useDispatch-metodi yhdistää slicen ja tämän dokumentin
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button onClick={() => dispatch(counterActions.decrement())}>-</button>
                <span>Current value: {count}</span>
                <button onClick={() => dispatch(counterActions.increment())}>+</button>
            </div>
            <div>
                <input type="number" onChange={(event) => dispatch(counterActions.incrementByAmount(event.target.value))} />
            </div>
            <h3>Counter value: {count}, input value: {wholeState.counter.incrementValue}</h3>
        </div>
    )
}

export default Counter