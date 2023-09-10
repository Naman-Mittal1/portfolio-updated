import React from 'react'
import PlacementTimeLine from './PlacementTimeline'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Placement = () => {
  return (
    <>
        <Header />
        <PlacementTimeLine />
        <div style={{marginTop: "40px"}}></div>
        <Footer />
    </>
  )
}

export default Placement