import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""} >
                  <h2>Experiences</h2>
                  <p>Experienced in delivering innovative solutions and managing projects effectively using modern technologies.</p>
                  
                  <div className="e"><div className="eone">
                  <h4>Software Engineer</h4>
  <p className="p1">IFS R&D International (Pvt) Ltd</p>
  <p className="p2">Oct 2025-Jan 2026</p>
  <h4>Intern Software Engineer</h4>
  <p className="p1">Hsenid Business Solutions</p>
  <p className="p2">Jan 2024-July 2024</p>
  
</div>

                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
