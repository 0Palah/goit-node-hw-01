const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    console.log(JSON.parse(data));
  } catch {
    console.error(err);
  }
}

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

// console.log(contactsPath);

// module.exports = { listContacts };
module.exports = { listContacts, getContactById, removeContact, addContact };
