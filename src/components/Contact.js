import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/myfirst.jpeg";
import TrackVisibility from 'react-on-screen';
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    //lastName: '',
    email: '',
    // phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [done, setDone] = useState(false); // Add state for successful submission
  const form = useRef(null); // Create ref for form to be used in emailjs.sendForm

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    // Check if email and message fields are filled
  if (!formDetails.firstName || !formDetails.email || !formDetails.message) {
    setStatus({ success: false, message: 'Please fill the all fields.' });
    setButtonText("Send");
    return; // Stop further execution if fields are empty
  }
    
    // Use emailjs to send form data
    emailjs
      .sendForm(
        "service_pqyll8j",
        "template_h735l6w",
        form.current,
        "Al-S8RLTR8u_hlMf5"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setStatus({ success: true, message: 'Message sent successfully' });
        },
        (error) => {
          console.log(error.text);
          setStatus({ success: false, message: 'Something went wrong, please try again later.' });
        }
      );

    setButtonText("Send");
    setFormDetails(formInitialDetails);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Contact Me</h2>
                  <form ref={form} onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="Name"
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                          name="user_name"
                        />
                      </Col>
                      {/* <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                          name="user_name"
                        />
                      </Col> */}
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                          name="user_email"
                        />
                      </Col>
                      {/* <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                        />
                      </Col> */}
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                          name="message"
                        />
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                    </Row>
                  </form>
                  <br/>
                  {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"} style={{ color: 'black' }}>{status.message}</p>
                        </Col>
                      }
                  {done && <span>Thanks for contacting me</span>}
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
