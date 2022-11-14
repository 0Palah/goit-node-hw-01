const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  console.log(123);
  fs.readFile(contactsPath)
    .then((data) => console.log(JSON.parse(data.toString())))
    .catch((err) => console.log(err.message));
  console.log(321);
}
// async function listContacts() {
//   try {
//     const data = await fs.readFile(contactsPath, "utf8");
//     console.log(JSON.parse(data));
//   } catch {
//     console.error(err);
//   }
// }

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
