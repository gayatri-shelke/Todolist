
import React,{useState} from 'react'

import { Grid, Paper, Avatar, Typography, TextField, } from '@material-ui/core'
// import Deleteprops from './Deleteprops'
import Button from '@mui/material/Button';

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
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: 'green' }
    const marginTop = { marginTop: 5 }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                    </Avatar>
                    <h2 style={headerStyle}>Todo List</h2>
                </Grid>
                <form>
                    <TextField fullWidth  value={item} placeholder="Add a items" onChange={itemEvent}/>
                    <Button  onClick={listOfItems}>Add</Button>
                    <br/>
                    <ol>
                    {newitem.map((val)=>{
                        // return <Deleteprops text={val}/>
                        return <li>{val}</li>
                    })}
                    
                    </ol>
                   
                   
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;
