import React from 'react'
import "./recent.css"
import Heading from '../../common/Heading'
import RecentCard from './RecentCard'

const Recent = () => {
  return (
    <>
    <section className='recent padding'>
        <div className="container">
            <Heading title='This Property is available' subtitle='You can connect and will get you best deals'/>
            <RecentCard />
        </div>
    </section>
    </>
  )
}

export default Recent











// import React from "react"
// import Heading from "../../common/Heading"
// import "./recent.css"
// import RecentCard from "./RecentCard"

// const Recent = () => {
//   return (
//     <>
//       <section className='recent padding'>
//         <div className='container'>
//           <Heading title='Recent Property Listed' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
//           <RecentCard />
//         </div>
//       </section>
//     </>
//   )
// }

// export default Recent

