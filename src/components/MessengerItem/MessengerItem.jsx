import React from 'react'
import './MessengerItem.scss'
import { useDispatch } from 'react-redux'
import { setCurrentChat } from '../../redux/reducers/confessionSlice'
import { publicRequest } from '../../util/apiCall'
function MessengerItem({user}) {
  const dispatch = useDispatch()
  
  return (
    <div className="messengerItem" onClick={async()=>{
      const res= await publicRequest.get('/user/'+user._id)
      console.log(res.data.data.data);
      dispatch(setCurrentChat({
        id : res.data.data.data._id,
        username : res.data.data.data.username,
        avatar : res.data.data.data.avatar,
      }))
    }}>
    <img src={user.avatar} alt="" />
    <div className="content">
        <div className="name">{user.username}</div>
        <div className="message">Xin chao cau</div>
    </div>
</div>
  )
}

export default MessengerItem