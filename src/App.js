import React, { useState } from 'react';
import './App.css';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';

function App() {
  // This is for lifting the state up:
  const [usersList, setUsersList] = useState([]);

  // This function comes from AddUser as props and we here will handle it as
  // event but the real event is goin on in AddUser submit button
  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
