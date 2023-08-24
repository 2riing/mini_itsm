import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./BoardDetail.css";
import {
  getArticleAPI,
  deleteArticleAPI,
  getCommentsAPI,
  postCommentAPI,
  deleteCommentAPI,
} from "../../lib/api/article";

function BoardDetail() {
  const params = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const getArticle = () => {
    const productId = params.id;
    console.log("article detail id :", productId);
    getArticleAPI(params.id).then((res) => {
      setArticle(res.data);
    });
  };

  const getComments = () => {
    const productId = params.id;
    getCommentsAPI(productId).then((res) => {
      setComments(res.data);
      console.log("comments data by article :", res.data);
    });
  };

  const deleteArticle = () => {
    const productId = params.id;
    if (window.confirm("정말 삭제합니까?")) {
      deleteArticleAPI(productId).then((res) => {
        console.log("delete data", res);
        navigate("/board");
      });
      alert("삭제되었습니다.");
    } else {
      alert("취소합니다.");
    }
  };

  const deleteComment = () => {
    const productId = params.id;
    if (window.confirm("정말 삭제합니까?")) {
      deleteCommentAPI(productId).then((res) => {
        console.log("delete data", res);
        navigate("/board");
      });
      alert("삭제되었습니다.");
    } else {
      alert("취소합니다.");
    }
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const createComment = () => {
    if (newComment.trim() === "") {
      alert("댓글 내용을 입력해주세요.");
      return;
    }

    const commentData = {
      content: newComment,
      postId: params.id,
    };

    postCommentAPI(commentData)
      .then((res) => {
        console.log("댓글 작성 결과:", res);
        setNewComment("");
        getComments();
      })
      .catch((error) => {
        console.error("댓글 작성 오류:", error);
      });
  };

  useEffect(() => {
    getArticle();
    getComments();
  }, []);

  return (
    <div className="detail-container">
      <section className="notice">
        <div className="page-title">
          <div className="container">{/* <h3>Sample Data</h3> */}</div>
        </div>
        <div id="board-list">
          <div className="container">
            <div className="board-create">
              <Link
                className="nav_item"
                to={`/edit/${params.id}`}
                state={{ cate: "update" }}
              >
                <button>글수정</button>
              </Link>
              <button onClick={deleteArticle}>글삭제</button>
            </div>

            {/* 글 */}
            <table className="board-table">
              <thead>
                <tr>
                  <th scope="col" className="th-num">
                    {article.title}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{article.content}</td>
                </tr>
              </tbody>
            </table>

            {/* 댓글 */}
            <div className="comment-section">
              {comments?.map((comment, index) => (
                <div key={index} className="comment">
                  <div className="comment-main">
                    <div className="user-name">작성자 : {comment.user_id}</div>
                    <div className="content">{comment.content}</div>
                  </div>
                  <div>
                    <button onClick={deleteComment}>x</button>
                  </div>
                </div>
              ))}
            </div>

            {/* 댓글 생성 */}
            <div className="comment-create">
              <div className="user-name">UserName</div>
              <textarea
                value={newComment}
                onChange={handleCommentChange}
                placeholder="댓글을 입력하세요."
              />
              <button onClick={createComment}>작성하기</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BoardDetail;
