import { AppBar, Container, Grid, Icon, Typography } from '@material-ui/core'
import { Stack } from '@mui/material'
import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import './Footer.css'

function Footer() {
    return (
        <div className="mainFooter">
            <Container maxWidth='lg' >
            <Grid container  sx={{ flexGrow: 1 }} className='footer' spacing={8}>
                <Grid  item xs={3}>
                    <Typography  className='title' >TRENDING LOCATIONS</Typography>
                    <Typography className='list-items' >Bhubaneshwar</Typography>
                    <Typography className='list-items' >Hyderabadh</Typography>
                    <Typography className='list-items' >Chandigarh</Typography>
                    <Typography className='list-items' >Nashik</Typography>
                </Grid>
                <Grid item xs={3}>
                   <Typography  className='title' >ABOUT US</Typography>
                   <Typography className='list-items' >About OLX Group</Typography>
                   <Typography className='list-items' >Contact Us</Typography>
                   <Typography className='list-items' >OLX People</Typography>
                   <Typography className='list-items' >Waah Jobs</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography  className='title' >OLX</Typography>
                    <Typography className='list-items' >Help</Typography>
                    <Typography className='list-items' >Sitemap</Typography>
                    <Typography className='list-items' >Legal & Privacy information</Typography>
                </Grid>
                <Grid item xs={3} className='logos' >
                    <Typography className='title' >FOLLOW US</Typography>
                    <FacebookOutlinedIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                    <PlayCircleOutlineIcon />
                   
                    <Grid item  xs={3} className='playstore' >
                       <div>
                       <img className='play-store' alt="google" src='https://lh3.googleusercontent.com/cjsqrWQKJQp9RFO7-hJ9AfpKzbUb_Y84vXfjlP0iRHBvladwAfXih984olktDhPnFqyZ0nu9A5jvFwOEQPXzv7hr3ce3QVsLN8kQ2Ao=s0' />
                       </div>

                       <div>
                       <img className='app-store' alt="apple" src='https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg' />
                           </div>
                   
                    
                     </Grid>
                    </Grid>
                   
                   
            </Grid>
          
           </Container>
           <Grid container justifyContent='space-around' className='bottom-container' >
               <Grid item>
               <strong className='other'>Other Countries  </strong>
               <span>Pakistan - South Africa - Indonesia</span>
               </Grid>
               <Grid item>
                   <strong>Free Classifieds in India </strong>
                   <span>. © 2006-2021 OLX</span>
                   </Grid>
           </Grid>
        </div>
    )
}

export default Footer
