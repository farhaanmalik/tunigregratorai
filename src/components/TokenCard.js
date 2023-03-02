import React from 'react'

const TokenCard = () => {
    return (
        <>
            <div className="row">
                <div className="box token-box">
                    <div className="box-body">
                        <h4>Liquidity: 2%</h4>
                    </div>
                </div>
                <div className="box token-box">
                    <div className="box-body">
                        <h4>Total Supply: 10,000,000</h4>
                    </div>
                </div>
                <div className="box token-box">
                    <div className="box-body">
                        <h4>Marketing: 1%</h4>
                    </div>
                </div>
                <div className="box token-box">
                    <div className="box-body">
                        <h4>Yield Pool: 1%</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TokenCard
