import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name: "counter",

    // Initial state on pakollinen, jotta Redux saa jotain dataa sovelluksen latautuessa ensimmäistä kertaa.
    initialState: {
        value: 0,
        incrementValue: 0
    },

    /* Tässä käytetään mutatoivaa eli suoraan arvoa muuttavaa metodia (state.value += 1)
    Se on mahdollista ja sallittua ainoastaan, kun käytämme Toolkitin createSlice-metodia,
    jonka asiosta datan muuttumattomuus saavutetaan kulissien takana. */
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.incrementValue = parseInt(action.payload)
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
