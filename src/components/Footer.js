import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import tgicon from '../assets/img/telegram.svg'

const currentYear = new Date().getFullYear();
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
             {/* linkdin icon */}
                             <a href="#"><img src={navIcon1} alt="" /></a>
                             {/* fb icon */}
                             <a href="#"><img src={navIcon2} alt="" /></a>
                             {/* instagram icon */}
                             <a href="https://instagram.com/albinbinu.me"><img src={navIcon3} alt="" /></a>
                             {/* tg icon */}
                             <a href="t.me/Albin_binu"><img src={tgicon} alt=""/></a>
            </div>
            <p>Copyright {currentYear}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}