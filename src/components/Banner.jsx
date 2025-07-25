import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["MERN Stack Developer", "DevOps Engineer", "Software Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000; 

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text, delta])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);  

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(true);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }

    }

    return(
       <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animated__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome To My Portfolio</span>
                    <h1>{`Hi my name is Dennis `}<span className="wrap">{text}</span></h1>
                    <p>I am a MERN Stack Developer and DevOps Engineer</p>
                    <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
                    </div>}
                </TrackVisibility>
                    
                </Col>
                <Col xs={12} md={6} xl={7}>
                    <img src={headerImg} alt="Headder Img" />
                </Col>
            </Row>
        </Container>
       </section> 
    )
}