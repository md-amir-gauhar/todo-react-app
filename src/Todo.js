import React, { useState } from 'react'
import { List, ListItem, ListItemText, ListItemAvatar, Button, Modal, Input } from '@material-ui/core';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import './Todo.css';
import db from './firebase'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo({todo}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState()

  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo = () => {
    // update the todo with the new input text
    db.collection('todos').doc(todo.id).set({
      todo: input
    }, {merge: true})
    setOpen(false)
  }

  return (
    <>
    <Modal
      open={open}
      onClose={e => setOpen(false)}
      >
        <div className={classes.paper}>
          <h1>I am a modal</h1>
          <Input placeholder={todo.todo} value={input} onChange={e => setInput(e.target.value)} />
          <Button onClick={updateTodo}>Update Todo</Button>
        </div>
      </Modal>
    <List className='todo-list'>
      <ListItem>
      <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={todo.todo} secondary='Dummy deadline ⏰' />
      </ListItem>
      <button onClick={e => setOpen(true)}>Edit</button>
      <DeleteForeverSharpIcon onClick={e => db.collection('todos').doc(todo.id).delete()} />
    </List>
    </>
  )
}

export default Todo
