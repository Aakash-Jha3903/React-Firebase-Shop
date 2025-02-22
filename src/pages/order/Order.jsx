import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'


const Order = () => {
  const context = useContext(myContext)
  console.log(context)
  return (
    // <div>
    //   i am ordeers...
    // </div>
    <Layout> Orders inside the layout-tag ; 
      <br /> <span  style={{ backgroundColor: context.color }}> {context.color} </span>

    </Layout>
    
  )
}

export default Order
