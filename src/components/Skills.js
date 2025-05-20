
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
  return (
    <section className="project" id="skills">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Skills</h2>
                  <p>Here are some of the technologies I'm familiar with:</p>

                  {/* Skill Circles Section */}
                  <div className="d-flex justify-content-center align-items-center flex-wrap gap-4 my-4">
                    <div className="skill-circle text-center rounded-circle d-flex flex-column justify-content-center align-items-center">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" alt="Flutter" width="50" height="50" />
                      <span className="mt-2 text-white">Flutter</span>
                    </div>
                    <div className="skill-circle text-center rounded-circle d-flex flex-column justify-content-center align-items-center">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="50" height="50" />
                      <span className="mt-2 text-white">React</span>
                    </div>
                    <div className="skill-circle text-center rounded-circle d-flex flex-column justify-content-center align-items-center">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" alt="C" width="50" height="50" />
                      <span className="mt-2 text-white">C</span>
                    </div>
                    <div className="skill-circle text-center rounded-circle d-flex flex-column justify-content-center align-items-center">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/225px-Python-logo-notext.svg.png" alt="python" width="50" height="50" />
                      <span className="mt-2 text-white">Python</span>
                    </div>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}
