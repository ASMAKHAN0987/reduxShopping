import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Layout from './Layout'
import { Provider } from 'react-redux'
import {store} from './store/store.js'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path='' element={<Home/>}/>
       <Route path='cart' element={<Cart/>}/>
    </Route>
  )
)
function App() {
  return (
    <>
     <Provider store={store}>
     <RouterProvider router={router}/>
     </Provider>
    </>
  )
}

export default App