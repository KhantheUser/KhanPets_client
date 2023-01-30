import React from 'react'
import Feed from '../../components/Feed/Feed'
import NavbarConfess from '../../components/NavbarConfess/NavbarConfess'
import Rightbar from '../../components/Rightbar/Rightbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import './ConfessPage.scss'

function ConfessPage() {
  return (
    <div className='confessPage'>
        <NavbarConfess/>
      <div className='confessContainer' >
        <Sidebar/>
      <Feed/>
      <Rightbar/>

      </div>
    </div>
  )
}

export default ConfessPage