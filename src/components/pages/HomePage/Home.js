import React from 'react'
import Hero from '../../Hero'
import { homeObjOne, homeObjTwo } from './Data'

function Home() {
    return (
        <>
            <Hero {...homeObjOne} />
            <Hero {...homeObjTwo} />
        </>
    )
}

export default Home
