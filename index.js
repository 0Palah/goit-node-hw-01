const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

const greeting = "Hello world!!!";
console.log(greeting);
console.log(contactsPath);
