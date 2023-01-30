import React, { useState } from 'react'
import NavbarConfess from '../../components/NavbarConfess/NavbarConfess'
import {MoreHoriz,PhotoCamera,Note,Call,Info,Notifications,Facebook} from '@material-ui/icons'
import './Messenger.scss'
import MessengerItem from '../../components/MessengerItem/MessengerItem'
import { useEffect } from 'react'
import { publicRequest } from '../../util/apiCall'
import { useDispatch, useSelector } from 'react-redux'
import {SendOutlined} from '@material-ui/icons'

import Message from '../../components/Message/Message'
function Messenger() {
    const {currentUser} = useSelector(state=>state.user)
    const {currentChatUser} = useSelector(state=>state.confess)
    const [conversationId,setConversationId] = useState('')
    const [text,setText] = useState()
    const [conversation ,setConversation] = useState([])
    const [chatUser,setChatUser] = useState([])
    const [messages,setMessages] = useState([]);
    console.log(currentChatUser);
    useEffect(()=>{
        const getConversation = async ()=>{
            const res =await publicRequest.get('conversation/me/'+currentUser._id)
            // setConversation
            setConversation(res.data.data.data)
        }
        getConversation()
    },[])
    useEffect (()=>{
        const getConversationId = async ()=>{
            if(!currentChatUser.id || !currentUser._id) return
            const res = await publicRequest.get('conversation',{
                params:{
                    sender : currentUser._id,
                    receiver : currentChatUser.id
                }
            })
            setConversationId(res.data.data[0]._id)
        }
        getConversationId()
    },[currentChatUser])
    const getMessages = async ()=>{
        if(!conversationId) return 
        const res = await publicRequest.get('message/'+conversationId)
        setMessages(res.data.data);
    }
    useEffect(()=>{
        
        getMessages()
    },[conversationId])
    const sendMessage = async ()=>{
        if(!conversationId || !currentChatUser.id) return
        await publicRequest.post('message',{
            sender : currentUser._id,
            text,
            conversationId

        })
        getMessages()
        setText('')
    }
    useEffect(()=>{
         const getUser = async (id)=>{
                const res = await publicRequest.get('user/'+id)
                return res.data.data.data
            }
        const getChatUser = async ()=>{
          
           
           if(!conversation) return 
           const request = conversation?.map((conver,index)=>{
                
            let id ;
            if(conver.members[0] === currentUser._id){
                id = conver.members[1]
            }else {
                id = conver.members[0]
            }
            return getUser(id)
            
            
        })
        
        const res= await Promise.all(request)
        setChatUser(res)
           
            
        }
        getChatUser()
    },[conversation,currentUser])
    
  return (
    <>
    <NavbarConfess messenger/>
    <div className='messenger'>
        
        <div className="left">
            <div className="leftTop">
                <div className='title'>
                    <h2>Chat</h2>
                    <div className='icon'>
                        <div className='iconContainer'>
                            <MoreHoriz style={{color:'white'}}/>
                        </div>
                        <div className='iconContainer'>
                            <PhotoCamera style={{color:'white'}}/>
                        </div>
                        <div className='iconContainer'>
                            <Note style={{color:'white'}}/>
                        </div>
                    </div>
                </div>
                <div className='inputSearch'>
                    <input type="text" placeholder='Tìm kiến trên Messenger'/>
                </div>
                <div className='social'>
                    <span>Hộp thư</span>
                    <span>Cộng đồng</span>
                </div>
            </div>
            <div className="chat">
               
               {chatUser?.map((user,index)=> <div key={index} >
                <MessengerItem  user={user} />
               </div>)}
            </div>
        </div>
        <div className="center">
            <div className="centerTop">
                <div className="info">
                    <img src={currentChatUser.avatar} alt="" />
                    <div className="online"></div>
                    <div className='status'>
                    <span>{currentChatUser.username}</span>
                    <span>Đang hoạt động</span>
                    </div>
                </div>
                <div className="icon">
                <div className='iconContainer'>
                            <MoreHoriz style={{color:'white'}}/>
                            
                        </div> 
                        <div className='iconContainer'>
                            
                            <Call style={{color:'white'}}/>
                           
                        </div> 
                        <div className='iconContainer'>
                           
                            <Info style={{color:'white'}}/>
                        </div> 
                </div>
            </div>
            <div className="centerBottom">
                {messages?.map((message,index)=>{
                    return <Message style={{color:'white'}} key={index} own={currentUser._id === message.sender._id} message={message}/>
                })}
            </div>
            <div className="centerInput">
                <input type="text" value={text}  onChange={(e)=>setText(e.target.value)} onKeyDown={(e)=>{
                if(e.key ==='Enter') sendMessage()
                }}/>
                <div className="icon">

                <SendOutlined style={{fontSize:'30px',color:'#1877f2'}}/>
                </div>
            </div>
        </div>
        <div className="right">
            <div className="img">
                <img src={currentChatUser.avatar} alt="" />
                
            </div>
            <span className='name'>
                {currentChatUser.username}
            </span>
            <span className='time'>Hoạt động 25 phút trước</span>
            <div className="icon">
                <div className="iconContain">

            <Note style={{color:'white'}}/>
           
            <span></span>
                </div>
                <div className="iconContain">

<Facebook style={{color:'white'}}/>

    </div>
    <div className="iconContain">

<Notifications style={{color:'white'}}/>

    </div>
            

            </div>
            

        </div>
    </div>
    </>
  )
}

export default Messenger