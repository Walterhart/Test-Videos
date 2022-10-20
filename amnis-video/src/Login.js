import {Button, Grid, Paper, Link, TextField, Typography} from "@mui/material";
import React from "react";
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

const Login = () => {

    const paperStyle = {padding :20, height: `auto`, width:340, margin: "40px auto"}
    const buttonStyle= {margin: "8px 0"}
    return (  
        <div className="Login">
            <Grid>
                    <Paper elevation = {25} style = {paperStyle}>  
                        <Grid align ="center" >                       
                            <h2 >Sign In</h2>                        
                        </Grid>
                        <TextField label = "Username" variant = "standard" placeholder = "Enter username" fullWidth required/>
                        <TextField label = "Password" variant = "standard" placeholder = "Enter password" type = "password" fullWidth required/>
                        <FormControlLabel
                        control = {
                            <Checkbox 
                            name = "checkedB"
                            color = "primary"
                            />
                        }
                        label = "Remember me"
                        />
                        <Button type ='submit' 
                         variant = "contained"  
                         color = "primary" 
                         fullWidth sx ={{ textTransform: 'none' }}
                         style = {buttonStyle}>
                            Sign in
                        </Button>
                        <Typography>
                            <Link to ='#' sx= {{textDecoration:"none"}}>
                                    Forgot password 
                            </Link>
                        </Typography>
                        <Typography>
                            No account? 
                            <Link to ='#' sx= {{textDecoration:"none", m: 0.5 }}>
                                    Sign up
                            </Link>
                        </Typography>
                    </Paper>
                
            </Grid>
        </div>
    );
}
 
export default Login;