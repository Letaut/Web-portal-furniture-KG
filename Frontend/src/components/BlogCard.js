import React from "react";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  const { id, title, description, image, date } = props;
  
  // Проверяем, есть ли изображение
  const hasImage = image !== undefined && image !== null;

  return (
    <div className="blog-card">
      <div className="card-image">
        {hasImage ? (
          <img src={image} className="img-fluid w-100" alt="blog" />
        ) : (
          // Вместо изображения по умолчанию можно использовать плейсхолдер
          <div className="placeholder"></div>
        )}
      </div>
      <div className="blog-content">
        <p className="date">{date}</p>
        <h5 className="title">{title}</h5>
        <p
          className="desc"
          dangerouslySetInnerHTML={{
            __html: description?.substr(0, 70) + "...",
          }}
        ></p>
        <Link to={"/blog/" + id} className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
