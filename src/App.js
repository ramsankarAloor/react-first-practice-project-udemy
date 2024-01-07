import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, age) => {
    setUsersList((prevList) => [
      ...prevList,
      { username, age, id: Math.random().toString() },
    ]); // as current state depends on the earlier value of the state we need to use a callback, where the argument will be the previous state by default.
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
