// import shortid from 'shortid';
import { v4 as uuid } from "uuid";
// import types from './phonebook-types';
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/add", (name, phone) => ({
  payload: {
    id: uuid(),
    name,
    phone,
  },
}));

export const deleteContact = createAction("contacts/delete");

export const changeFilter = createAction("contacts/changeFilter");

// const addContact = (number, name) => ({
//     type: types.ADD,
//     contacts: {
// id: uuidv4(),
//         number,
//       name,

//     }

// })

// const deleteContact = (contactId) => ({
//     type: types.DELETE,
//     contacts: contactId,

// })

// export const filter = (value) => ({
//   type: types.CHANGE_FILTER,
//   contacts: value,
// });
// export default { addContact, deleteContact, filter }
