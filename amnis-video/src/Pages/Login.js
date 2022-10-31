import {Button, Grid, Paper, Link, TextField, Typography} from "@mui/material";
import React, {  useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { supabase } from "../config/supabaseClient";
import { useHistory} from "react-router-dom";


const Login = () => {

    const paperStyle = {padding :20, height: `auto`, width:340, margin: "40px auto"}
    const buttonStyle= {margin: "8px 0"};
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit  = async (e) =>{
        e.preventDefault();
        let { error } = await supabase.auth.signInWithPassword({
            email: userName,
            password: password               
          })
          if (error)
          {
              console.log("Error logging in")
              return
          }
          history.push('/')
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