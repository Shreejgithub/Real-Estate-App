import React from "react"
import img from "../images/about.jpg"
import Back from "../common/Back"
import "./contact.css"
import Footer from "../common/footer/Footer"
import ScrollToTop from "../ScrollToTop"
import Header from "../common/header/Header"

const Contact = () => {
  return (
    <>
    <Header />
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Email' />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea cols='30' rows='10'></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default Contact
