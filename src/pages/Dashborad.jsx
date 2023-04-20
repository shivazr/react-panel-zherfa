import React from 'react'
import Card from '../components/Card/Card'
import CardUsers from '../components/CardUsers/CardUsers'

import Topbar from '../components/topbar/Topbar'
import Traffic from '../components/Traffic/Traffic'
import Sales from '../components/Sales/Sales'



function Dashborad () {
  
  return (
    <div style={{ width:"100%" }}>
    <Topbar/>
 
    {/* <Card/> */}
    <CardUsers/>
    <Traffic />
    <Sales/>
    </div>
        
  )
}

export default Dashborad 
