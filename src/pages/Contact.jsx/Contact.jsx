import React from 'react'
import Footer from '../../components/footer/Footer'
import '../../index.css'
import './Contact.css'

const Contact = () => {
  return (
    <>

    {/* <!-- =================================CONTACT SECTION ================================= --> */}

    <section className="contact">
        <div className="container contact_container">
            <aside className="contact_aside">
                <div className="aside_image">
                    <img src="../../image/u-otp.png" alt=""/>
                </div>
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor Officia similique iure deserunt incidunt, dolorem ipsa aperiam!</p>
                <ul className="contact_details">
                    <li>
                        <span className="info_icon">X</span>
                        <h5>+91 9749571885</h5>
                    </li>
                    <li>
                        <span className="info_icon">X</span>
                        <h5>support@eaducation.com</h5>
                    </li>
                    <li>
                        <span className="info_icon">X</span>
                        <h5>335714512</h5>
                    </li>
                    <li>
                        <span className="info_icon">X</span>
                        <h5>Kolkata,wb</h5>
                    </li>
                </ul>
                <ul className="contact_social">
                    <li><a href="#">X</a></li>
                    <li><a href="#">X</a></li>
                    <li><a href="#">X</a></li>
                    <li><a href="#">X</a></li>
                </ul>
            </aside>

            <form>
                <div className="form_name">
                    <input type="text" name="firstname" placeholder="First Name" required/>
                    <input type="text" name="lastname" placeholder="Last Name" required/>
                </div>
                <input type="email" name="email" placeholder="Your Email" required/>
                <textarea name="message"rows="5" required placeholder="Message"></textarea>
                <button className="btn btn-primary">Send Message</button>
            </form>
        </div>
    </section>



    {/* <!------------------------------------------- end of contact section ----------------------------------------- --> */}





    {/* <!-- ====================================FOOTER==================================== --> */}
    <Footer/>


    </>
  )
}

export default Contact
