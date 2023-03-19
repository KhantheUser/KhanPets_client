import React, { useEffect, useRef, useState } from "react";
import Message from "../Message/Message";
import "./Rightbar.scss";
import { useSelector } from "react-redux";
import { SendOutlined } from "@material-ui/icons";
import { publicRequest } from "../../util/apiCall";

import { io } from "socket.io-client";

function Rightbar() {
  const [conversationId, setConversationId] = useState("");
  const { currentChatUser } = useSelector((state) => state.confess);
  const { currentUser } = useSelector((state) => state.user);
  const inputRef = useRef();
  const [messages, setMessages] = useState([]);

  const socket = useRef();

  const getMessage = async (converId) => {
    if (!conversationId) {
      const res = await publicRequest.get("message/" + converId);

      setMessages(res.data.data);
    } else {
      const res = await publicRequest.get("message/" + conversationId);

      setMessages(res.data.data);
    }
  };
  const handleSend = async () => {
    const res = await publicRequest.post("message", {
      sender: currentUser._id,
      text: inputRef.current.value,
      conversationId: conversationId,
    });
    socket.current.emit("sendMessage", {
      receiverId: currentChatUser.id,
      conversationId,
    });
    inputRef.current.value = "";
    getMessage();
  };
  // useEffect(() => {
  //   socket.current = io("http://localhost:8000");
  //   // socket.current = io("wss://khan-pets-socket.vercel.app/");
  //   socket.current.on("getMessage", (converId) => {
  //     console.log(converId);
  //     getMessage(converId);
  //   });
  // }, []);

  // useEffect(() => {
  //   socket.current.emit("addUser", currentUser._id);
  //   socket.current.on("getUsers", (users) => {
  //     console.log(users);
  //   });
  // }, [currentUser]);
  useEffect(() => {
    const getConversation = async () => {
      const res = await publicRequest.get("conversation", {
        params: {
          sender: currentUser._id,
          receiver: currentChatUser.id,
        },
      });

      const createConversation = async () => {
        if (!currentChatUser?.id) return;
        const res = await publicRequest.post("conversation", {
          senderId: currentUser._id,
          receiverId: currentChatUser.id,
        });
        return res;
      };

      if (res.data.data.length === 0) {
        const ress = await createConversation();

        setConversationId(ress.data.data[0]?._id);
      } else {
        setConversationId(res.data.data[0]._id);
      }
    };
    getConversation();
  }, [currentChatUser]);

  useEffect(() => {
    if (!conversationId) {
      return;
    }
    getMessage();
  }, [conversationId]);

  return (
    <div className="rightBar ">
      <div className="rightbarWrapper ">
        <div className="top">
          <div className="image">
            <img
              src={`${
                currentChatUser?.avatar
                  ? currentChatUser?.avatar
                  : "/assets/images/defaultavatar.jpg"
              }`}
              alt=""
            />
          </div>
          <div className="name">{currentChatUser?.username}</div>
        </div>
        <div className="chat">
          {messages?.map((message, index) => (
            <Message
              key={index}
              message={message}
              own={currentUser._id === message.sender._id}
            />
          ))}
        </div>
        <div className="inputText">
          <input ref={inputRef} type="text" placeholder="Write somthing..." />
          <div onClick={handleSend}>
            <SendOutlined style={{ cursor: "pointer", color: "#1877f2" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
