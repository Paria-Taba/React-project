import "./header.css";
import Nav from "../Nav";
function Header() {
  return (
    <div className="header-div">
      <div className="header-row">
        <div className="title-div">
          <p className="title-header">Next1code</p>
        </div>
        <Nav></Nav>
      </div>
      <div className="center-header">
        <h1>I am Paria Taba</h1>
        <p>Hello World</p>
      </div>
    </div>
  );
}
export default Header;
