import React from 'react'
import AboutShop from '../components/AboutShop'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Featured />
            <Newsletter />
            <AboutShop />
            <Footer />
        </>
    )
}

export default Home
