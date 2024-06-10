import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getABlog } from "../features/blogs/blogSlice";

const SingleBlog = () => {
  const blogState = useSelector((state) => state.blog.singleblog);
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getABlog(getBlogId));
  }, [dispatch, getBlogId]);

  // Logging the blogState to check the data structure and the image URL
  console.log("blogState: ", blogState);

  if (!blogState) {
    return <div>Loading...</div>;
  }

  const imageUrl = blogState.images && blogState.images.length > 0 ? blogState.images[0].url : null;

  // Additional logging
  console.log("imageUrl: ", imageUrl);
  console.log("blogState.images: ", blogState.images);

  return (
    <>
      <Meta title={blogState.title} />
      <BreadCrumb title={blogState.title} />
      <Container className="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" /> Go back to Blogs
              </Link>
              <h3 className="title">{blogState.title}</h3>
              {imageUrl ? (
                <img
                  src={imageUrl}
                  className="img-fluid w-100 my-4"
                  alt={blogState.title}
                  style={{ maxHeight: "500px", objectFit: "cover" }}
                  onError={(e) => { e.target.src = 'default-image-url.jpg'; console.error("Image failed to load:", imageUrl); }}
                />
              ) : (
                <p>No image available</p>
              )}
              <p
                dangerouslySetInnerHTML={{ __html: blogState.description }}
              ></p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;