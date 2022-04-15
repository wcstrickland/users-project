import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Divider from '@mui/material/Divider';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function InsetDividers(props) {

  const [data, setData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setData(response.data)
        setLoading(false)
      })
      .catch(function (error) {
        setError(error)
      })
  }, [])


  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      {loading ? "Loading..." : data.map(u => <><ListItem onClick={() => props.selectUser(u.id)}><ListItemAvatar><Avatar><ImageIcon /></Avatar></ListItemAvatar><ListItemText primary={u.name} secondary={u.email} /></ListItem><Divider variant="inset" component="li" /></>)}
    </List>
  );
}

