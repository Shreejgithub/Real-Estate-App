import React from 'react'
import "./Featured.css"
import Heading from '../../common/Heading'
import FeaturedCard from './FeaturedCard'

const Featured = () => {
  return (
    <>
    <section className='featured background'>
        <div className="container">
            <Heading title='Feature Property Types' subtitle='Find all property here'/>
            <FeaturedCard />
        </div>
    </section>
    </>
  )
}

export default Featured





// import React from "react"
// import Heading from "../../common/Heading"
// import "./Featured.css"
// import FeaturedCard from "./FeaturedCard"

// const Featured = () => {
//   return (
//     <>
//       <section className='featured background'>
//         <div className='container'>
//           <Heading title='Featured Property Types' subtitle='Find All Type of Property.' />
//           <FeaturedCard />
//         </div>
//       </section>
//     </>
//   )
// }

// export default Featured
