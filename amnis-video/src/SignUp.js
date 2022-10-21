import {Button, Grid, Paper, Link, TextField, Typography} from "@mui/material";
import React, { useState } from "react";
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

const SignUp = () => {

    const paperStyle = {padding :20, height: `auto`, width:340, margin: "40px auto"};
    const buttonStyle= {margin: "8px 0"};

    const [email, setEmail ] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userNameError, setUserNameError] = useState(false);
    const [emailError, setEmailError ] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordErrorText, setConfirmPasswordErrorText] = useState('');
    const [passwordErrorText, setPasswordErrorText] = useState('');
    const [userNameErrorText, setUserNameErrorText] = useState('');
    var regExPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&?])(?=.{6,10})");
   
    const handleSubmit = (e) => {
        e.preventDefault();
        setPasswordError(false);
        setEmailError(false);
        setConfirmPasswordError(false);
        setConfirmPasswordErrorText('');
        setPasswordErrorText('');
        setUserNameError(false);
        setUserNameErrorText('');
        
        if(userName.charAt(0)==="_" ||userName.charAt(0)=== "-" )
        {
            setUserNameError(true);
            setUserNameErrorText("Invalid Entry")
        }
        if(!regExPassword.test(password)){
            setPasswordError(true);
            setPasswordErrorText("Password must include a lowercase letter, uppercase later, special character and a number");
        }   
        if (password !== confirmPassword){
            setConfirmPasswordError(true);
            setConfirmPasswordErrorText("Passwords doesnt match");
        }       
    }
    

    return (  
        <div className="Login">
            <Grid>
                    <Paper  style = {paperStyle}>  
                        <Grid align ="center" >                       
                            <h2 >Sign Up</h2>                        
                        </Grid>
                        <form  onSubmit = {handleSubmit}>
                            <Typography variation = "caption"> Please fill out form to create an account</Typography>
                            <TextField onChange ={(e) => setUserName(e.target.value)} label = "Username" variant = "standard" placeholder = "Enter username" fullWidth helperText = {userNameErrorText} required error = {userNameError}/>
                            <TextField onChange ={(e) => setEmail(e.target.value)} label = "Email" variant = "standard" placeholder = "Enter email" type = "Email" fullWidth required error = {emailError}/>
                            <TextField onChange ={(e) => setPassword(e.target.value)} label = "Password" variant = "standard" placeholder = "Enter passoword" type = "password"  helperText = {passwordErrorText} fullWidth required error = {passwordError}/>
                            <TextField onChange ={(e) => setConfirmPassword(e.target.value)} label = "Confirm Password" variant = "standard" placeholder = "Confirm password" type = "password" helperText = {confirmPasswordErrorText} fullWidth required error = {confirmPasswordError}/>

                            <Button type ='submit' 
                            variant = "contained"  
                            color = "primary" 
                            fullWidth sx ={{ textTransform: 'none' }}
                            style = {buttonStyle}>
                                Sign up
                            </Button>
                        </form>
                        
                    </Paper>
                
            </Grid>
        </div>
    );
}
 
export default SignUp;