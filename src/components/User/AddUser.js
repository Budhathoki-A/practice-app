import React from 'react';

const AddUser = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor='username'>Username</label>
      <input type='text' placeholder='Enter your username here!' />
      <label htmlFor='age'>Age (In Years)</label>
      <input type='text' placeholder='Enter your age (in years) here' />
      <button type='submit'>Register</button>
    </form>
  );
};

export default AddUser;
