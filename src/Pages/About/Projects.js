import MotionHoc from "./../MotionHoc";
import './Project.css';
import React from "react";

const ProjectsComponent = () => {
  return (
    
    <div >
    <div className="a1" >
    <h1>About Us</h1>
    </div>
    
      <div className="a2" >
     <h2 className="a3"> College Incubator is a simple solution for the teachers and students
                to come near. With simple steps teacher can upload notes and
                students can use it. Also your suggestions are of great help to
                me. If you have any suggestion, kindly post it in the issue
                section of Github{" "}</h2>
     </div>
     <div className="a4" >
       <div className="a5">
     <h2 >Tech Stack</h2>
     </div>
     <div className="a6">
              <ul class="footer-links">
                <li>Express.js</li>
                <li>Node.js</li>
                <li>React.js</li>
                <li>MongoDB</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
              </div>
        </div>
        <div >
        <div className="a8" >
        <h2>Contact us</h2>
        </div>
        <div className="a7" >
              <ul class="footer-links">
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/gautam-arora-b2788b191/"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/Gautam-Arora24">
                    Github
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/gautamarora6248/?hl=en"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
              </div>
        </div>
    </div>
    
   
  );
};

const Projects = MotionHoc(ProjectsComponent);

export default Projects;

  
  /*<React.Fragment>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">
                College Space is a simple solution for the teachers and students
                to come near. With simple steps teacher can upload notes and
                students can use it. Also your suggestions are of great help to
                me. If you have any suggestion, kindly post it in the issue
                section of Github{" "}
              </p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Tech Stack</h6>
              <ul class="footer-links">
                <li>Express.js</li>
                <li>Node.js</li>
                <li>React.js</li>
                <li>MongoDB</li>
                <li>Bootstrap</li>
                <li>Material UI</li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>About Me</h6>
              <ul class="footer-links">
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/gautam-arora-b2788b191/"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/Gautam-Arora24">
                    Github
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/gautamarora6248/?hl=en"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; {new Date().getFullYear()} All Rights Reserved
                by Gautam Arora
              </p>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>*/