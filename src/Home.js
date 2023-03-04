import React from 'react'
import Header from './components/Header'

const Home = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="home-section">
                    <div className="home-data">
                        <h1 className='topData'>We have integrated  earnings strategy on other secure and protocols with huge return.</h1>
                        <p className='paraData'>Yield Protocol allows users to easily  deposit and enjoy huge yield from our yield farming strategy and staking event.</p>
                        <a href='https://tunigregrator.vercel.app/' target="_blank">
                          <button className='btn'>LAUNCH APP <span><i className="fa-solid fa-arrow-right-long"></i></span></button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
