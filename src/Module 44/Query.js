import { useMutation, useQuery } from "react-query";
import getContactsList from "./Api";
import addContact from "./Api";

function QueryApp() {
  const { data, isFetching, refetch } = useQuery({
    queryKey: ["contactsList"],
    queryFn: getContactsList,
  });

  const { mutateAsync } = useMutation({
    mutationFn: (payload) => addContact(payload),
  });

  const addNewContact = async () => {
    const payload = {
      name: "Kostya",
      lastName: "Skywalker",
    };
    try {
      await mutateAsync(payload);
      await refetch();
    } catch (error) {}
  };

  return (
    <div>
      <header>
        <h1>Contact</h1>
      </header>
      <main>
        <ul>
          {isFetching ? (
            <div>Loading...</div>
          ) : (
            data?.map((contact) => (
              <li key={contact.id}>
                <p>
                  {contact.name} {contact.lastName}
                </p>
                <button>Delete</button>
                <button>Edit</button>
              </li>
            ))
          )}
        </ul>
        <button onClick={addNewContact} disabled={isFetching}>
          {isFetching ? "Loading..." : "Add"}
        </button>
      </main>
    </div>
  );
}

export default QueryApp;
