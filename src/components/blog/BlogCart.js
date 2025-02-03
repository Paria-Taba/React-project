import "./BlogCart.css";
function BlogCart(props) {
  return (
    <div className="blog-div">
      <img src={props.src} className="blog-img" />
      <div className="blog-box-text">
        <p className="title-blog">{props.name}</p>
        <p>{props.text}</p>
      </div>

      <div className="blog-row">
        <div>
          <p>Paria Taba</p>
        </div>
        <div>
          <span className="bi bi-clock"></span>
          <span className="min">10 min</span>
        </div>
      </div>
    </div>
  );
}
export default BlogCart;
