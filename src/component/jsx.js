import React,{useState} from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import Deleteprops from './Deleteprops'

const Signup = () => {
    const [item,setItems]=useState('')
    const [newitem,setNewItem]=useState([])
    const itemEvent=(event)=>{
        setItems(event.target.value  )
    }
    const listOfItems=()=>{
        setNewItem((prevValue) =>{
            return [...prevValue,item]
        })
        setItems('')
    }
    const deleteItems=(id)=>{
        console.log('delete>>>>>>>>>>>>');
        setItems((oldItems)=>{
            return oldItems.filter((arrElement,index)=>{
                return index!==id;
                
            })
        })
      }
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                    </Avatar>
                    <h2 style={headerStyle}>Todo List</h2>
                    <Typography variant='caption' gutterBottom>Add Your List Here</Typography>
                </Grid>
                <form>
                    <TextField fullWidth  value={item} placeholder="Enter your name" onChange={itemEvent}/>
                    <Button className='newBtn' onClick={listOfItems}>Add</Button>
                    <br/>
                    <ol>
                    {newitem.map((val,index)=>{
                        return <Deleteprops key={index} 
                        id={index}
                        text={val}
                        onselect={deleteItems}/>
                    })}
                    
                    </ol>
                   
                   
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;


// import React from 'react'
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import DeleteIcon from '@material-ui/icons/Delete';
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import { Button } from 'bootstrap';
// import Button from '@mui/material/Button';

// export default function Deleteprops(props) {
  
//   return (
// <div className='todo_style'>
// <Button color="primary" onClick={()=>{
//   props.onSelect(props.id)
// }}>Secondary</Button>

// <li>{props.text}</li>
// </div> 
// )
// }
