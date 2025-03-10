import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/rashi.jpeg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Resume from './Rashini Nethmini_SE.pdf';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Welcome to my Portfolio" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                {/* <span className="tagline"> */}
                <h3><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Welcome to my Portfolio" ]'><span className="wrap">{text}</span></span>
                {/* </span> */}</h3>
                <h1>Hi! I'm <br/>
                Rashini Nethmini</h1>
                  <p>Final Year Undergraduate <br/>University of Moratuwa</p>
                  <a href={Resume} download style={{textDecoration:'none'}}> <button onClick={() => console.log('connect')}><ArrowRightCircle size={25} /> &nbsp;&nbsp;Download my CV </button></a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
          {/* <TrackVisibility>
    {({ isVisible }) => ( */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "400px", // Adjust the size as needed
          height: "400px", // Adjust the size as needed
          borderRadius: "50%", // Make it a circle
          overflow: "hidden",
          backgroundColor: "#f0f0f0", // Set a background color
        }}>
        
        <img
          src={headerImg}
          alt="Header Img"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    {/* )} */}
  {/* </TrackVisibility> */}
          </Col>
        </Row>
      </Container>
    </section>
  )
}