import React, { useState } from 'react'
import './recent.css'
import Heading from '../../common/Heading'
import RecentCard from './RecentCard'

const Recent = () => {
  // State to store the selected filter
  const [filter, setFilter] = useState("All");

  return (
    <>
      <section className='recent padding'>
        <div className="container">
          <Heading title='This Property is available' subtitle='You can connect and will get you best deals'/>

          {/* Filter buttons */}
          <div className="filter-buttons d-flex align-items-center justify-content-center rounded">
            <button className={filter === "All" ? "active" : ""} onClick={() => setFilter("All")}>All</button>
            <button className={filter === "For Rent" ? "active" : ""} onClick={() => setFilter("For Rent")}>For Rent</button>
            <button className={filter === "For Sale" ? "active" : ""} onClick={() => setFilter("For Sale")}>For Sale</button>
          </div>

          {/* Pass the filter state to RecentCard */}
          <RecentCard filter={filter} />
        </div>
      </section>
    </>
  )
}

export default Recent;












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

