import { Grid } from '@material-ui/core'
import React from 'react'
import './Banner2.css'
import footerBanner from "../../assests/footer.jpg"
function Banner2() {
    return (
        <Grid  style={{backgroundColor: "#ebeeef"}}>
          <img style={{paddingBottom:'30px'}} className="responsive-banner" src={footerBanner} alt='footer'/>
      </Grid>
    )
}

export default Banner2
