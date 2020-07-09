import React, { useContext, useState, useReducer } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useStateValue } from "./context/message-context";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function DisplayMessage() {
  const classes = useStyles();

  function getMessage() {
    const url = "http://localhost:8009/message";
    axios.get(url)
    .then(
        response => {
            console.log(response);
            dispatch({
                type: "getMessage",
                data: response.data
            });
        }
    )   
  }

  const [{ message }, dispatch] = useStateValue();

  return (

        <div className={classes.root}>
        <Button onClick={getMessage}>Click me</Button>
        
        <Button variant="contained" color="primary">
            {message}
        </Button>
        
        </div>
  
  );
}
