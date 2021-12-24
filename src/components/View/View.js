import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@mui/material'
import React, {useEffect, useState, useContext} from 'react'
import { FirebaseContext } from '../../store/Context'
import { PostContext } from '../../store/PostContext'
import './View.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'


function View() {

    const [userDetails, setUserDetails] = useState()
    const {postDetails} = useContext(PostContext)
    const navigate = useNavigate();
    const {firebase} = useContext(FirebaseContext)
    useEffect(()=>{
        const {userId} = postDetails
        firebase.firestore().collection('users').where('id', '==', userId).get().then((res) => {
            res.forEach(doc => {
                setUserDetails(doc.data())
            })
        })
    }, [])

    return (

        <div className='viewParentDiv'>
            <Grid className='imageShow' >
              
            <img src={postDetails.url} alt='post'/>
          

            </Grid>
            
            <Grid className="details">
                <Grid className="productDetails" >
                <Grid >
                <Typography variant='h3' >Product Details</Typography>
               
                <Typography className='product-price' > &#x20B9; {postDetails.price} </Typography>
                <Typography className='product-name' >{postDetails.name}</Typography>
                <Typography className='product-category' >{postDetails.category}</Typography>
                <Button variant="contained" size="medium" onClick={() => navigate("/")}> Back </Button>
                </Grid>
                </Grid>
                <Grid  className="sellerDetails">
                { userDetails && 
                <Grid  >
                <Typography variant='h3' >Seller Details</Typography>
                <Typography className='user-name' >{userDetails.username}</Typography>
                <Typography className='user-phone' >{userDetails.phone}</Typography>
            </Grid>
            }
            </Grid>
            </Grid>
            
            
        </div>
    )
}

export default View
