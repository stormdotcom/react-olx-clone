import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import Stack from '@mui/material/Stack';
import './Banner.css'
import heroBanner from "../../assests/banner.jpg";

function Banner() {
  return (
      <div >
          <Container  maxWidth='md' >
    <Grid container className='main'>
       
      <Stack className='suggestions' justifyContent='center' direction="row" spacing={2}  sx={{ display: { md: 'none', sm: 'none', xs: 'none', lg:'block' } }}>
          
          <Typography  variant='string' className='categories' >ALL CATEGORIES</Typography>
          
          <Typography className='columns' variant='string'>Cars</Typography>
          <Typography className='columns' variant='string'>Motorcycles</Typography>
          <Typography className='columns' variant='string'>Mobile Phones</Typography>
          <Typography className='columns' variant='string'>Laptop</Typography>
          <Typography className='columns' variant='string'>Accessories</Typography>
          <Typography className='columns' variant='string'>Scooters</Typography>
          <Typography className='columns' variant='string'>Commercial</Typography>
          <Typography className='columns' variant='string'>Other Vehicles</Typography>
          
      </Stack>
      
    </Grid>
    </Container>
    <Grid  >
          <img style={{paddingBottom:'30px', marginTop:"10px"}} alt="banner" className="responsive" src={heroBanner} />
      </Grid>
    </div>
  );
}

export default Banner;
