const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

// function listContacts() {
//   fs.readFile(contactsPath)
//     .then((data) => console.log(JSON.parse(data.toString())))
//     .catch((err) => console.log(err.message));
// }

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    console.log(JSON.parse(data));
  } catch {
    console.error(err);
  }
}

// listContacts();

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const parsedData = JSON.parse(data);
    const contactById = await parsedData.find(
      (el) => el.id === contactId.toString()
    );
    console.log(contactById);
  } catch {
    console.error(err);
  }
}

async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const parsedData = JSON.parse(data);
    const filteredData = parsedData.filter(
      (el) => el.id !== contactId.toString()
    );
    console.log(filteredData);
  } catch {
    console.error(err);
  }
}

function addContact(name, email, phone) {
  // ...твій код
}

// console.log(contactsPath);

// module.exports = { listContacts };
module.exports = { listContacts, getContactById, removeContact, addContact };
