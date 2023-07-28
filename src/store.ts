import { createStore } from 'redux'

const initialState = { theme: 'light' };

const themeReducer = (state = initialState, action ) => {
    switch (action.type) {
        case 'SET_THEME':
            return {
                ...state,
                theme: action.payload
            }

        default: 
            return state;

    }
}

const store = createStore(themeReducer);

export const setTheme = (theme) => ({
    type: 'SET_THEME',
    payload: theme,
});

export default store;