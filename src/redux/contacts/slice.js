import { createSlice, createSelector, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, changeContact } from "../contacts/operations";
import { logOut } from "../auth/operations";

const handlePending = (state) => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const slice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = state.items.filter(item => 
                item.id !== action.payload.id)
        })
        .addCase(logOut.fulfilled, state => {
            state.items = [];
            state.error = null;
            state.isLoading = false;
        })
        .addCase(changeContact.fulfilled, (state, action) => {
            state.error = null;
            state.isLoading = false;
            state.items = state.items.map(item =>
                item.id === action.payload.id ? action.payload : item
            );
        })
        .addMatcher(isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending, changeContact.pending), 
        (state, action) => {
            handlePending;
        })
        .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected, changeContact.rejected), 
        (state, action) => {
            handleRejected;
        })
    },
});

export default slice.reducer;
