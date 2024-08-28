import React from 'react';
import { FaRegUserCircle, FaRegTrashAlt } from "react-icons/fa";
import { RiEditCircleLine } from "react-icons/ri";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../Config/firebase";
import AddAndUpdateContact from './AddAndUpdateContact';
import UseDisclose from '../Hooks/UseDisclose';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactCard = ({ contact }) => {
    const {onClose, onOpen, isOpen } = UseDisclose();
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully!")
    } catch (error) {
      console.log("Error deleting contact:", error);
      
    }
  };

  console.log(contact)

  return (
    <>
    <div className="bg-[#ABDA3F] flex justify-between items-center p-2 rounded-lg">
      <FaRegUserCircle className="text-white text-4xl cursor-pointer" />
      <div className="text-black">
        <p className="font-semibold"> {contact.name.toUpperCase()} </p>
        <p className="text-ms"> {contact.email.toLowerCase()} </p>
      </div>
      <div className="flex gap-2">
        <RiEditCircleLine onClick={onOpen} className="text-2xl cursor-pointer" />
        <FaRegTrashAlt
          onClick={() => deleteContact(contact.id)}
          className="text-2xl cursor-pointer"
        />
      </div>
    </div>
    <AddAndUpdateContact contact = {contact} isUpdate isOpen = {isOpen} onClose = {onClose}/>
    </>
  );
};

export default ContactCard;
