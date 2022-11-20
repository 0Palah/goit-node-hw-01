const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const parsedData = JSON.parse(data);
    console.log(parsedData);
    return parsedData;
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
    if (!!contactById) {
      console.log(contactById);
      return contactById;
    } else {
      console.log(`Contact with id:${contactId} not found!!!`);
      return contactById;
    }
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
    await fs.writeFile(contactsPath, filteredData, "utf8");
  } catch (err) {
    console.error(err);
  }
}

// async function addContact(name, email, phone) {
async function addContact() {
  try {
    const [, , name, email, phone] = process.argv;
    const newContact = {
      id: uuidv4(),
      name,
      email,
      phone,
    };
    const data = await fs.readFile(contactsPath, "utf8");
    const parsedData = JSON.parse(data);
    const total = parsedData.push(newContact);
    console.log(parsedData);
    await fs.writeFile(contactsPath, JSON.stringify(parsedData), "utf8");
  } catch (err) {
    console.error(err);
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
