import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './LogIn.css'
import { useState, useContext } from 'react';
import { FirebaseContext } from '../../store/Context';
import { makeStyles } from '@material-ui/core';
import Swal from 'sweetalert2'
import CircularProgress from '@mui/material/CircularProgress';
const theme = createTheme();

const useStyles = makeStyles({
  flexGrow: {
    flex: '1',
  },
  button: {
    '&:hover': {
      backgroundColor: '#blue',
      color: '#ffff',
      border: "1px 	#008080 solid"
  },
}})
export default function LogIn() {
  const classes = useStyles();
  const [loading, setLoading]=useState(false)
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)

  const handleLogin = (e) => {
    setLoading(true)
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
      navigate('/')
    }).catch((error)=>{
      Swal.fire({
        title: 'Login Error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Login Again',
      }).then((result)=>{
        console.log(result)
        if(result.isConfirmed) setLoading(false)
      })
    })
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" sx={{padding:10}} maxWidth="xs">
        <CssBaseline />
        <Box className='login-border'
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
               
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            
          </Avatar> */}
          <img alt="logoolx"  src="https://cdn.freelogovectors.net/wp-content/uploads/2021/08/olx-logo.png" />
          <Typography component="h1" variant="h5">
            LOG IN
          </Typography>
          {loading &&  <CircularProgress />} 
          <form component="form" onSubmit={handleLogin}  sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
            <Button className={classes.button}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2}}
            >
              Sign In
            </Button>
            <Grid  container>
             
              <Grid item>
                <Link onClick={()=>{navigate('/signup')}} sx={{cursor:'pointer'}} variant="body2">
                  {"Don't you have an Account? SignUp"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}