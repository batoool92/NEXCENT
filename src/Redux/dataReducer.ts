/* eslint-disable @typescript-eslint/no-explicit-any */
// import {data} from '../data.js'

interface initialState {
    data: [];
    loading: false;
    error: null;
}

const dataReducer = (state: initialState, action: any) => {
    switch (action.type) {
        case 'FETCH_DATA_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload.data
            };
        case 'FETCH_DATA_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default dataReducer;