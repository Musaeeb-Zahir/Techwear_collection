import React, { useRef } from "react";
import PeopleCard from "../components/PeopleCard";
import PeopleData from "../data/PeopleData";
import Comment from "../components/Comment";
import { useDispatch, useSelector } from "react-redux";
import commentSlice, { addComment } from "../redux/slices/commentSlice";
function CommentForm() {
  const dispatch = useDispatch();
  let commentElement = useRef();
  let usernameElement = useRef();
  function handleCommentSubmit(e) {
    e.preventDefault();
    let comment = commentElement.current.value;
    let username = usernameElement.current.value;
    dispatch(addComment({ comment, username }));
    commentElement.current.value = "";
    usernameElement.current.value = "";
  }
  const store = useSelector((store) => store.comment.comment);
  console.log(store);
  return (
    <div>
      <section id="form-details" className="section-p1">
        <form action="">
          <span>LEAVE A MASSAGE</span>
          <h2>We love to hear from you</h2>
          <input
            type="text"
            placeholder="Your Name"
            ref={usernameElement}
            required
          />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea
            name=""
            required
            id=""
            cols="30"
            rows="10"
            placeholder="Your Massage"
            ref={commentElement}
          ></textarea>
          <button className="normal" onClick={handleCommentSubmit}>
            Submit
          </button>
        </form>
        <div className="people">
          {PeopleData.map((people) => (
            <PeopleCard people={people} key={people.id} />
          ))}
        </div>
      </section>
      <section className=".Comment-box flex flex-col pl-8">
        <h4 className="text-xl font-normal ">Comments</h4>
        {store.length > 0 &&
          store.map((comments) => (
            <Comment
              comment={comments.comment}
              username={comments.username}
              key={comments.comment}
            />
          ))}
      </section>
    </div>
  );
}

export default CommentForm;
