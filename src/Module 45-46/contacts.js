import { useMutation, useQuery } from "react-query";
import { useContext, useState } from "react";
import { addContact, deleteContact, getContactsList } from "./Api";
import { useLocation, useNavigate } from "react-router";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { data: contactList, isFetching } = useQuery(
    ["contactList"],
    getContactsList,
    {
      onSuccess: (data) => {
        setContacts(data);
      },
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );

  const { mutateAsync: handleAdd } = useMutation(addContact, {
    onSuccess: (data) => {
      setContacts((prev) => [...prev, data]);
    },
  });

  const { mutateAsync: handleDelete } = useMutation(deleteContact, {
    onSuccess: (_, id) => {
      setContacts((prev) => prev.filter((item) => item.id !== id));
    },
  });

  const addNewContact = async () => {
    const payload = {
      name: "Luke",
      lastName: "Skywalker",
    };

    await handleAdd(payload);
  };

  const deleteSpecificContact = async (id) => {
    await handleDelete(id);
  };

  return (
    <>
      <h1>Contacts</h1>
      <button onClick={() => navigate(-1)}>Get back</button>
      {isFetching ? (
        "Loading..."
      ) : (
        <ul>
          {contacts?.map((contact) => (
            <li key={contact.id}>
              <p>{`${contact.name} ${contact.lastName}`}</p>
              <button onClick={() => deleteSpecificContact(contact.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={addNewContact}>Add new contact</button>
    </>
  );
};

export default Contact;
