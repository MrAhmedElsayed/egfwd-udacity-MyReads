import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardBackspaceSharpIcon from '@mui/icons-material/KeyboardBackspaceSharp';

export default function SearchView() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 450, marginTop: 7 }}
    >
      <IconButton href='/' sx={{ p: '10px' }} aria-label="menu">
        <KeyboardBackspaceSharpIcon />
      </IconButton>

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="search Book title, author, ISBN"
        inputProps={{ 'aria-label': 'search Book title, author, ISBN' }}
      />
      
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
