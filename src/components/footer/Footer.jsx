import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      
      <footer>
            <div className="container footer_container">
                <div className="footer_1">
                    <a href="index.html"><h4>EADUCATION</h4></a>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quas!</p>
                </div>

                <div className="footer_2">
                    <h4>Links</h4>
                    <ul className="peremslinks">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="course.html">Course</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>

                <div className="footer_3">
                    <h4>Privecy</h4>
                    <ul className="privecy">
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Terms and conditions</a></li>
                        <li><a href="#">Refund policy</a></li>
                    </ul>
                </div>

                <div className="footer_4">
                    <h4>Contact Us</h4>
                    <div>
                        <p>+91 9749571885</p>
                        <p>asutoshsidhya@gmail.com</p>
                    </div>
                    <ul className="footer_social">
                        <li><a href="#"><abbr title="Facebook">X</abbr></a></li>
                        <li><a href="#"><abbr title="Instagram">X</abbr></a></li>
                        <li><a href="#"><abbr title="Twitter">X</abbr></a></li>
                        <li><a href="#"><abbr title="LinkInd">X</abbr></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer_copyright">
                <small>Copyright & EADUCATION || 2023</small>
            </div>
        </footer> 
    </>
  )
}

export default Footer
