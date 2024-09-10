import React from 'react'
import "./style.css"
import Heading from '../../common/Heading'
import { location } from '../../data/Data'
const Location = () => {
  return (
    <>
    <section className='location padding'>
        <div className='container'>
            <Heading title="It all available at your convenience place" subtitle="Every thing you want at your Convenience that will be available here"/>

            <div className="content grid3 mtop">
                {location.map((item, index) => (
                    <div className="box" key={index}>
                        <img src={item.cover} alt=''/>
                        <div className="overlay">
                            <h5>{item.name}</h5>
                            <p>
                                <label>{item.Villas}</label>
                                <label>{item.Apartments}</label>
                                <label>{item.Offices}</label>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    </>
  )
}

export default Location



