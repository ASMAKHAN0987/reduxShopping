import React from 'react'
import Products from '../components/Products'
import { useDispatch } from 'react-redux'

function Home() {
  return (
    <>
    <div className='heading'>Welcome to redux toolkit</div>
    <h3>Products</h3>
     <Products/>
    </>
  )
}

export default Home