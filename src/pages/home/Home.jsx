import React from 'react'
import Faq from '../../components/fAskQuestions/Faq'
import Footer from '../../components/footer/Footer'
import '../../index.css'

const Home = () => {
  return (
    <>
      

        {/*//  <!-- ====================================================HEADER============================================== -->*/}

        <header>
            <div className="container header_container">
                <div className="header_left">
                    <h1>Lorem ipsum dolor sit amet consectetur </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore voluptate ab deserunt porro quod aut quibusdam quis nulla tenetur. Accusantium.</p>
                    <a href="course.html" className="btn btn-primary">Get Started</a>
                </div>
                <div className="header_right">
                    <img src="../../image//u-team.png" alt=""/>
                </div>
            </div>
        </header>


        {/* <!------------------------------------------------- end of header------------------------------------------> */}




        {/* <!-- =====================================================CETAGORIES================================================== --> */}

        <section className="categories">
            <div className="container categories_container">
                <div className="categories_left">
                    <h1>Categories</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus explicabo natus, ab in soluta rerum dicta dolorem repellendus commodi. Sit, mollitia repellendus corrupti perferendis enim natus praesentium tenetur ullam autem!</p>
                    <a href="#" className="btn">Lern More</a>
                </div>
                <div className="categories_right">
                    <article className="category">
                        <span className="category_icon">X</span>
                        <h5>Blockchain</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, facere.</p>
                    </article>

                    <article className="category">
                        <div className="category_icon">X</div>
                        <h5>Blockchain</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, facere.</p>
                    </article>

                    <article className="category">
                        <span className="category_icon">X</span>
                        <h5>Blockchain</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, facere.</p>
                    </article>

                    <article className="category">
                        <span className="category_icon">X</span>
                        <h5>Blockchain</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, facere.</p>
                    </article>

                    <article className="category">
                        <span className="category_icon">X</span>
                        <h5>Blockchain</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, facere.</p>
                    </article>

                    <article className="category">
                        <span className="category_icon">X</span>
                        <h5>Blockchain</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, facere.</p>
                    </article>
                </div>
            </div>
        </section> 
        {/* <!-- --------------------------------------------end of category------------------------------------------------ --> */}



        {/* <!-- =======================================================courses======================================================== --> */}
{/* 
         <section className="courses">
            <h2>Our Popular Courses</h2>
            <div className="container course__container">
                <artical className="course">
                    <div className="course_image">
                        <img src="../../image/pic3.jpg" alt=""/>
                    </div>
                    <div className="course_info">
                        <h4>Responsive course</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis pariatur eius totam quia reiciendis neque quisquam?</p>
                        <a href="course.html" className="btn btn-primary">Lern More</a>
                    </div>
                </artical>

                <artical className="course">
                    <div className="course_image">
                        <img src="../../image/pic3.jpg" alt=""/>
                    </div>
                    <div className="course_info">
                        <h4>Responsive course</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis pariatur eius totam quia reiciendis neque quisquam?</p>
                        <a href="course.html" className="btn btn-primary">Lern More</a>
                    </div>
                </artical>

                <artical className="course">
                    <div className="course_image">
                        <img src="../../image/pic3.jpg" alt=""/>
                    </div>
                    <div className="course_info">
                        <h4>Responsive course</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis pariatur eius totam quia reiciendis neque quisquam?</p>
                        <a href="course.html" className="btn btn-primary">Lern More</a>
                    </div>
                </artical>
            </div>
        </section>  */}

        {/* <!------------------------------------------------end of courses---------------------------------------------------> */}

        


        {/* <!--===================================== ASK QUISTIONS ===================================================--> */}
        <Faq/>
{/* 
         <section className="faqs">
            <h2>Frequently Asked Questions</h2>
            <div className="container faqs_container">
                <article className="faq">
                    <span className="faq_icon">+</span>
                    <div className="quistion_answar">
                        <h4>How do i know the ans</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorem quod repellat ex sint dolore neque amet modi sit perspiciatis!
                        </p>
                    </div>
                </article>

                <article className="faq">
                    <div className="faq_icon">+</div>
                    <div className="quistion_answar">
                        <h4>How do i know the ans</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorem quod repellat ex sint dolore neque amet modi sit perspiciatis!
                        </p>
                    </div>
                </article>
                <article className="faq">
                    <div className="faq_icon">+</div>
                    <div className="quistion_answar">
                        <h4>How do i know the ans</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorem quod repellat ex sint dolore neque amet modi sit perspiciatis!
                        </p>
                    </div>
                </article>
                <article className="faq">
                    <div className="faq_icon">+</div>
                    <div className="quistion_answar">
                        <h4>How do i know the ans</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorem quod repellat ex sint dolore neque amet modi sit perspiciatis!
                        </p>
                    </div>
                </article>
                <article className="faq">
                    <div className="faq_icon">+</div>
                    <div className="quistion_answar">
                        <h4>How do i know the ans</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorem quod repellat ex sint dolore neque amet modi sit perspiciatis!
                        </p>
                    </div>
                </article>
                <article className="faq">
                    <div className="faq_icon">+</div>
                    <div className="quistion_answar">
                        <h4>How do i know the ans</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorem quod repellat ex sint dolore neque amet modi sit perspiciatis!
                        </p>
                    </div>
                </article>
                <article className="faq">
                    <div className="faq_icon">+</div>
                    <div className="quistion_answar">
                        <h4>How do i know the ans</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorem quod repellat ex sint dolore neque amet modi sit perspiciatis!
                        </p>
                    </div>
                </article>
                <article className="faq">
                    <div className="faq_icon">+</div>
                    <div className="quistion_answar">
                        <h4>How do i know the ans</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorem quod repellat ex sint dolore neque amet modi sit perspiciatis!
                        </p>
                    </div>
                </article>
            </div>
        </section>  */}

        {/* <!------------------------------ end of the questions------------------------------------------> */}




        {/* <!--========================================================= TESTIMONIALS========================================================= --> */}

         {/* <section className="container testimonial_Container mySwiper">
            <h2>Students Testimonial</h2>
            <div className="swiper-wrapper ">
                <article className="testimonial swiper-slide">
                    <div className="avatar">
                        <img src="../../image/pic3.jpg" alt=""/>
                    </div>
                    <div className="testimonial_info">
                        <h5>Asutosh sidhya</h5>
                        <small>Student</small>
                    </div>
                    <div className="testimonial_body">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore corrupti labore non perferendis in nesciunt?
                        </p>
                    </div>
                </article>

                <article className="testimonial swiper-slide">
                    <div className="avatar">
                        <img src="../../image/pic3.jpg" alt=""/>
                    </div>
                    <div className="testimonial_info">
                        <h5>Asutosh sidhya</h5>
                        <small>Student</small>
                    </div>
                    <div className="testimonial_body">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore corrupti labore non perferendis in nesciunt?
                        </p>
                    </div>
                </article>

                <article className="testimonial swiper-slide">
                    <div className="avatar">
                        <img src="../../image/pic3.jpg" alt=""/>
                    </div>
                    <div className="testimonial_info">
                        <h5>Asutosh sidhya</h5>
                        <small>Student</small>
                    </div>
                    <div className="testimonial_body">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore corrupti labore non perferendis in nesciunt?
                        </p>
                    </div>
                </article>

                <article className="testimonial swiper-slide">
                    <div className="avatar">
                        <img src="../../image/pic3.jpg" alt=""/>
                    </div>
                    <div className="testimonial_info">
                        <h5>Asutosh sidhya</h5>
                        <small>Student</small>
                    </div>
                    <div className="testimonial_body">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore corrupti labore non perferendis in nesciunt?
                        </p>
                    </div>
                </article>

                <article className="testimonial swiper-slide">
                    <div className="avatar">
                        <img src="../../image/pic1.webp" alt=""/>
                    </div>
                    <div className="testimonial_info">
                        <h5>Asutosh sidhya</h5>
                        <small>Student</small>
                    </div>
                    <div className="testimonial_body">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore corrupti labore non perferendis in nesciunt?
                        </p>
                    </div>
                </article>
            </div>
            <div className="swiper-pagination"></div>
        </section>  */}

        {/* <!-------------------------------------------------------- end of Testimonial ------------------------------------------------------ --> */}






        {/* <!-- ====================================FOOTER==================================== --> */}
        <Footer/>

{/* 
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
        </footer>  */}

    {/* 

    <!-- =======================================FLOATING ACTION BTN ======================================= -->
    <button onclick="topFunction()" id="myBtn" title="Go to top">^</button>





        <!-- swiper js  -->
        <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
        <script src="../js/main.js"></script>
        <script>
            // swiper
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
            //when window width is >=600px
            breakpoints:{
                600:{
                    slidesPerView:2
                }
            }
        });
        </script>
    </body>
    </html>

    */}




    </>
  )
}

export default Home 
