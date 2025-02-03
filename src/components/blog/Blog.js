import "./Blog.css";
import BlogCart from "./BlogCart";
function Blog() {
	let blogCarts=[
		{src:"./images/post-1.jpg", name:"post title 1", text:"Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."},
		{src:"./images/post-2.jpg", name:"post title 2", text:"Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."},
		{src:"./images/post-3.jpg", name:"post title 3", text:"Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."}
	]
  return (
    <div>
      <div className="blog-center">
        <p className="blog-title">BLOG</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="blog-cart">
        <BlogCart {...blogCarts[0]}></BlogCart>
        <BlogCart {...blogCarts[1]}></BlogCart>
        <BlogCart {...blogCarts[2]}></BlogCart>
      </div>
    </div>
  );
}
export default Blog;
