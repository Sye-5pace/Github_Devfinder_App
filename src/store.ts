import { createStore,AnyAction } from 'redux'

interface ThemeState {
    theme: string;
}

const initialState: ThemeState = { theme: 'light' };

const themeReducer = (state: ThemeState = initialState, action: AnyAction ) => {
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

export const setTheme = (theme: string) => ({
    type: 'SET_THEME',
    payload: theme,
});

export default store;