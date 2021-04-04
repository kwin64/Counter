export type AddNumberCountType = {
    type: 'ADD-NEW-VALUE'
    startValue: number,
    maxValue: number
}

const initialState = {
    maxNumber: 10,
    minNumber: 2,
    erorr: false
}

const reducer = (state: any, action: any): any => {
    switch (action.type) {
        case 'ADD-NEW-VALUE':
            return {
                ...state,
                maxNumber: action.max,

            }

    }
}