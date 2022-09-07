import { CCard, CCardHeader, CCardBody } from "@coreui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function ListContent(props) {
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  useEffect(async () => {
    const res = await axios.get("/posts" + "?user=admin");
    setPosts(res.data);
    console.log(posts);
  }, []);
  const handlePush = (id) => {
    history.push("/post/" + id);
  };
  return (
    <div className="list-content">
      <h1>Danh sách bài viết</h1>
      {posts.map((post) => {
        return (
          <CCard className="mb-4">
            <CCardHeader>{post.title}</CCardHeader>
            <CCardBody className="d-flex justify-content-between position-relative">
              <div>{post.desc}</div>
              <div className="show-more">Show more content</div>
              <i
                className="icon-edit far fa-edit"
                onClick={() => handlePush(post._id)}
              ></i>
              <i
                className="icon-delete far fa-trash-alt"
                // onClick={handleDelete}
              ></i>
            </CCardBody>
          </CCard>
        );
      })}
    </div>
  );
}

export default ListContent;
