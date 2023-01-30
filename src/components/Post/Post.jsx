import React, { useEffect, useState } from 'react'
import './Post.scss'
import { MoreVert} from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import {format} from 'timeago.js'
import {setCurrentChat} from '../../redux/reducers/confessionSlice'
function Post({post}) {
    const dispatch  = useDispatch()
const handleSetCurrentChat = ()=>{
    dispatch(setCurrentChat({
        id : post.userId._id,
        username : post.userId.username,
        avatar : post.userId.avatar,

    }))
}
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft" onClick={handleSetCurrentChat} >
                    {/* <Link to={`profile/${user.username}`}> */}

                    <img className='postProfileImg' src={`${post?.userId.avatar || '/assets/images/defaultavatar.jpg'}`} alt="" />
                    {/* </Link> */}
                    <span className='postUsername'>{post?.userId.username}</span>
                    <span className='postDate'>{format(post?.createdAt,'en_US')}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className='postImg' src={post?.img} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img  className='likeIcon' src="/assets/images/like.png"  alt="" />
                    <img className='likeIcon'  src="/assets/images/heart.png"  alt="" />
                    <span className='postlikeCounter'>{post?.likes?.length} people liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className='postCommentText'>12 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post