// import React from 'react'
// import Footer from '../footer/Footer'
// import Navbar from '../navbar/TopNvbar'

// function Layout({ children }) {
//   return (
//     <div>
//       <Navbar />
//       <div className="content">
//         {children}
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default Layout

import React from 'react'
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"

const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>

        <div className="content">
          <pre>
            [ 
              I am layout 
            <br />
            {children}
            ]
          </pre>
        </div>

        <Footer/>
      
    </div>
  )
}

export default Layout

