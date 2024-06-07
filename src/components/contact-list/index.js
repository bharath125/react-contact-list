import React, { useState } from "react";

import {
  Heading,
  Form,
  ContactListBg,
  UnorderList,
  EachListItem,
  CustomButton,
  Tally,
  CustomInput,
  FormItem,
  CustomLabel,
  CustomSelect,
} from "./styledComponent";

const ContactList = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: "John Doe", gender: "Male", type: "Business" },
    { id: 2, name: "Jane Smith", gender: "Female", type: "Personal" },
    { id: 3, name: "Alex Johnson", gender: "Male", type: "Business" },
  ]);

  const [newContact, setNewContact] = useState({
    name: "",
    gender: "",
    type: "",
  });

  const addContact = () => {
    if (newContact.name && newContact.gender && newContact.type) {
      setContacts([...contacts, { ...newContact, id: contacts.length + 1 }]);
      setNewContact({ name: "", gender: "", type: "" });
    }
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const maleCount = contacts.filter(
    (contact) => contact.gender === "Male"
  ).length;
  const femaleCount = contacts.filter(
    (contact) => contact.gender === "Female"
  ).length;
  const businessCount = contacts.filter(
    (contact) => contact.type === "Business"
  ).length;
  const personalCount = contacts.filter(
    (contact) => contact.type === "Personal"
  ).length;

  return (
    <ContactListBg>
      <Heading>Add Contact</Heading>
      <Form>
        <FormItem>
          <CustomLabel>Name </CustomLabel>
          <CustomInput
            type="text"
            name="name"
            value={newContact.name}
            onChange={handleChange}
          />
        </FormItem>
        <FormItem>
          <CustomLabel>Gender </CustomLabel>
          <CustomSelect
            name="gender"
            value={newContact.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </CustomSelect>
        </FormItem>
        <FormItem>
          <CustomLabel>Type </CustomLabel>
          <CustomSelect
            name="type"
            value={newContact.type}
            onChange={handleChange}
          >
            <option value="">Select Type</option>
            <option value="Business">Business</option>
            <option value="Personal">Personal</option>
          </CustomSelect>
        </FormItem>
        <div>
          <CustomButton onClick={addContact}>Add Contact</CustomButton>
        </div>
      </Form>

      <h2>Contact List</h2>
      <UnorderList>
        {contacts.map((contact) => (
          <EachListItem key={contact.id}>
            {contact.name} - {contact.type}
            <CustomButton onClick={() => deleteContact(contact.id)}>
              Delete
            </CustomButton>
          </EachListItem>
        ))}
      </UnorderList>

      <h2>Contact Stats</h2>
      <Tally>Male Contacts: {maleCount}</Tally>
      <Tally>Female Contacts: {femaleCount}</Tally>
      <Tally>Business Contacts: {businessCount}</Tally>
      <Tally>Personal Contacts: {personalCount}</Tally>
    </ContactListBg>
  );
};

export default ContactList;
