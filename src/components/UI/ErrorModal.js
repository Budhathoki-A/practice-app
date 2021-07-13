import React from 'react';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onChange} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
        <div className={classes.content}>
          <p>{props.message}</p>
          <footer className={classes.actions}>
            <Button onClick={props.onChange}>Okay</Button>
          </footer>
        </div>
      </header>
    </Card>
  );
};

const ErrorModal = (props) => {
  return <React.Fragment></React.Fragment>;
};

export default ErrorModal;
