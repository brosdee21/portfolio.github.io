// import { useEffect, useState } from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";
// import { ArrowRightCircle } from "react-bootstrap-icons";
// import logo from "../assets/img/dennis.jpg";
// import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";

// const PDF_FILE_URL = "https://localhost:3000/CV.pdf";

// export const NavBar = ({ scrollToContact }) => {
//     const [activeLink, SetActiveLink] = useState('home');
//     const [scrolled, SeScrolled] = useState(false); 

//     useEffect(() => {
//         const onScroll = () => {
//             if(window.scrollY > 50) {
//                 SeScrolled(true);
//             }else {
//                 SeScrolled(false);
//             }
//         }
//         window.addEventListener("scroll", onScroll);
//         return () => window.removeEventListener("scroll", onScroll);
//     }, [])

//     const onUpdateActiveLink = (value) => {
//         SetActiveLink(value)
//     }
    

//    const downloadFileAtURL = (url) => {
//     fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             return response.blob();
//         })
//         .then(blob => {
//             const blobUrl = window.URL.createObjectURL(blob);
//             const fileName = url.split("/").pop();
//             const aTag = document.createElement("a");
//             aTag.href = blobUrl;
//             aTag.setAttribute("download", fileName);
//             document.body.appendChild(aTag);
//             aTag.click();
//             aTag.remove();
//             window.URL.revokeObjectURL(blobUrl);
//         })
//         .catch(error => {
//             console.error("Failed to download file:", error);
//             alert("Could not download the file. Please try again.");
//         });
// };


    
//     return(
// <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
//  <Container>
//     <Navbar.Brand href="#home"><img src={logo} alt="Logo" style={{  width: "100px", height: "100px", borderRadius: "80%" }}/></Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav"><span className="navbar-toggler-icon"></span></Navbar.Toggle>
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="me-auto">
//                     <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
//                     <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'}  onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
//                     <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'}  onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
//                     </Nav>
//                     <span className="navbar-text">
//                        <div className="social-icon">
//                         <a href="https://www.linkedin.com/in/dennis-nwaokolo"><img src={navIcon1} alt="" /></a>
//                          <a href="#a"><img src={navIcon2} alt="" /></a>
//                           <a href="https://www.instagram.com/bros_dee3?utm_source=qr&igsh=MWFpazF1dHNkb2lhNQ=="><img src={navIcon3} alt="" /></a>
//                        </div> 
//                        <Nav.Link
//                         href="#contact"
//                         className={`navbar-link connect-link ${activeLink === 'contact' ? 'active' : ''}`}
//                         onClick={() => onUpdateActiveLink('contact')}
//                         >
//                         Let's Connect
//                         </Nav.Link>
                        
//                             <button type="button" className="download"
//                             onClick={() => downloadFileAtURL("/CV.pdf")}>
//                                 DOWNLOAD CV <ArrowRightCircle size={25} />
//                             </button>
//                     </span>

//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     )
// }

import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import { FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'

 export const NavBar = () => {
    const [activeLink, SetActiveLink] = useState('home');
    const [scrolled, SeScrolled] = useState(false); 

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                SeScrolled(true);
            }else {
                SeScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        SetActiveLink(value)
    }
    
    return(
<Navbar expand="lg" className={scrolled ? "scrolled": ""}>
 <Container>
    <Navbar.Brand href="#home"><img src={logo} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"><span className="navbar-toggler-icon"></span></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'}  onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'}  onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    {/* <span className="navbar-text">
                       <div className="social-icon">
                        <a href="#a"><img src={navIcon1} alt="" /></a>
                         <a href="#a"><img src={navIcon2} alt="" /></a>
                          <a href="#a"><img src={navIcon3} alt="" /></a>
                       </div> 
                       <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect </span></button>
                       <button className="vvd" onClick={() => console.log('download')}><span>Download Resume </span></button>
                    </span> */}

                    <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.instagram.com/bros_dee3/"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/in/dennis-nwaokolo/"><FaLinkedin /></a>
                    <a href="https://github.com/brosdee21"><FaGithub /></a>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="vvd" onClick={() => console.log('connect')}>
                        <span>Let's Connect</span>
                    </button>
                    <a href="/DENNIS RESUME (3).pdf" download="Dennis_Resume.pdf">
                        <button className="vvd"><span>Download Resume</span></button>
                    </a>
</div>
            </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
