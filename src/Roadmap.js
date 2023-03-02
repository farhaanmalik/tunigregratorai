import React from 'react';
import RoadmapCard from './components/RoadmapCard';

const Roadmap = () => {
    return (
        <>
            <div className="roadmap-section" id='roadmap'>
                <div className="container">
                    <div className="about-content">
                        <h1 className='topData'>Our Roadmap</h1>
                        <RoadmapCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Roadmap
