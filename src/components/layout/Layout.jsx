import React from 'react'
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"

const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div className="content">
          <pre>
              I am layout 
            <br />The children data starts : <br />
            [  
            {children}
            ]
          </pre>
        </div>

        <Footer/>
      
    </div>
  )
}

export default Layout

