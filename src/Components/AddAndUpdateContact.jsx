import React from 'react';
import Modal from "./Modal";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../Config/firebase';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

// Validation schema
const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
});

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {

  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact Added Successfully!");
    } catch (error) {
      console.error("Error adding contact:", error);
      toast.error("Error adding contact.");
    }
  };

  const updateContacts = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact Updated Successfully!");
    } catch (error) {
      console.error("Error updating contact:", error);
      toast.error("Error updating contact.");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Formik
        validationSchema={contactSchemaValidation}
        initialValues={
          isUpdate
            ? {
                name: contact.name || "",
                email: contact.email || "",
              }
            : { name: "", email: "" }
        }
        onSubmit={(values) => {
          isUpdate ? updateContacts(values, contact.id) : addContact(values);
        }}
      >
        <Form className='flex flex-col gap-5'>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name">Name</label>
            <Field name="name" className="border h-10" type="text" />
            <div className='text-red-500'>
              <ErrorMessage name="name" />
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="email">Email</label>
            <Field name="email" className="border h-10" type="email" />
            <div className='text-red-500'>
              <ErrorMessage name="email" />
            </div>
          </div>

          <button type="submit" className="bg-orange-400 px-3 py-1.5 self-end">
            {isUpdate ? "Update Contact" : "Add Contact"}
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default AddAndUpdateContact;
