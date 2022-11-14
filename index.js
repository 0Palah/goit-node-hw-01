// const fs = require("fs").promises;
const path = require("path");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts.js");

const contactsPath = path.resolve("./db/contacts.json");

const greeting = "Hello world!!!";

console.log(greeting);
console.log(contactsPath);
console.log(listContacts());
