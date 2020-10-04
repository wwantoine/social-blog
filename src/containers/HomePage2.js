import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { blogActions } from "../redux/actions/blog.actions";
import BlogCard from "../components/BlogCard";

const HomePage = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const loading = useSelector((state) => state.blog.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(blogActions.blogRequest());
  }, [dispatch]);
  return (
    <Container>
      <Row>
        <Col>
          <h1>Home Page</h1>
          {loading ? (
            <h2>Currently loading</h2>
          ) : (
            <>
              {blogs.map((blog) => (
                <BlogCard blog={blog} key={blog._id} />
              ))}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
