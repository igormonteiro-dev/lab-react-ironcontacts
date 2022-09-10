import "./App.css";
import contactList from "./contacts.json";
import React, { useState } from "react";

const First5Contacts = contactList.slice(0, 5);

function App() {
  //[stateValue, updateValue] = useState(initialStateValue)
  const [contacts, setContacts] = useState(First5Contacts);

  const addRandomContact = () => {
    //get random index
    const index = Math.floor(Math.random() * contactList.length);
    const randomContact = contactList[index];
    //push new contact inside the array
    setContacts((prev) => {
      return [...prev, randomContact];
    });
  };

  const sortContacts = (sortingFct) => {
    const sortedContacts = [...contacts].sort(sortingFct);
    setContacts(sortedContacts);
  };

  const deleteContact = (contactId) => {
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== contactId;
    });
    setContacts(filteredContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button
        onClick={() =>
          sortContacts((a, b) => (a.popularity < b.popularity ? 1 : -1))
        }
      >
        Sort by popularity
      </button>
      <button
        onClick={() => sortContacts((a, b) => (a.name > b.name ? 1 : -1))}
      >
        Sort by name
      </button>

      <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contacts) => {
            return (
              <tr key={contacts.id}>
                <td>
                  <img
                    src={contacts.pictureUrl}
                    className="img-thumbnail"
                    style={{ width: "100px", height: "100px" }}
                    alt="actor"
                  ></img>
                </td>
                <td>{contacts.name}</td>
                <td>{contacts.popularity.toFixed(2)}</td>
                <td>{contacts.wonOscar ? "🏆" : ""}</td>
                <td>{contacts.wonEmmy ? "🏆" : ""}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
