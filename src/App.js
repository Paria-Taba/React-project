
import Header from "./components/header/header";
import "./App.css";
import About from "./components/about/About";
import Service from "./components/service/Service";
import Blog from "./components/blog/Blog.js";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <About></About>
	  <Service></Service>
	  <Blog></Blog>
	  <Footer></Footer>
    </>
  );
}
export default App;
