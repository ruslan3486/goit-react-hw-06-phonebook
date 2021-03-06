import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import PropTypes from 'prop-types';
import s from "./ContactForm.module.css";
import { addContact } from "../../redux/phonebook/phonebook-actions";

export default function ContactForm() {
  // state = {
  //   number: '',
  //   name: '',
  // }

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { contacts } = useSelector((state) => state);
  const dispatch = useDispatch();
  // const nameId = uuidv4();
  // const numberId = uuidv4();

  const onAddContacts = (name, phone) => dispatch(addContact(name, phone));

  //     const handleChangeNumber = event => {
  //     const { value } = event.currentTarget;
  //     setNumber(value);
  //   };
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = (name) =>
      contacts.map((contact) => contact.name).includes(name);

    if (data(name)) {
      return `${name} is already in contacts`;
    } else {
      onAddContacts(name, phone);
    }
    setName("");
    setPhone("");
  };

  return (
    <form className={s.text} onSubmit={(e) => handleSubmit(e)}>
      <label id="name" className={s.text_contact} htmlFor="name">
        <input
          className={s.text_input}
          type="text"
          name="name"
          value={name}
          placeholder="Michael Jordan"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label id="phone" htmlFor="phone" className={s.text_contact}>
        <input
          className={s.text_input}
          type="text"
          name="number"
          value={phone}
          placeholder="555-55-555"
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <button
        className={s.text_button}
        disabled={!(name && phone)}
        type="submit"
      >
        Add contacts
      </button>
    </form>
  );
}

// ContactForm.propTypes = {

//     name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// }
