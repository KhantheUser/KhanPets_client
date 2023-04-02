import React, { useEffect, useRef, useState } from "react";
import "./Post.scss";
import { MoreVert } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { format } from "timeago.js";
import Popover from "@material-ui/core/Popover";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { database } from "../../firebase";
import { child, get, ref, set } from "firebase/database";
import {
  deleteMyPost,
  setCurrentChat,
} from "../../redux/reducers/confessionSlice";
import { publicRequest } from "../../util/apiCall";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function Post({ post }) {
  const inputRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [numberLike, setNumberLike] = useState(0);
  const [comments, setComments] = useState([]);
  const [like, setLike] = useState(false);
  const [postId, setPostId] = useState(null);
  function writeUserData() {
    set(ref(database, `comments/${post?._id}${Date.now()}`), {
      postId: postId,
      userId: currentUser._id,
      comment: inputRef.current.value,
      avatar: currentUser.avatar,
      username: currentUser.username,
    });
  }
  useEffect(() => {
    setLike(post?.likes.includes(currentUser._id));
    setNumberLike(post?.likes.length);
  }, [post?.likes]);

  const dbRef = ref(database);
  const getCommentsFromFireBase = () => {
    console.log(postId);
    get(child(dbRef, `comments`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setComments(
            Object.values(snapshot.val()).filter(
              (item) => item.postId === postId
            )
          );
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    if (postId) {
      getCommentsFromFireBase();
    }
  }, [postId]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLike = async () => {
    setLike(!like);
    await publicRequest.patch(`/post/${post?._id}`, {
      userId: currentUser._id,
    });
    if (like) {
      setNumberLike((pre) => pre - 1);
    } else {
      setNumberLike((pre) => pre + 1);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleSetCurrentChat = () => {
    dispatch(
      setCurrentChat({
        id: post.userId._id,
        username: post.userId.username,
        avatar: post.userId.avatar,
      })
    );
  };
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const divScrollRef = useRef(null);
  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="post">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div
            ref={divScrollRef}
            className="h-[90%] xmd:w-[45%] w-[80%]  bg-white outline-none rounded-md overflow-y-scroll relative scroll-smooth"
          >
            <span
              className=" right-0 absolute top-2 cursor-pointer "
              onClick={() => handleCloseModal()}
            >
              <HighlightOffIcon fontSize="large" />
            </span>

            <div className="absolute  bottom-0   h-14 right-0 left-0 rounded-md ">
              <div
                style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                className="fixed p-3  h-14 rounded-md w-[45%] bg-[#f1f1f1] flex items-center"
              >
                <img
                  src={currentUser.avatar}
                  className="rounded-full h-10 w-10 mr-2"
                  alt=""
                />
                <input
                  type="text"
                  ref={inputRef}
                  onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                      writeUserData();
                      getCommentsFromFireBase();
                      inputRef.current.value = "";
                      divScrollRef.current.scroll({
                        top: divScrollRef.current.scrollHeight + 400,

                        behavior: "smooth",
                      });
                    }
                  }}
                  placeholder="Write your comment"
                  className="flex-1 py-1 px-3 bg-[#ccc] rounded-2xl outline-none"
                />
              </div>
            </div>

            <h2 className="text-center text-xl font-medium text-[#242526] py-3 border-b-2 border-[#ccc]">
              Bài viết của Thiện Đức
            </h2>
            <div className="p-3">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img
                    className="rounded-full h-10 w-10 border-2 border-blue-500"
                    src={post?.userId.avatar}
                    alt=""
                  />
                  <div className="ml-2">
                    <span className="font-medium">{post?.userId.username}</span>
                    <span className="block text-[#B0B3B8]">
                      {format(post?.createdAt)}
                    </span>
                  </div>
                </div>
                <div>
                  <MoreHorizIcon />
                </div>
              </div>
              <p className="my-2">{post?.desc}</p>
            </div>
            <div className="flex justify-center">
              {post?.img.includes(".mp4") ? (
                <video src={post?.img} controls></video>
              ) : (
                <img src={post?.img} className="" alt="" />
              )}
            </div>
            <div className="px-3 py-2 ">
              <div className="flex justify-between py-1 border-b-2 border-[#ccc]">
                <div className="flex">
                  <FavoriteIcon color="error" />
                  <span className="block ml-1 ">
                    {numberLike} people liked it
                  </span>
                </div>
                <div>{comments.length} Bình luận</div>
              </div>
            </div>
            <div className=" p-3 mb-14">
              {comments.map((com, index) => (
                <div className="flex mt-3">
                  <img
                    src={com.avatar}
                    className="h-10 w-10 rounded-full"
                    alt=""
                  />
                  <div className="ml-2 bg-yellow-100 p-3 rounded-md">
                    <span className="font-medium">{com.username}</span>
                    <span className="block">{com.comment}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </Modal>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft" onClick={handleSetCurrentChat}>
            {/* <Link to={`profile/${user.username}`}> */}

            <img
              className="postProfileImg"
              src={`${
                post?.userId.avatar || "/assets/images/defaultavatar.jpg"
              }`}
              alt=""
            />
            {/* </Link> */}
            <span className="postUsername ">{post?.userId.username}</span>
            <span className="postDate">{format(post?.createdAt, "en_US")}</span>
          </div>
          <div
            aria-describedby={id}
            onClick={handleClick}
            className={`postTopRight cursor-pointer  ${
              currentUser._id === post.userId._id ? "" : "hidden"
            }`}
          >
            <MoreVert className="hover:bg-gray-300 transition  rounded-sm" />
          </div>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <div
              onClick={() => {
                dispatch(deleteMyPost(post._id));
              }}
              className="p-2 cursor-pointer hover:bg-gray-300 transition-all ease-linear duration-300"
            >
              Xóa bài viết
            </div>
          </Popover>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          {post?.img.includes(".mp4") ? (
            <video src={post.img} controls></video>
          ) : (
            <img className="postImg" src={post?.img} alt="" />
          )}
        </div>
        <div
          className="postBottom pb-2"
          style={{ borderBottom: "1px solid #ccc" }}
        >
          <div className="postBottomLeft px-3">
            <img className="likeIcon" src="/assets/images/heart.png" alt="" />
            <span className="postlikeCounter">
              {numberLike} people liked it
            </span>
          </div>
          <div className="postBottomRight px-3">
            <span className="postCommentText">{comments.length} comments</span>
          </div>
        </div>
        <div className=" flex justify-between py-2">
          <div
            className="hover:bg-[#ece6e6] rounded-md like cursor-pointer px-3 py-1 relative "
            onClick={handleLike}
          >
            <div className="absolute  bg-[#f7f7f7]/70 hoverLike px-2 py-1 rounded-md">
              <img
                height={50}
                width={50}
                src="https://media3.giphy.com/media/4JXQArc0SQlh5diE9B/giphy.gif?cid=6c09b952000c375fac23ea1cc986b6fe9efc229b85633296&rid=giphy.gif&ct=s"
                alt="heart"
              />
            </div>
            {like ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
            <span>Thả tim</span>
          </div>
          <div
            className="hover:bg-[#ece6e6] rounded-md cursor-pointer px-3 py-1"
            onClick={() => {
              handleOpen();
              setPostId(post?._id);
            }}
          >
            <ChatBubbleOutlineIcon />
            <span>Bình luận</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
