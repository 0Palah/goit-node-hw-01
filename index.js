// const fs = require("fs").promises;
const path = require("path");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts.js");

// const contactsPath = path.resolve("./db/contacts.json");

const greeting = "Hello world!!!";

// console.log(greeting);
// console.log(__filename);
// console.log(contactsPath);
// console.log(listContacts());
// listContacts();
// removeContact("202f6b42-fd77-4d04-8691-4c88df149912");
// getContactById(9);
addContact();
