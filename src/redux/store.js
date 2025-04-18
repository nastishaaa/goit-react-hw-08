import contactsReducer from './contactsSlice'
import filtersReducer from './filtersSlice'
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,
    },
});