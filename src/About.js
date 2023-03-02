import React from 'react'
import AboutCard from './components/AboutCard'

const About = () => {
    return (
        <>
            <div className="about-section" id='about-us'>
                <div className="container">
                    <div className="about-content">
                        <h1 className='topData'>Yield Farming Maximized with the Community</h1>
                        <AboutCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
