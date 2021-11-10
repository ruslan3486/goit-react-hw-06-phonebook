import { useSelector, useDispatch } from "react-redux";
// import PropTypes from "prop-types";
import s from "./contactList.module.css";

// import types from '../../redux/phonebook/phonebook-actions'
import { deleteContact } from "../../redux/phonebook/phonebook-actions";

export default function ContactList() {
  const { contacts, filter } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onDeleteContact = (id) => dispatch(deleteContact(id));

  const filteredContacts = (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterContact = filteredContacts(contacts, filter);
  return (
    <>
      <ul className={s.list}>
        {filterContact.map((contact) => (
          <li className={s.text_item} key={contact.id}>
            <p className={s.text_info}>
              {contact.name}: <span>{contact.phone}</span>
            </p>
            {
              <button
                className={s.text_delete}
                type="button"
                onClick={(e) => onDeleteContact(contact.id)}
              >
                удалить
              </button>
            }
          </li>
        ))}
      </ul>
    </>
  );
}
// const getVisibleContacts = (allContact, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   return allContact.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = ({ contacts: { items, filter } }) => ({

//     contacts: getVisibleContacts(items, filter)
// })

// const mapDispachToProps = dispatch => ({

//     onDeleteContact: dataId => dispatch(deleteContact(dataId))
// })

// ContactList.propType = {

//     ontacts: PropTypes.arrayOf(PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,

//     })),
// }
