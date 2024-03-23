import React from "react";
import Comment from "./Comment";

function CommentList() {
  return (
    <div>
      <Comment name={"차영건"} comment={"안녕하세요, 차영건입니다."} />
      <Comment name={"차차차"} comment={"안녕하세요, 리액트 어렵네요"} />
      <Comment name={"영차"} comment={"안녕하세요, 놀러가고싶어요."} />
    </div>
  );
}

export default CommentList;
