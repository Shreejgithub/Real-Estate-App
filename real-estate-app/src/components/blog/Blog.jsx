import React from 'react'
import Back from '../common/Back'
import img from '../images/about.jpg'
import RecentCard from '../home/recent/RecentCard'
import Footer from '../common/footer/Footer'
import ScrollToTop from '../ScrollToTop'
import Header from '../common/header/Header'

const Blog = () => {
  return (
    <>
    <Header />
    <section className='blog-out md'>
        <Back name="Blogs" title=" Blogs - All Blogs" cover={img}/>
        <div className="container recent">
            <RecentCard />
        </div>
    </section>
    <ScrollToTop />
    <Footer />
    </>
  )
}

export default Blog









// import React from "react"
// import Back from "../common/Back"
// import RecentCard from "../home/recent/RecentCard"
// import "../home/recent/recent.css"
// import img from "../images/about.jpg"

// const Blog = () => {
//   return (
//     <>
//       <section className='blog-out mb'>
//         <Back name='Blog' title='Blog Grid - Our Blogs' cover={img} />
//         <div className='container recent'>
//           <RecentCard />
//         </div>
//       </section>
//     </>
//   )
// }

// export default Blog
