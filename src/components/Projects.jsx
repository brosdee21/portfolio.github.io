import { Col, Container, Tab, Nav, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/Bose concept.png";
import projImg2 from "../assets/img/E-commerce.png";
import projImg3 from "../assets/img/Face recognition.png";
import projImg4 from "../assets/img/Hotels.png";
import projImg5 from "../assets/img/Music.png";
import projImg6 from "../assets/img/Musics.png";
import projImg7 from "../assets/img/bank app.png";
import projImg8 from "../assets/img/bankproject.png";
import projImg9 from "../assets/img/robofriends.png";
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

    const projects = [
            {
              title: "House Interior Design",
              description: "HTML & CSS",
              imgUrl: projImg1,
            },
            {
              title: "E-commerce Admin Dashboard",
              description: "HTML, CSS & Javascript",
              imgUrl: projImg2,
            },
            {
              title: "Face Recognition App",
              description: "React.js, Node.js + Express.js & Postgre SQL",
              imgUrl: projImg3,
            },
            {
              title: "Simple Hotel Advertisement Site",
              description: "HTML & CSS",
              imgUrl: projImg4,
            },
            {
              title: "Music App",
              description: "React.js & Redux",
              imgUrl: projImg5,
            },
            {
              title: "Music App2",
              description: "React.js & Redux",
              imgUrl: projImg6,
            },
            {
              title: "Web banking app",
              description: "Vite.js & Tailwind css",
              imgUrl: projImg7,
            },
            {
              title: "Web banking app",
              description: "PHP",
              imgUrl: projImg8,
            },
            {
              title: "Robo friends",
              description: "React.js & Redux",
              imgUrl: projImg9,
            },
          ];
    

    return(
        <section className="project" id="project">
            <Container>
              <Row>
                <Col>
                <TrackVisibility>
                {({ isVisible }) =>
                <div className={ isVisible ? "animated__animated animate__bounce" : ""}>
                  <h2>Projects</h2>
                  <p>Projects I have done over the years</p>
                  </div>}
                  </TrackVisibility>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab Two</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Tab Three
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard key={index}
                                {...project} />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second"><Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard key={index}
                                {...project} />
                              )
                            })
                          }
                        </Row></Tab.Pane>
                      <Tab.Pane eventKey="third"><Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard key={index}
                                {...project} />
                              )
                            })
                          }
                        </Row></Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                </Col>
              </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="" />
        </section>
    )
 }                    
