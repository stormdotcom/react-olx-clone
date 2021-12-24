import React from 'react'
import Banner from '../components/Banner/Banner'
import Banner2 from '../components/Banner/Banner2'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Posts from '../components/Posts/Posts'

function Home() {
    return (
        <div>
                <Header />
                <Banner />
                <Posts />
                <Banner2 />
                <Footer />
        </div>
    )
}

export default Home
