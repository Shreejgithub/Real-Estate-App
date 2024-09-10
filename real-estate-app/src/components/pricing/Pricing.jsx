import React from 'react'
import Back from '../common/Back'
import PriceCard from '../home/price/PriceCard'
import img from '../images/pricing.jpg'
import Footer from '../common/footer/Footer'
import ScrollToTop from '../ScrollToTop'
import Header from '../common/header/Header'

const Pricing = () => {
  return (
    <>
    <Header />
    <section className="pricing-out md">
            <Back name="Pricing" title="Pricing - Discover best prices here" cover={img}/>
        <div className='price container'>
            <PriceCard />
        </div>
    </section>
    <ScrollToTop />
    <Footer />
    </>
  )
}

export default Pricing