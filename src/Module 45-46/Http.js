import React, { useEffect, useState } from "react";
import useFetch from "./UseFetch";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030/";

function HttpReq() {
  const [data, setData] = useState([]);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const { data: contacts, isLoading, error } = useFetch("contacts");

  useEffect(() => {
    if (contacts) {
      setTimeout(() => {
        setData(contacts);
      }, 2000);
    }
  }, [contacts]);

  const addContact = async () => {
    setIsPostLoading(true);
    const payload = { name: "Kostya", lastName: "Skywalker"};
    const response = await axios.post("contacts", payload);
    setData((prev) => [...prev, response.data]);
    setIsPostLoading(false);
  };

  const deleteContact = async (id) => {
    await axios.delete(`contacts/${id}`);
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const editContact = async (id) => {
    const payload = { name: "Julia", lastName: "Skywalker" };
    const response = await axios.put(`contacts/${id}`, payload);
    setData((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return response.data;
        }
        return item;
      })
    );
  };

  if (error) {
    return <div>Something went wrong: {error}</div>;
  }

  return (
    <div>
      <header>
        <h1>Contacts</h1>
      </header>
      <main>
        <ul>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            data?.map((contact) => (
              <li key={contact.id}>
                <p>
                  {contact.name} {contact.lastName}
                </p>
                <button onClick={() => deleteContact(contact.id)}>
                  Delete
                </button>
                <button onClick={() => editContact(contact.id)}>Edit</button>
              </li>
            ))
          )}
        </ul>
        <button disabled={isPostLoading} onClick={addContact}>
          {isPostLoading ? "loading..." : "Add"}Add
        </button>
      </main>
    </div>
  );
}

export default HttpReq;
