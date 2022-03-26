import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import ReactDOM from "react-dom";
import { MessageList } from "./components";

const light = createTheme({
  theme: {
      color: "#fff",
  }
})

ReactDOM.render(
  <ThemeProvider theme={light}>
    <MessageList />
  </ThemeProvider>,
  document.getElementById('root')
);