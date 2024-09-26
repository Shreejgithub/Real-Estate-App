import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import About from "../about/About"
import Services from "../services/Services"
import Blog from "../blog/Blog"
import Pricing from "../pricing/Pricing"
import Contact from "../contact/Contact"
import userlogin from "../login/userlogin"
import AdminLogin from "../login/adminlogin"
import VendorLogin from "../login/vendorlogin"
import UserRegistration from "../login/userregistration"
import AdminRegistration from "../login/adminregistration"
import VendorRegistration from "../login/vendorregistration"
import admin from "../../admin/admin"
import vendorlist from "../../admin/vendorlist"
import Admin from "../../admin/admin"
import vendorReg from "../../vendor/vendorReg"
import viewDetailAdmin from "../../admin/viewDetailAdmin"
import AcceptReq from "../../admin/AcceptReq"
import fillDetails from "../../vendor/fillDetails"

const Pages = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={userlogin} />
          <Route exact path='/userregisteration' component={UserRegistration} />
          <Route exact path='/adminlogin' component={AdminLogin} />
          <Route exact path='/adminregisteration' component={AdminRegistration} />
          <Route exact path='/vendorlogin' component={VendorLogin} />
          <Route exact path='/vendorregisteration' component={VendorRegistration} />
          <Route exact path='/vendorlist' component={vendorlist} />
          <Route exact path='/admin' component={Admin} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />

    <Route path="/accepted-requests" component={AcceptReq} />


          <Route exact path='/vendorreg' component={vendorReg} />
          <Route exact path='/filldetails' component={fillDetails} />

          <Route exact path='/viewdetailadmin' component={viewDetailAdmin} />

          <Route exact path='/admin' component={admin} />
        </Switch>
      </Router>
    </>
  )
}

export default Pages
