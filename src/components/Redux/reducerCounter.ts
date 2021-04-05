export type AddNumberCountType = {
    type: 'ADD-NUMBER-COUNT'
    // startValue: number,
    // maxValue: number
}

const initialState = {
    counterValue: 0 as number,
    startValue: 0 as number,
    maxValue: 0 as number,
    erorr: true as boolean
}

export type InitialStateType = typeof initialState
export type ActionsRreducerCounter = AddNumberCountType

export const reducerCounter = (state: InitialStateType = initialState, action: ActionsRreducerCounter): InitialStateType => {
    switch (action.type) {
        case 'ADD-NUMBER-COUNT':
            if (state.counterValue + 1 === state.maxValue) {
                return {
                    ...state,
                    counterValue: state.counterValue + 1
                }
                if (state.counterValue + 1 === state.maxValue) {
                    return {...state, erorr: false}
                }
            }
            return {...state}
    }
    return state
}