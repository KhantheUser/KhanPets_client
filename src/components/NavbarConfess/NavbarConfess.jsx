import React from 'react'
import './NavbarConfess.scss';
import {useNavigate} from 'react-router-dom';
import {Person, Search,Chat,Notifications,ArrowBack} from '@material-ui/icons';
import { useSelector } from 'react-redux';
function NavbarConfess() {
    const {currentUser} = useSelector(state=>state.user)
    const navigate = useNavigate()
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            
                <span style={{display:'flex',alignItems:'center'}} onClick={()=>navigate('/')}>

                <ArrowBack style={{fontSize:'24px',color:'white',marginLeft:'10px',cursor:'pointer',fontWeight:'bold'}} />
                </span>
           
            <span className="logo">Pet Confession</span>
            
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <Search className='searchIcon'/>
                <input type="text" placeholder='Search for friend ,post or video' className='searchInput' />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Person/>
                    <span className='topbarIconBadge'>1</span>
                </div>
                <div className="topbarIconItem" onClick={()=>navigate('/messenger')}>
                    <Chat/>
                    <span className='topbarIconBadge'>2</span>
                </div>
                <div className="topbarIconItem" >
                    <Notifications/>
                    <span className='topbarIconBadge'>3</span>
                </div>
            </div>
            
            <img src={`${currentUser.avatar || '/assets/images/defaultavatar.jpg'}`} alt="" className="topbarImg" />

            
        </div>
    </div>
  )
}

export default NavbarConfess