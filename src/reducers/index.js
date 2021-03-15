import { APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, ADD_TO_MEM, USE_MEM, CLEAR_MEM } from './../actions';

export const initialState = {
    total: 100,
    operation: "*",
    memory: 100
}

const calculateResult = (num1, num2, operation) => {
    // eslint-disable-next-line default-case
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });

        case(CLEAR_DISPLAY):
            return ({
                ...state,
                total: 0
            });

        case(ADD_TO_MEM):
            return ({
                ...state,
                memory: state.total
            })

        case(USE_MEM):
            return ({
                ...state,
                total: calculateResult(state.total, state.memory, state.operation)
            })
        
        case(CLEAR_MEM):
            return({
                ...state,
                memory: 0
            })
            
        default:
            return state;
    }
}

export default reducer;