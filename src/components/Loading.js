import React from 'react';
import BounceLoader from "react-spinners/BounceLoader";

const Loading = () => {
    return (
        <>
            <div className="preloader">
                <BounceLoader className="preloader" color={'#664cd8'} size={50} />
            </div>
        </>
    )
}

export default Loading
