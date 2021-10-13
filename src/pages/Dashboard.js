import React, { useContext, Suspense, lazy, useState } from "react";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";
import UserContext from "../context/UserContext";
import useAxios from "../hooks/useAxios";
const Table = lazy(() => import("../components/Table"));
export const Dashboard = () => {
  const { logout } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([1,2,3,4,5,6,7])
  const {
    isLoading,
    isError,
    data: data,
  } = useAxios(`https://reqres.in/api/users?page=${page}`);
  return (
    <Suspense fallback={<Spinner />}>
      <h1 onClick={logout}>logout</h1>
      <Table data={data} isError={isError} isLoading={isLoading}/>
      <Pagination
        pageNumber={postsPerPage}
        totalPosts={posts.length}
        paginate={3}
        pageNumbers={pageNumbers}
      />
    </Suspense>
  );
};
