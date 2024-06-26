import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                    
                        <h2>Skills</h2>
                        <p>I'm happy to showcase my wide variety of technical expertise <br></br>and <br></br>creative qualities.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                           <div className="item">
                                {/* <img src={meter1} alt="Image" /> */}
                                <h5>Programming Languages</h5>
                                <hr></hr>
                                <h6 style={{fontSize:'15px'}}>Java</h6>
                                <h6 style={{fontSize:'15px'}}>C</h6> 
                                <h6 style={{fontSize:'15px'}}>Python</h6>
                                <h6 style={{fontSize:'15px'}}>C#</h6>
                            </div>
                            <div className="item">
                                {/* <img src={meter2} alt="Image" /> */}
                                <h5>Web Development</h5>
                                <hr></hr>
                                <h6 style={{fontSize:'15px'}}>HTML</h6>
                                <h6 style={{fontSize:'15px'}}>CSS</h6> 
                                <h6 style={{fontSize:'15px'}}>Javascript</h6>
                                <h6 style={{fontSize:'15px'}}>ReactJS</h6>
                                <h6 style={{fontSize:'15px'}}>VueJS</h6>
                                
                                
                            </div>
                            <div className="item">
                                {/* <img src={meter3} alt="Image" /> */}
                                <h5>Mobile Application Development</h5>
                                <hr></hr>
                                <h6 style={{fontSize:'15px'}}>React Native</h6>
                                <h6 style={{fontSize:'15px'}}><br/></h6> 
                                <h6 style={{fontSize:'15px'}}><br/> </h6>
                            </div>
                            <div className="item">
                                {/* <img src={meter3} alt="Image" /> */}
                                <h5>Backend <br/>Technologies</h5>
                                <hr></hr>
                                <h6 style={{fontSize:'15px'}}>Node JS</h6>
                                <h6 style={{fontSize:'15px'}}>.NET</h6> 
                                <h6 style={{fontSize:'15px'}}><br/> </h6>
                            </div>
                            <div className="item">
                                {/* <img src={meter1} alt="Image" /> */}
                                <h5>Database</h5>
                                <hr></hr>
                                <h6 style={{fontSize:'15px'}}>MYSQL</h6>
                                <h6 style={{fontSize:'15px'}}>MONGODB</h6> 
                                <h6 style={{fontSize:'15px'}}>MSSQL</h6> 
                                <h6 style={{fontSize:'15px'}}><br/> </h6>
                            </div>
                            {/* <div className="item">
                                {/* <img src={meter1} alt="Image" /> 
                                <h6>HTML</h6>
                            </div>
                            <div className="item">
                                {/* <img src={meter1} alt="Image" /> 
                                <h6>CSS</h6>
                            </div>
                            <div className="item">
                                {/* <img src={meter2} alt="Image" /> 
                                <h6>JavaScript</h6>
                            </div>
                            <div className="item">
                                {/* <img src={meter3} alt="Image" /> 
                                <h6>ReactJS</h6>
                            </div>
                            <div className="item">
                                {/* <img src={meter1} alt="Image" /> 
                                <h6>MYSQL</h6>
                            </div> */}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}