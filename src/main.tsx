import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import CollectionDetails from './collections/page.tsx'
import ProductDetails from './products/page.tsx'
import ToasterProvider from './provider/ToasterProvider.tsx'
import AboutPage from './about/page.tsx'
import Wishlists from './wishlists/page.tsx'
import Register from './auth/Register.tsx'
import Login from './auth/Login.tsx'
import SearchPage from './search/product/SearchPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
            <ToasterProvider />
           <BrowserRouter>
                <Routes>
                     <Route element={<App />} path='/'/>
                     <Route path='/register' element={<Register />}></Route>
                     <Route path='/login' element={<Login />}></Route>
                     <Route element={<CollectionDetails />} path='/collections/:id'/>
                     <Route element={<ProductDetails />} path='/products/:id'/>
                     <Route path='/search/product' element={<SearchPage />}></Route>
                     <Route element={<AboutPage />} path='/about'/>
                     <Route element={<Wishlists />} path='/wishlist'/>
                </Routes>
           </BrowserRouter>
  </StrictMode>,
)
