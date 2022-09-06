import { CCard, CCardHeader, CCardBody } from "@coreui/react";
import { useEffect, useState } from "react";
import axios from "axios";

function ListContent() {
  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    const res = await axios.get("/posts" + "?user=admin");
    setPosts(res.data);
    console.log(posts);
  }, []);
  return (
    <div>
      {posts.map((post) => {
        return (
          <CCard className="mb-4">
            <CCardHeader>{post.title}</CCardHeader>{" "}
            <CCardBody className="d-flex justify-content-between">
              <div>{post.desc}</div>
              <div>Show more content</div>
            </CCardBody>
          </CCard>
        );
      })}
    </div>
  );
}

export default ListContent;
