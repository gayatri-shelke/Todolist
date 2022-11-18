


import React,{useState} from 'react'
import { Grid, Paper, Avatar, Typography, TextField} from '@material-ui/core'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Badge from '@mui/material/Badge';

import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
function Todolist(){
const [open, setOpen] = React.useState(false);
const [success,setsuccess]=useState()
const [val,setVal]=useState([]);
   const handleAdd=()=>{
       const abc=[...val,[]]
       setVal(abc)
   }
   const handleChange=(onChangeValue,i)=>{
    const inputdata=[...val]
    inputdata[i]=onChangeValue.target.value;
    setVal(inputdata)
   }
   const handleDelete=(i)=>{
       const deletVal=[...val]
       deletVal.splice(i,1)
       setVal(deletVal)  
   }

   

  

   const headerStyle = { margin: 0 }
   const paperStyle = { padding: '30px 20px', width: 500, margin: "20px auto" }
   const avatarStyle = { backgroundColor: '#1bbd7e' }

return(
    <Grid>
    <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                    </Avatar>
                </Grid>
    <h2 style={headerStyle}>Todo List</h2>
    <Typography variant='h6' gutterBottom>Add your List Here</Typography>
    <Button onClick={()=>handleAdd()}>Add</Button>

        {val.map((data,i)=>{
            return(
               <div>
                    <TextField fullWidth  value={data} placeholder="Add a items" onChange={e=>handleChange(e,i)}/>
                    <Button variant='contained' sx={{ borderColor:'red' ,ml:'220px',mt:-8}} onClick={()=>handleAdd()}>Add</Button>

                    <Button   variant='contained'
                    sx={{ borderColor:'red' ,ml:'400px',mt:-13}} onClick={()=>handleDelete(i)} >Delete</Button>
                    
               </div>
            )
        })}
        </Paper>

    </Grid>
    
);
}
export default Todolist;