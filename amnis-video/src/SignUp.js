import {Button, Grid, Paper, Link, TextField, Typography} from "@mui/material";
import React from "react";
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

const SignUp = () => {

    const paperStyle = {padding :20, height: `auto`, width:340, margin: "40px auto"}
    const buttonStyle= {margin: "8px 0"}
    return (  
        <div className="Login">
            <Grid>
                    <Paper elevation = {25} style = {paperStyle}>  
                        <Grid align ="center" >                       
                            <h2 >Sign Up</h2>                        
                        </Grid>
                        <Typography variation = "caption"> Please fill out form to create an account</Typography>
                        <TextField label = "Username" variant = "standard" placeholder = "Enter username" fullWidth required/>
                        <TextField label = "Email" variant = "standard" placeholder = "Enter email" type = "Email" fullWidth required/>
                        <TextField label = "Password" variant = "standard" placeholder = "Enter passoword" type = "password" fullWidth required/>
                        <TextField label = "Confirm Password" variant = "standard" placeholder = "Confirm password" type = "password" fullWidth required/>

                        <Button type ='submit' 
                         variant = "contained"  
                         color = "primary" 
                         fullWidth sx ={{ textTransform: 'none' }}
                         style = {buttonStyle}>
                            Sign up
                        </Button>
                        
                    </Paper>
                
            </Grid>
        </div>
    );
}
 
export default SignUp;