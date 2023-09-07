import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/hardwareP.PNG";
import projImg2 from "../assets/img/SSPPP.PNG";
import projImg3 from "../assets/img/pro3.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  // const projects = [
  //   {
  //     title: "Hardware Project",
  //     description: "Multifunctional Massaging Chair",
  //     imgUrl: projImg1,
  //     ref:"https://github.com/isuru225/Level-01-Hardware-Project"
  //   },
  //   {
  //     title: "AppoMo",
  //     description: "Appointment Management System",
  //     imgUrl: projImg2,
  //     ref:"https://github.com/isuru225/Level-01-Hardware-Project"
  //   },
  //   {
  //     title: "Game Zone",
  //     description: "Multiple games in one place",
  //     imgUrl: projImg3,
  //     ref:"https://github.com/isuru225/Level-01-Hardware-Project"
  //   },
  //   // {
  //   //   title: "Business Startup",
  //   //   description: "Design & Development",
  //   //   imgUrl: projImg1,
  //   // },
  //   // {
  //   //   title: "Business Startup",
  //   //   description: "Design & Development",
  //   //   imgUrl: projImg2,
  //   // },
  //   // {
  //   //   title: "Business Startup",
  //   //   description: "Design & Development",
  //   //   imgUrl: projImg3,
  //   // },
  // ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>You'll find a variety of projects in this part that demonstrate my varied skill set, aptitude for original problem-solving, and commitment to providing useful solutions in a range of fields.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {/* <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {/* {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        } */}
                        <Col size={12} sm={6} md={4}>
                        <a href="https://github.com/isuru225/Level-01-Hardware-Project" target="_blank"><div className="proj-imgbx">
                            
                            <img src={projImg1} style={{ height: '230px' }}/>
                              <div className="proj-txtx">
                                <h4>Hardware Project</h4>
                                <span>Multifunctional Massaging Chair</span>
                              </div>
                           
                            </div>
                            </a>
                        </Col>
                        <Col size={12} sm={6} md={4}>
                        <a href="https://github.com/RashiniNethmini/AppoMo" target="_blank">
                            <div className="proj-imgbx">
                            
                            <img src={projImg2} style={{ height: '230px' }} />
                              <div className="proj-txtx">
                                <h4>AppoMo</h4>
                                <span>Appointment Management System</span>
                              </div>
                              
                            </div>
                            </a>
                        </Col>
                        <Col size={12} sm={6} md={4}>
                        <a href="https://github.com/shakila2030/Game-Zone" target="_blank">
                            <div className="proj-imgbx">
                           
                            <img src={projImg3} style={{ height: '230px' }}/>
                              <div className="proj-txtx">
                                <h4>Game Zone</h4>
                                <span>Multiple games in one place</span>
                              </div>
                            
                            </div>
                            </a>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}