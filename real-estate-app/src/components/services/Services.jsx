import React from 'react'
import Back from '../common/Back'
import img from '../images/services.jpg'
import RecentCard from '../home/recent/RecentCard'
import FeaturedCard from '../home/featured/FeaturedCard'
import Footer from '../common/footer/Footer'
import ScrollToTop from '../ScrollToTop'
import Header from '../common/header/Header'

const Services = () => {
  return (
    <>
    <Header />
    <section className='service mb'>
      <Back name="Services" title='Services - All Services' cover={img}/>
      <div className="featured container">
        <FeaturedCard />
      </div>
    </section>
    <Footer />
    <ScrollToTop />
    </>
  )
}

export default Services
















// import React from "react"
// import img from "../images/services.jpg"
// import Back from "../common/Back"
// import "../home/featured/Featured.css"
// import FeaturedCard from "../home/featured/FeaturedCard"

// const Services = () => {
//   return (
//     <>
//       <section className='services mb'>
//         <Back name='Services' title='Services -All Services' cover={img} />
//         <div className='featured container'>
//           <FeaturedCard />
//         </div>
//       </section>
//     </>
//   )
// }

// export default Services
