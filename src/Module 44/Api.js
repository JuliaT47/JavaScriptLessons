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

export default getContactsList;
export { addContact };

