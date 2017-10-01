import { createStore } from 'redux';

function reducer (state, action) {
    console.log(action);
    if (action.type === 'GET_LOTS') {
        return {
            parkingLots: action.payload,
        }; 
    }
    return state;
}



//Export and set initial state
export const store = createStore (reducer, {
    parkingLots: [],
});