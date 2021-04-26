import React from 'react'
import { BoxLoading } from 'react-loadingg'
import BlockLoading from 'react-loadingg/lib/BlockLoading'
import MeteorRainLoading from 'react-loadingg/lib/MeteorRainLoading'


const Loader = () => {
    return (
        <div className="loading">
            {/* <BlockLoading size='90px' /> */}
            <MeteorRainLoading color='#fff' size='large' />
            <h3>Fetching Data</h3>
        </div>
    )
}

export default Loader
