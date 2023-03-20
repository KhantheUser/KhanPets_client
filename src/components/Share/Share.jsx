import React, { useRef, useState } from "react";
import "./Share.scss";
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";
import { createMyPost } from "../../redux/reducers/confessionSlice";

function Share() {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");
  const { currentUser } = useSelector((state) => state.user);

  const uploadFiles = async () => {
    const name = new Date().getTime() + file.name;

    const storageRef = ref(storage, name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        switch (snapshot.state) {
          case "paused":
            break;
          case "running":
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log("Upload error: " + error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFile(null);
          setStatus("");
          dispatch(
            createMyPost({
              userId: currentUser._id,
              img: downloadURL,
              desc: status,
            })
          );
        });
      }
    );
  };

  const handleSetImg = (e) => {
    setFile(e.target.files[0]);
  };
  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (status && !file) {
      dispatch(
        createMyPost({
          userId: currentUser._id,
          img: "",
          desc: status,
        })
      );
      setFile(null);
      setStatus("");
    } else {
      uploadFiles();
    }
  };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={`${currentUser.avatar || "/assets/images/defaultavatar.jpg"}`}
            alt=""
            className="shareProfile"
          />
          <input
            type="text"
            value={status}
            className="shareInput"
            placeholder={`What in your mind , ${currentUser.username} ?`}
            onChange={(e) => handleChangeStatus(e)}
          />
        </div>
        <hr className="shareHr" />
        <div className="shareImgContainer">
          {file?.type === "video/mp4" ? (
            <video src={URL.createObjectURL(file)}></video>
          ) : (
            <img
              className="shareImg"
              src={file && URL.createObjectURL(file)}
              alt=""
            />
          )}
          <Cancel
            className={`shareCancel text-white ${!file && "!hidden"}`}
            onClick={() => setFile(null)}
          />
        </div>
        <form className="shareBottom" onSubmit={(e) => handleSubmit(e)}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                name=""
                id="file"
                accept=".png,.jpeg,.jpg,.gif,.mp4"
                onChange={(e) => handleSetImg(e)}
              />
            </label>

            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            className="shareButton"
          >
            Share
          </button>
        </form>
      </div>
    </div>
  );
}

export default Share;
