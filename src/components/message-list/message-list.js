import React, { useState, useEffect, useRef, useCallback } from "react";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
// import PropTypes from "prop-types";
import { Message } from "./message";

//jss
const useStyles =  makeStyles((ctx) => {
    return {
        input: {
            color: "#9a9fa1",
            padding: "10px 15px",
            fontSize: "15px",
        },
        icon: {
            color: "#2b5278",
        },
    };
});

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
      <div>
        {message.map((message, index) => 
          <Message key={index} message={message} />
          )}
          <Input
              className={s.input}
              fullWidth
              placeholder="Введите сообщение..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyPress={handleEnter}
              endAdornment={
                  <InputAdornment position="end">
                      {value && <Send onClick={sendMessage} className={s.icon} />}
                  </InputAdornment>
              }
          />
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