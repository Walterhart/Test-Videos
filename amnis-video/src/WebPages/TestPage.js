import {Button, Grid, Paper, Link, TextField, Typography} from "@mui/material";
import React, { useState, useEffect } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import useFetch from "../UseFiles/useFetch";


const TestPage = () => {
    const paperStyle = {padding :20, height: `auto`, width:340, margin: "40px auto"}
    const buttonStyle= {margin: "8px 0"}
    const {data: users, isPending, error} = useFetch("http://localhost:8000/userInfo");
    const [user, setUser] = useState();
    const [userNameInput, setUserName] = useState('');
    const [passwordInput, setPassword] = useState('');
    const [userError,setUserError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [userErrorText,setUserErrorText] = useState('');
    const [passwordErrorText, setPasswordErrorText] = useState('');

    const handleSubmit  = (e) =>{
        e.preventDefault();
        setUserError(false);
        setUserErrorText('')
        setPasswordError(false);
        setPasswordErrorText('');
    
        
    }

    return (  
        <div className="TestPage">
            
            { isPending && <div>Loading...</div> }
            { error && <div>{ error } </div>}
            <Grid>
                    <Paper  style = {paperStyle}>  
                        <Grid align ="center" >                       
                            <h2 >Sign In</h2>                        
                        </Grid>
                            <form  onSubmit = {handleSubmit}>
                                <TextField onChange ={(e) => setUserName(e.target.value)}  label = "Username" variant = "standard" placeholder = "Enter username" fullWidth required  helperText = {userErrorText} error = {userError}/>
                                <TextField onChange ={(e) => setPassword(e.target.value)} label = "Password" variant = "standard" placeholder = "Enter password" type = "password" fullWidth required helperText = {passwordErrorText} error = {passwordError}/>
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
                            No user? 
                            <Link to ='#' sx= {{textDecoration:"none", m: 0.5 }}>
                                    Sign up
                            </Link>
                        </Typography>
                    </Paper>
                
            </Grid>
        </div>
    );
}
 
export default TestPage;