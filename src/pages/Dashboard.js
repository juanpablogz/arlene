import React, { useContext, Suspense, lazy, useState } from "react";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";
import UserContext from "../context/UserContext";
const Table = lazy(() => import("../components/Table"));
export const Dashboard = () => {
  const { logout, data, isError , isLoading } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [postsPerPage] = useState(10);
  const [pageNumbers, setPageNumbers] = useState([1,2,3,4,5,6,7])
  return (
    <Suspense fallback={<Spinner />}>
      <h1 onClick={logout}>logout</h1>
      <Table/>
      <Pagination
        pageNumber={postsPerPage}
        totalPosts={posts.length}
        paginate={3}
        pageNumbers={pageNumbers}
      />
    </Suspense>
  );
};
