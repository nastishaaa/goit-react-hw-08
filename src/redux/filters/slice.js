import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

const slice = createSlice({
    name: 'filters',
    initialState: {
        name: '',
    },
    reducers: {
        changeFilter(state, action) {
            state.name = action.payload;
        },
    },
});

export const { changeFilter } = slice.actions;
export const selectFilter = (state) => state.filters.name;

export const selectVisibleContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
);

export default slice.reducer;