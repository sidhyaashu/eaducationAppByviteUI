import React, { useState } from 'react'
import './Faq.css'

const Faq = () => {
    const [isOpen,setIsOpen] = useState(true)
  return (
    <>
      
      <section className="faqs">
            <h2>Frequently Asked Questions</h2>
            <div className="container faqs_container"  >

                <article className="faq" onClick={()=>setIsOpen(!isOpen)} >
                    <span className="faq_icon">{isOpen?"-":"+"}</span>
                    <div className="quistion_answar" >
                        <h4>How do i know the ans</h4>
                        <p style={{display:isOpen?"block":"none",}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorem quod repellat ex sint dolore neque amet modi sit perspiciatis!
                        </p>
                    </div>
                </article>

                <article className="faq" onClick={()=>setIsOpen(!isOpen)} >
                    <span className="faq_icon">{isOpen?"-":"+"}</span>
                    <div className="quistion_answar" >
                        <h4>How do i know the ans</h4>
                        <p style={{display:isOpen?"block":"none",}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorem quod repellat ex sint dolore neque amet modi sit perspiciatis!
                        </p>
                    </div>
                </article>

            </div>
        </section> 
    </>
  )
}

export default Faq
