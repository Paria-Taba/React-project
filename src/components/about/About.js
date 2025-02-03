import "./About.css"
function About() {
  return (
    <div className="about-div">
      <div className="about-center">
        <p className="about-title">About me</p>
        <img src="./images/about.jpg" className="about-img"/>
      </div>
      <p>
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
        Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
        Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget
        tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor
        volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit
        amet dui. porttitor at sem. Nulla porttitor accumsan tincidunt. Quisque
        velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor
        accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh
        pulvinar a.
      </p>
    </div>
  );
}
export default About;
