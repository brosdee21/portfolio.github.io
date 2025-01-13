// import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../assets/img/contact-img.svg";
// import axios from "axios";

// export const Contact = () => {
//   const formInitialDetails = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//   };

//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState("Send");
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//     setFormDetails({
//       ...formDetails,
//       [category]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText("Sending...");

//     // Validate form fields
//     if (
//       !formDetails.firstName ||
//       !formDetails.lastName ||
//       !formDetails.email ||
//       !formDetails.message
//     ) {
//       setStatus({ success: false, message: "Please fill out all fields." });
//       setButtonText("Send");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:8000/api/user", formDetails);
//       console.log("Message Delivered", response.data);

//       setStatus({ success: true, message: "Message sent successfully!" });
//       setFormDetails(formInitialDetails); // Reset form
//     } catch (error) {
//       console.error("Error:", error);
//       setStatus({ success: false, message: "Failed to send message. Try again later." });
//     } finally {
//       setButtonText("Send");
//     }
//   };

//   return (
//     <section className="contact" id="connect">
//       <Container>
//         <Row className="align-items-center">
//           <Col md={6}>
//             <img src={contactImg} alt="Contact Us" />
//           </Col>
//           <Col md={6}>
//             <h2>Get In Touch</h2>
//             <form onSubmit={handleSubmit}>
//               <Row>
//                 <Col sm={6} className="px-1">
//                   <input
//                     type="text"
//                     value={formDetails.firstName}
//                     placeholder="First Name"
//                     onChange={(e) => onFormUpdate("firstName", e.target.value)}
//                   />
//                 </Col>
//                 <Col sm={6} className="px-1">
//                   <input
//                     type="text"
//                     value={formDetails.lastName}
//                     placeholder="Last Name"
//                     onChange={(e) => onFormUpdate("lastName", e.target.value)}
//                   />
//                 </Col>
//                 <Col sm={6} className="px-1">
//                   <input
//                     type="email"
//                     value={formDetails.email}
//                     placeholder="Email Address"
//                     onChange={(e) => onFormUpdate("email", e.target.value)}
//                   />
//                 </Col>
//                 <Col sm={6} className="px-1">
//                   <input
//                     type="tel"
//                     value={formDetails.phone}
//                     placeholder="Phone Number"
//                     onChange={(e) => onFormUpdate("phone", e.target.value)}
//                   />
//                 </Col>
//                 <Col>
//                   <textarea
//                     rows="6"
//                     value={formDetails.message}
//                     placeholder="Message"
//                     onChange={(e) => onFormUpdate("message", e.target.value)}
//                   />
//                   <button type="submit">
//                     <span>{buttonText}</span>
//                   </button>
//                 </Col>
//                 {status.message && (
//                   <Col>
//                     <p className={status.success ? "success" : "danger"}>{status.message}</p>
//                   </Col>
//                 )}
//               </Row>
//             </form>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../assets/img/contact-img.svg";
// import axios from "axios";

// export const Contact = () => {
//   const formInitialDetails = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//   };

//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState("Send");
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//     setFormDetails({
//       ...formDetails,
//       [category]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText("Sending...");

//     // Validate form fields
//     if (
//       !formDetails.firstName ||
//       !formDetails.lastName ||
//       !formDetails.email ||
//       !formDetails.message
//     ) {
//       setStatus({ success: false, message: "Please fill out all fields." });
//       setButtonText("Send");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:8000/api/contact", formDetails);
//       setStatus({ success: true, message: "Message sent successfully!" });
//       setFormDetails(formInitialDetails); // Reset form
//     } catch (error) {
//       console.error("Error sending message:", error);
//       setStatus({ success: false, message: "Failed to send message. Try again later." });
//     } finally {
//       setButtonText("Send");
//     }
//   };

//   return (
//     <section className="contact" id="connect">
//       <Container>
//         <Row className="align-items-center">
//           <Col md={6}>
//             <img src={contactImg} alt="Contact Us" />
//           </Col>
//           <Col md={6}>
//             <h2>Get In Touch</h2>
//             <form onSubmit={handleSubmit}>
//               <Row>
//                 <Col sm={6} className="px-1">
//                   <input
//                     type="text"
//                     value={formDetails.firstName}
//                     placeholder="First Name"
//                     onChange={(e) => onFormUpdate("firstName", e.target.value)}
//                   />
//                 </Col>
//                 <Col sm={6} className="px-1">
//                   <input
//                     type="text"
//                     value={formDetails.lastName}
//                     placeholder="Last Name"
//                     onChange={(e) => onFormUpdate("lastName", e.target.value)}
//                   />
//                 </Col>
//                 <Col sm={6} className="px-1">
//                   <input
//                     type="email"
//                     value={formDetails.email}
//                     placeholder="Email Address"
//                     onChange={(e) => onFormUpdate("email", e.target.value)}
//                   />
//                 </Col>
//                 <Col sm={6} className="px-1">
//                   <input
//                     type="tel"
//                     value={formDetails.phone}
//                     placeholder="Phone Number"
//                     onChange={(e) => onFormUpdate("phone", e.target.value)}
//                   />
//                 </Col>
//                 <Col>
//                   <textarea
//                     rows="6"
//                     value={formDetails.message}
//                     placeholder="Message"
//                     onChange={(e) => onFormUpdate("message", e.target.value)}
//                   />
//                   <button type="submit">
//                     <span>{buttonText}</span>
//                   </button>
//                 </Col>
//                 {status.message && (
//                   <Col>
//                     <p className={status.success ? "success" : "danger"}>{status.message}</p>
//                   </Col>
//                 )}
//               </Row>
//             </form>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };


import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import axios from "axios";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    // Validate form fields
    if (
      !formDetails.firstName ||
      !formDetails.lastName ||
      !formDetails.email ||
      !formDetails.message
    ) {
      setStatus({ success: false, message: "Please fill out all fields." });
      setButtonText("Send");
      return;
    }

    try {
      await axios.post("http://localhost:3001/api/contact", formDetails);
      setStatus({ success: true, message: "Message sent successfully!" });
      setFormDetails(formInitialDetails);
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus({ success: false, message: "Failed to send message. Try again later." });
    }
  }     
 

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p className={status.success ? "success" : "danger"}>{status.message}</p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
