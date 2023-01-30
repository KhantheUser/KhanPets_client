import React, { useEffect, useState } from 'react'
import Banner_Info from '../../components/Banner_Info/Banner_Info'
import Banner_Video from '../../components/Banner_Video/Banner_Video'
import CardList from '../../components/CardList/CardList'
import Carousel from '../../components/Carousel/Carousel'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { publicRequest } from '../../util/apiCall'

function HomePage() {
  
  return (
    <div className='homePage' >
        <Navbar/>
        <Carousel/>
        <CardList/>
        <Banner_Video/>
        <Banner_Info/>
        <Footer/>
        {/* <p>sssssssss</p> */}
        
    </div>
  )
}

export default HomePage