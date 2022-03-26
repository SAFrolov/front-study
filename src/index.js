import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider, createTheme} from '@mui/material'
import { MessageList } from './components';

const light = createTheme({
  theme: {
    color: "red"
  }
})

ReactDOM.render(
  <ThemeProvider theme={light.theme}>
    <MessageList />
  </ThemeProvider>,
  document.getElementById('root')
);