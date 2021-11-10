import { combineReducers } from "redux";
// import types from './phonebook-types';
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, changeFilter } from "./phonebook-actions";

const defaultContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const contactsReducer = createReducer(
  JSON.parse(window.localStorage.getItem("contacts")) ?? defaultContacts,
  {
    [addContact]: (state, { payload }) => [...state, payload],
    [deleteContact]: (state, { payload }) =>
      state.filter((contact) => {
        return contact.id !== payload;
      }),
  }
);

// const contacts = (state = [], {type, contacts}) => {

//     switch (type) {
//         case types.ADD:
//             return [ ...state, contacts ];

//         case types.DELETE:
//             return state.filter(({id}) => id !== contacts)

//          default:
//       return state;
//     }
// }

const filterReducer = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

// const filter = (state = '', {type, contacts}) => {

//     switch (type){

//         case types.CHANGE_FILTER:
//             return contacts;

//         default:
//             return state
//     }
// }

const counterReduser = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default counterReduser;
