import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import {  FaPlusCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import { collection, onSnapshot } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactCard from "./Components/ContactCard";
import AddAndUpdateContact from "./Components/AddAndUpdateContact";
import UseDisclose from "./Hooks/UseDisclose";
import { db } from "./Config/firebase";
import NotFound from "./Components/NotFound";

function App() {
  const { onOpen, isOpen, onClose } = UseDisclose();
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const contactsRef = collection(db, "contacts");
    const unsubscribe = onSnapshot(contactsRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setContacts(contactList);
      setFilteredContacts(contactList); // Initialize filteredContacts with all contacts
    }, (error) => {
      console.error("Error fetching contacts:", error);
    });

   
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredContacts(filtered);
  }, [searchTerm, contacts]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <NavBar />
        <div className="flex relative items-center gap-2">
          <CiSearch className="ml-1 text-white text-3xl absolute" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="text-white pl-9 flex-grow h-10 border rounded-md bg-transparent border-white"
          />
          <div>
            <FaPlusCircle
              onClick={onOpen}
              className="cursor-pointer text-white text-4xl"
            />
          </div>
        </div>

        <div className=" m-5 flex flex-col gap-5">
          {filteredContacts.length === 0 ? (
            <NotFound />
          ) : (
            filteredContacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          )}
        </div>
      </div>
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
      <ToastContainer position="bottom-center" />
    </>
  );
}

export default App;
