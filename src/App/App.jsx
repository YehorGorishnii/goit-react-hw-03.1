import { useState, useEffect } from "react";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

export default function App() {
  const [cotnacts, setCotnacts] = useState(() => {
    const storagePhonebook = localStorage.getItem("Phonebook");
    return storagePhonebook
      ? JSON.parse(storagePhonebook)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  });

  const [filter, setFilter] = useState("");

  const filterContacts = cotnacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (newContact) => {
    setCotnacts([...cotnacts, newContact]);
  };

  const deleteContact = (id) => {
    setCotnacts(cotnacts.filter((contact) => contact.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("Phonebook", JSON.stringify(cotnacts));
  }, [cotnacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox filter={filter} onFilter={setFilter} />
      <ContactList items={filterContacts} onDelete={deleteContact} />
    </>
  );
}
