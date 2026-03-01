import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import { FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.instagram.com/bros_dee3/"><FaInstagram /></a>
                            <a href="https://www.linkedin.com/in/dennis-nwaokolo/"><FaLinkedin /></a>
                            <a href="https://github.com/brosdee21"><FaGithub /></a>
                        </div>
                        <p>CopyRight 2022. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}