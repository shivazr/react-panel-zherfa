import React from 'react'
import Card from '../components/Card/Card'
import CardUsers from '../components/CardUsers/CardUsers'
import HeroSection from '../components/HeroSection/HeroSection'
import Topbar from '../components/topbar/Topbar'
import Traffic from '../components/Traffic/Traffic'



function Dashborad () {
  
  return (
    <div style={{ width:"100%" }}>
    <Topbar/>
    {/* <HeroSection /> */}
    {/* <Card/> */}
    <CardUsers/>
    <Traffic />
    </div>
        
  )
}

export default Dashborad 
