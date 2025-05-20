import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import linkdin from '../assets/img/instagram.svg'
import facebook from '../assets/img/facebook.svg';
import instagram from '../assets/img/instagram.svg';
import tgicon from '../assets/img/telegram.svg'

const currentYear = new Date().getFullYear();
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <h1 className="navbar-name">Albin<span className="navbar-lastname">Binu</span></h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
             {/* linkdin icon */}
                             <a href="#"><img src={linkdin} alt="" /></a>
                             {/* fb icon */}
                             <a href="#"><img src={facebook} alt="" /></a>
                             {/* instagram icon */}
                             <a href="https://instagram.com/albinbinu.me"><img src={instagram} alt="" /></a>
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