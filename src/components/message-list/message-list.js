import React, {useEffect, useState } from 'react';
import { Input, Button } from '@mui/material';
import styles from './message-list.module.css';
import { createStyles, makeStyles } from '@mui/styles'
// import PropTypes from 'prop-types';
import { Message } from './message';

//jss
const useStyles = makeStyles(() => {
    return {
        input: {
            color: "red",
            padding: "10px 15px",
            fontSize: "15px"
        }
    }
})

export const MessageList = () => {

    const s = useStyles();
    const[message, setMessage] = useState([]);
    const[value, setValue] = useState();
  
    const sendMessage = () => {
        if (value) {
            setMessage([...message, {authter: "User", message: value}])
            setValue("")
        }
    }

    const handleEnter = ({code}) => {
        if (code === "Enter") {
            setMessage([...message, {authter: "User", message: value}])
            setValue("")
        }
    }
  
    useEffect(() => {
      const lastMessage = message[message.length - 1]
      if(message.length && lastMessage.authter === "User") {
        setMessage([...message, {authter: "Bot", message: "Hello from bot"}])
      }
    }, 
    [message])
  
    return (
      <div className={styles.wrapper}>
        {message.map((message, index) => 
          <Message key={index} message={message} />
          )}
          <input
              className={s.input}
              placeholder='message'
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyPress={handleEnter}
          />
          <button onClick={sendMessage}>send message</button>
      </div>
    )
  };
  
  // MessageList.propTypes = {
  //   test1: PropTypes.number.isRequired,
  //   test2: PropTypes.array.isRequired,
  //   test3: PropTypes.bool.isRequired,
  //   test4: PropTypes.shape({
  //     id: PropTypes.bool.isRequired
  //   })
  // };