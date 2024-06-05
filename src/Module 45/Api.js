import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030/";

const getContactsList = async () => {
  const contacts = await axios.get("contacts");
  return contacts.data;
};

const addContact = async (payload) => {
  const contacts = await axios.post("contacts", payload);
  return contacts.data;
};

const deleteContact = async (id) => {
  await axios.delete(`contacts/${id}`);
};

const addUser = async (payload) => {
  const contacts = await axios.post("auth", payload);
};

const getAllUsers = async () => {
  const contacts = await axios.get("auth");
  return contacts.data;
};

export { getContactsList, addContact, deleteContact, addUser, getAllUsers };
