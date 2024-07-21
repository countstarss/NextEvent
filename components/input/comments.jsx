import { useContext, useEffect, useState } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import NotificationContext from "../../store/NotificationContext";

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { showNotification } = useContext(NotificationContext);

  useEffect(() => {
    if (showComments) {
      setIsLoading(true);
      fetch("/api/comments/" + eventId)
        .then((response) => response.json())
        .then((data) => {
          setComments(data.comments);
          setIsLoading(false);
        });
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    showNotification({
      title: "Sending comment...",
      message: "Your comment is currently being stored into a database.",
      status: "pending",
    });
    fetch("/api/comments/" + eventId, {
      method: "POST",
      body: JSON.stringify(commentData), //commentData 从newComment中取出
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // 如果没有取回response数据
        return res.json().then((data) => {
          throw new Error(data.message || "Something went wrong!");
        });
      })
      .then(() =>
        showNotification({
          title: "Success!",
          message: "Your comment was saved",
          status: "success",
        })
      )
      .catch((err) =>
        showNotification({
          title: "Error!",
          message: err.message || "Something went wrong!",
          status: "error",
        })
        // console.log(`err:${err}`)
      )
      
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !isLoading && <CommentList items={comments} />}
      {showComments && isLoading && <p>Loading...</p>}
    </section>
  );
}

export default Comments;
