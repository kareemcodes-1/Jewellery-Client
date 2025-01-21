import { ReactNode } from 'react'
import Navbar from './components/navbar/navbar-black'
import Footer from './components/footer/Footer'

const Layout = ({children}: {children: ReactNode}) => {
  return (
    <>
        <Navbar />
             <main>
             {children}
             </main>
        <Footer />
    </>
  )
}

export default Layout