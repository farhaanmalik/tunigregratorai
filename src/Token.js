import React from 'react'
import TokenCard from './components/TokenCard'

const Token = () => {
    return (
        <>
            <div className="token-section" id='tokenomics'>
                <div className="container">
                    <div className="content-section">
                        <h1 className='topData'>Tokenomics</h1>
                        <TokenCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Token
