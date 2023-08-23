import React, { useEffect, useState } from "react";
import "./CreateQ.css";
import { useNavigate, useParams } from "react-router";
import { getArticlesAPI } from "../lib/api/article.js";
import { putArticleAPI, postArticleAPI } from "../lib/api/article.js";

function CreateQ(props) {
  const navigate = useNavigate();
  const params = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [obdng, setObdng] = useState("");
  const [svcId, setSvcId] = useState("");
  const [srmId, setSrmId] = useState("");
  const [ordrId, setOrdrId] = useState("");
  const [reqUser, setReqUser] = useState("");
  const [status, setStatus] = useState(false);

  const updateArticle = () => {
    const productId = params.id;
    if (window.confirm("글을 수정하시겠습니까?")) {
      putArticleAPI(productId).then((res) => {
        console.log("update article data :", res);
      });
      alert("글이 수정되었습니다.");
      navigate(`/board/${productId}`);
    } else {
      alert("취소합니다.");
    }
  };

  const createArticle = (data) => {
    if (!title) {
      alert("제목을 입력해주세요");
      return;
    }
    if (!content) {
      alert("내용을 입력해주세요");
      return;
    }

    if (window.confirm("글을 생성하시겠습니까?")) {
      const articleData = {
        title,
        content,
      };
      console.log("!!!", articleData);
      postArticleAPI(articleData).then((res) => {
        console.log("create article data : ", res);
        alert("글이작성되었습니다");
        navigate(`/board/${res.data}`);
      });
    } else {
      alert("취소합니다.");
    }
  };

  const onBtnClick = () => {
    if (props.cate === "update") {
      updateArticle();
    } else {
      createArticle();
    }
  };

  useEffect(() => {
    // console.log(cate.cate);
  }, []);

  return (
    <div className="create-q-container">
      <div className="create-q-content">
        <div className="create-btn-con"></div>
        <div className="create-form">
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
            />
          </div>
          <div>
            <input
              type="text"
              value={obdng}
              onChange={(e) => setObdng(e.target.value)}
              maxLength={Math.floor(title.length / 2)} // 제목의 절반 길이로 제한
              placeholder="obdng (선택)"
            />
          </div>
          <div>
            <input
              type="text"
              value={svcId}
              onChange={(e) => setSvcId(e.target.value)}
              maxLength={Math.floor(title.length / 2)} // 제목의 절반 길이로 제한
              placeholder="svc_id (선택)"
            />
          </div>
          <div>
            <input
              type="text"
              value={srmId}
              onChange={(e) => setSrmId(e.target.value)}
              placeholder="srm_id (선택)"
            />
          </div>
          <div>
            <input
              type="text"
              value={ordrId}
              onChange={(e) => setOrdrId(e.target.value)}
              placeholder="ordr_id (선택)"
            />
          </div>
          <div>
            <input
              type="text"
              value={reqUser}
              onChange={(e) => setReqUser(e.target.value)}
              placeholder="req_user (선택)"
            />
          </div>
          {/* <div>
            <label>
              <input
                type="checkbox"
                checked={status}
                onChange={(e) => setStatus(e.target.checked)}
              />
              Status (선택)
            </label>
          </div> */}
          <div>
            <textarea
              id="create-input"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력하세요"
            />
          </div>
        </div>
        <div>
          <button className="create-button" onClick={onBtnClick}>
            완료
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateQ;
