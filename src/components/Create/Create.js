import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Create.css'
import { useState } from 'react';
import { FirebaseContext, AuthContext } from '../../store/Context';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'
import CircularProgress from '@mui/material/CircularProgress';
const theme = createTheme();

export default function Create() {
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
 const [name, setName] = useState('')
 const [category, setCategory] = useState('')
 const [price, setPrice] = useState('')
 const [image, setImage] = useState(null)
 const navigate = useNavigate()
 const [loading, setLoading] =useState(false)
 const date = new Date()
 
 const handleSubmit = ()=>{
  setLoading(true)
     firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
       ref.getDownloadURL().then((url)=>{
         console.log(url);
         let userId = user.uid
         let  createdAt = date.toDateString()
         firebase.firestore().collection('products').add({
           name,
           category,
           price,
           url,
           userId,
           createdAt
         })
         console.log(createdAt)
         setLoading(false)
         navigate('/')
       }).catch((error)=>{
        Swal.fire({
          title: 'Posting Error!',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'Login Again',
        }).then((result)=>{
          console.log(result)
          if(result.isConfirmed) setLoading(false)
        })
       })
     }).catch((error)=>{
      Swal.fire({
        title: 'Posting Error!',
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
      <Container component="main" maxWidth="xs">
         
        <CssBaseline />
        <Box className='create-product'
          sx={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
               
          }}
        >
         
          <Box className="create-box"  noValidate sx={{ mt: 1 }}>
          <img src="https://sokodirectory.com/wp-content/uploads/2015/11/OLX-Kenya.png"  alt="olxLogo"/>
              <Typography variant='h6'>Sell Product</Typography>
              {loading && <CircularProgress />}
              
          <TextField  style={{marginBottom: '20px'}} value={name} onChange={(e)=>setName(e.target.value)} id="standard-basic" fullWidth label="Product Name" variant="standard" />
           
          <TextField style={{marginBottom: '20px'}} value={category} onChange={(e)=>setCategory(e.target.value)} id="standard-basic" fullWidth label="Category" variant="standard" />
          <TextField style={{marginBottom: '20px'}} value={price} onChange={(e)=>setPrice(e.target.value)} id="standard-basic" fullWidth label="Price" variant="standard" type='text' />
         
         <div className='uploadSection'>
         {image? (
           
         <img alt="Posts" width="200px" height="200px" src={ URL.createObjectURL(image)}></img>
        ) :  (
          <>
            <span className="fa-stack fa-2x mt-3 mb-2" style={{cursor:"pointer"}}>
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fas fa-store fa-stack-1x fa-inverse" />
            </span>
          </>
        )}
      <input
        type="file"
        id="standard-basic"
        onChange={(e)=>setImage(e.target.files[0])}
      />
         <p>Upload Image</p>
         </div>
       
            <button style={{margin: '20px'}}
              onClick={handleSubmit}
            >
              Submit
            </button>
           
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}
