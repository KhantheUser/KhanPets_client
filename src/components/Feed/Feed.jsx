import "./Feed.scss";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Share from "../Share/Share";
import Post from "../Post/Post";
import { getAllFeeds } from "../../redux/reducers/confessionSlice";
function Feed({ username }) {
  const { posts } = useSelector((state) => state.confess);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllFeeds());
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />

        {posts?.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
