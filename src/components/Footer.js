import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/github-icon.svg';
import navIcon4 from '../assets/img/hackerrank-4.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <br/>
      <Container>
        <Row className="align-items-center">
      
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/rashini-nethmini-60102a216/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/rashini.nethmini.1?mibextid=ZbWKwL" target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://github.com/RashiniNethmini" target="_blank"><img src={navIcon3}  alt="" /></a>
                <a href="https://www.hackerrank.com/rashiniNethmini?hr_r=1" target="_blank"><img src={navIcon4} alt="" /></a>
             
            </div>
           
          </Col>
        </Row>
      </Container>
    </footer>
  )
}