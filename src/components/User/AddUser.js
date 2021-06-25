import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = () => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor='username'>Username</label>
        <input type='text' />
        <label htmlFor='age'>Age (In Years)</label>
        <input type='text' />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
