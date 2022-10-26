import {Button, Grid, Paper, Link, TextField, Typography} from "@mui/material";
import React, { useState } from "react";
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import useFetch from "../UseFiles/useFetch";

const Login = () => {

    const paperStyle = {padding :20, height: `auto`, width:340, margin: "40px auto"}
    const buttonStyle= {margin: "8px 0"}
    const {data: user, isPending, error} = useFetch("http://localhost:8000/userInfo");
    const [userNamez, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit  = (e) =>{
        e.preventDefault();
        { isPending && <div>Loading...</div> }
        { error && <div>{ error } </div>}

    }

    return (  
        <div className="Login">
            <Grid>
                    <Paper  style = {paperStyle}>  
                        <Grid align ="center" >                       
                            <h2 >Sign In</h2>                        
                        </Grid>
                            <form  onSubmit = {handleSubmit}>
                                <TextField onChange ={(e) => setUserName(e.target.value)}  label = "Username" variant = "standard" placeholder = "Enter username" fullWidth required/>
                                <TextField onChange ={(e) => setPassword(e.target.value)} label = "Password" variant = "standard" placeholder = "Enter password" type = "password" fullWidth required/>
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
                            </form>
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