


import React,{useState} from 'react'
import { Grid, Paper, Avatar, Typography, TextField } from '@material-ui/core'
import Deleteprops from './Deleteprops'
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
const Todolist = () => {
    const [item,setItems]=useState('')
    const [newitem,setNewItem]=useState([])
    const [itemCount, setItemCount] = useState(0);
    const [open, setOpen] = React.useState();
    

    const itemEvent=(event)=>{
        setItems(event.target.value  )
    }
    const listOfItems=()=>{
        setOpen(true)
        setItemCount(itemCount+1)
        setNewItem((prevValue) =>{
            return [...prevValue,item]

        })
        setItems('')

    }
    const handleDelete=(id)=>{
      
        const taskCopy=[...newitem]
        taskCopy.splice(id,1)
        setNewItem(taskCopy)
        

    }

    const paperStyle = { padding: '30px 20px', width: 600, margin: "20px auto" }
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
                    <Button variant='contained' sx={{ ml:'430px',mt:-8}} onClick={listOfItems}>Add</Button>
                    
                    <br/>
                    <StyledBadge badgeContent={itemCount} color="secondary" sx={{mr:'-420px',mt:-25}}>
                    <ShoppingCartIcon  />
                    </StyledBadge>
                    <ol>
                    {newitem.map((val,id)=>{
                        return (
                            <React.Fragment>

                            
                        <li>{val}</li>
                        <Button id={id} variant='contained' sx={{ml:'380px',mt:-6,p:1}} onClick={()=>handleDelete(id)} >Delete</Button>
                        <Snackbar open={open} autoHideDuration={6000} >
                        <Alert  severity="success" sx={{ width: '100%' }}>
                        add successfully!
                        </Alert>
                        </Snackbar>
                        
                        </React.Fragment>

                        )
                    })}
                    
                    </ol>
                   
                </form>
            </Paper>
        </Grid>
    )
}

export default Todolist;