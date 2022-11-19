const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    console.log(JSON.parse(data));
    return data;
  } catch (err) {
    console.error(err);
  }
}

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const parsedData = JSON.parse(data);
    const contactById = await parsedData.find(
      (el) => el.id === contactId.toString()
    );
    console.log(contactById);
    return contactById;
  } catch (err) {
    console.error(err);
  }
}

async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const parsedData = JSON.parse(data);
    const filteredData = JSON.stringify(
      parsedData.filter((el) => el.id !== contactId.toString())
    );
    // console.log(`filteredData: ${filteredData}`);
    fs.writeFile(contactsPath, filteredData, "utf8");
  } catch (err) {
    console.error(err);
  }
}

// removeContact(6);

async function addContact(name, email, phone) {
  console.log(name);
  console.log(process.argv);
}

// module.exports = { listContacts };
module.exports = { listContacts, getContactById, removeContact, addContact };
