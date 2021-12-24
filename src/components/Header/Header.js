import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import OlxLogo from '../../assests/OlxLogo';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './Header.css'
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import { useContext } from 'react';
import { AuthContext, FirebaseContext } from '../../store/Context';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const location = [
    { label: 'Delhi' },
    { label: 'Chennai' },
    { label: 'Mumbai' },
    { label: 'Banglore' },
    { label: "Hydrabadh" },
    { label: 'Kolkata' },
 
  
   
  ];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Header() {
 
 const navigate = useNavigate()
 const {user} = useContext(AuthContext)
 const {firebase} = useContext(FirebaseContext)

 const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    
      <div  style={{position:'fixed'}}>
      <AppBar sx={{backgroundColor:'#eeeeee', color:'#000'}}>
        <Toolbar>
            
         <Grid container justifyContent="center" alignItems="center" spacing={5} >
           <Grid item>
          <Typography
            variant="h6"
            noWrap
            component="div"
            // sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <OlxLogo onClick={()=> navigate("/")} style={{cursor:"pointer"}}/>
          </Typography> 
          </Grid>
          <Grid item>
          <Autocomplete className='location'
      disablePortal
      id="combo-box-demo"
      options={location}
      sx={{ width: 200, display: { xs: 'none', md: 'none', sm: 'none', lg: 'block' } }}
      renderInput={(params) => <TextField {...params} label="Location" />}
    />
    </Grid>
    <Grid item>
          <Search sx={{width: 200, display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' }}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Grid>
        
       
          <Grid item>
          
          
          <Typography variant='p' sx={{display: { xs: 'none', md: 'block', sm: 'none' }}}>
              English
          </Typography>
          
          </Grid>
          <Grid item>
          
          <Typography sx={{display: { xs: 'none', md: 'block', sm: 'block' } }}>
           {/* {user ? user.displayName : "Login"} */}
           {user ? 
            <Button
            className='loginBtn'
            id="demo-positioned-button"
            aria-controls="demo-positioned-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            
            {user.displayName}
          </Button>
          
           : <Button onClick={()=>navigate('/login')} >Login</Button> }
          </Typography>
          
          </Grid>
          {/* {user && <span onClick={()=>{
            firebase.auth().signOut();
            navigate('/login')
          }} >Logout</span>} */}
          <Grid item>
          <Stack>
      <Button className='sellBtn' onClick={()=>{navigate('/create')}} variant="contained" startIcon={<AddIcon />} sx={{background: 'linear-gradient(to left bottom, #00E5FF ,#FFEB3B )', border:2, borderRadius:6}} >
        Sell
      </Button>
    </Stack>
    </Grid>
    </Grid>
        </Toolbar>
      </AppBar>
      <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={()=>{
            firebase.auth().signOut();
            navigate('/login')
          }}>Logout</MenuItem>
          </Menu>
      </div>
     
  );
}
