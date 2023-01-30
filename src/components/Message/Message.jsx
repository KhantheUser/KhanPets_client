import React from 'react'
import './Message.scss'
import {format} from 'timeago.js'

function Message({own,message,style}) {

  
  

  return (
    <div className={own ? 'message own' : 'message'}>
        <div className="messageTop">
            <img className='messageImg' src={message.sender.avatar} alt="" />
            
            <p className='messageText'>{message.text}</p>
        </div>
        <div className="messageBottom"  style={{color:style?.color}}>{format(message.createdAt )}</div>
    </div>
  )
}

export default Message